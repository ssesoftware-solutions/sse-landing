import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// CAMBIO 1: La interfaz de props ahora espera una `webhookUrl`.
interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentName: string;
  webhookUrl: string; // La URL específica del agente.
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// CAMBIO 2: Se recibe `webhookUrl` como prop.
const ChatModal = ({ isOpen, onClose, agentName, webhookUrl }: ChatModalProps) => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const greeting = language === 'es' 
        ? `¡Hola! Soy ${agentName}. ¿En qué puedo ayudarte hoy?`
        : `Hello! I'm ${agentName}. How can I help you today?`;
      
      setMessages([
        {
          id: "1",
          text: greeting,
          isUser: false,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, agentName, language]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    // Se añade una comprobación para no enviar si la URL no está presente.
    if (!newMessage.trim() || isLoading || !webhookUrl) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsLoading(true);

    try {
      // CAMBIO CLAVE: Se utiliza la prop `webhookUrl` en lugar de una URL fija.
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: newMessage,
          agent: agentName 
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      // Robustez: algunos webhooks devuelven { output: string } u otras claves
      const raw = await response.text();
      let data: any = raw;
      try { data = JSON.parse(raw); } catch { /* si no es JSON, usamos el raw */ }

      const extractResponseText = (payload: any): string | undefined => {
        if (!payload) return undefined;
        if (typeof payload === 'string') return payload;
        if (Array.isArray(payload)) {
          const parts = payload
            .map((item) => extractResponseText(item))
            .filter(Boolean) as string[];
          return parts.length ? parts.join('\n\n') : undefined;
        }
        return (
          payload.output ||
          payload.text ||
          payload.message ||
          payload.response ||
          payload.answer ||
          payload.content ||
          payload.result ||
          (payload.choices && payload.choices[0]?.message?.content)
        );
      };

      const resolvedText = extractResponseText(data);

      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: resolvedText || (language === 'es' ? "No he podido procesar tu consulta." : "I couldn't process your query."),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentResponse]);

    } catch (error) {
      console.error(`Error al contactar al webhook ${webhookUrl}:`, error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: language === 'es' 
          ? "Hubo un error de conexión. Por favor, inténtalo más tarde."
          : "There was a connection error. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[500px] max-h-[90vh] h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            {agentName}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.isUser && (
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-foreground" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="max-w-[80%] rounded-lg px-3 py-2 bg-muted text-muted-foreground flex items-center">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex gap-2 pt-4 border-t border-border">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={language === 'es' ? "Escribe tu mensaje..." : "Type your message..."}
            className="flex-1"
            disabled={isLoading}
          />
          <Button onClick={sendMessage} size="icon" disabled={isLoading}>
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;