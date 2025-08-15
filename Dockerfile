# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
WORKDIR /app

# Instala dependencias
COPY package*.json ./
RUN npm ci

# Copia el resto del código
COPY . .

# Variables VITE para el build (EmailJS)
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY
ENV VITE_EMAILJS_SERVICE_ID=${VITE_EMAILJS_SERVICE_ID}
ENV VITE_EMAILJS_TEMPLATE_ID=${VITE_EMAILJS_TEMPLATE_ID}
ENV VITE_EMAILJS_PUBLIC_KEY=${VITE_EMAILJS_PUBLIC_KEY}

# Build de la app (Vite)
RUN npm run build


FROM nginx:alpine AS runner

# Config Nginx para SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia artefactos de build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


