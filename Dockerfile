FROM node:16.14
WORKDIR /DevOps_Final
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]