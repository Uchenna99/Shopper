# --- Stage 1: Build the Vite app ---
FROM node:18 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code and build the app
COPY . .
RUN npm run build

# --- Stage 2: Serve the built files with Nginx ---
FROM nginx:1.25
# Copy the built files from Vite's dist folder to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
