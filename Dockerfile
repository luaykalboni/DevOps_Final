FROM node:10.19.0
WORKDIR /opt/DevOps_Final
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]