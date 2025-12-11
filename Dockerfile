# Multi-stage build: build with Node 20, serve with Nginx
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* tsconfig.json vite.config.ts ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime
# Remove default config and add SPA-friendly config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
