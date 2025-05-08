# Use Node.js 22 as the base image
FROM node:22-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with a lightweight server
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy built files from the build stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
