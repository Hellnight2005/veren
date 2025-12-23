# Development Dockerfile
FROM node:20-bullseye

WORKDIR /src

# Copy only package.json first (to cache deps if unchanged)
COPY package*.json ./

# Install ALL dependencies (dev + prod, since we need TS + nodemon in dev)
RUN npm install

# Don't copy source code here! We'll mount it with volumes in docker-compose
# This keeps rebuilds fast and allows live reload.

# Expose port for local dev
EXPOSE 3000

# Run the app in dev mode (ts-node + nodemon)
CMD ["npm", "run", "dev"]
