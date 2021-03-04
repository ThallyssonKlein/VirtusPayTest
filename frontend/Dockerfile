FROM node:15-alpine
EXPOSE 3000
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY frontendProject/package.json /app/package.json
COPY frontendProject/ .
RUN yarn
CMD ["yarn", "dev"]
