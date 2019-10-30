FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package*.json /app/
RUN npm ci

# Copy app source
COPY . /app

CMD [ "npm", "start" ]
