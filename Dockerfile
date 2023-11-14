FROM node:latest as builder
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install

COPY . /usr/src/app
RUN npm run build


FROM nginx
RUN rm -rf /etc/nginx/conf.d
COPY nginx /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]