# --- ETAPA 1: Builder ---
# Usamos una imagen de Node.js para compilar el proyecto
FROM node:18-alpine AS builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias y las instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Declaramos los argumentos que recibiremos desde docker-compose
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY

# Asignamos esos argumentos a variables de entorno para que `npm run build` los pueda usar
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID
ENV VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID
ENV VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY

# Ejecutamos el comando para compilar la aplicación y generar los archivos estáticos
RUN npm run build

# --- ETAPA 2: Production ---
# Usamos una imagen de Nginx súper ligera para servir los archivos
FROM nginx:stable-alpine

# Copiamos los archivos estáticos compilados desde la etapa 'builder'
# La carpeta de salida de 'npm run build' suele ser 'dist'. Si la tuya es otra (ej. 'build'), ajústala aquí.
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80, que es el puerto por defecto de Nginx
EXPOSE 80

# El comando por defecto de la imagen de Nginx se encargará de iniciar el servidor
CMD ["nginx", "-g", "daemon off;"]