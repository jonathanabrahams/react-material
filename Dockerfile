FROM node:alpine
WORKDIR /src
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["/bin/sh"]