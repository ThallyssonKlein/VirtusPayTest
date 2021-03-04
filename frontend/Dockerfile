FROM node:13-alpine
EXPOSE 3000
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY frontendProject/package.json /app/package.json
RUN npm install
CMD ["npm", "run", "dev"]
