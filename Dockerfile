FROM node:20
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --frozen-lockfile --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "serve" ]
