FROM node:14-alpine

# Create app directory
WORKDIR /app
COPY . .

# Install server packages
RUN npm install
RUN npm install typescript -g
RUN npm install ts-node -g
RUN npm install nodemon -g

# Start app
EXPOSE 5000
CMD ["npm", "start"]
