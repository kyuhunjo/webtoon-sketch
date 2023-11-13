FROM node:16 AS builder
WORKDIR /app
COPY ./package* .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/conf.d
COPY ./nginx /etc/nginx

COPY --from=builder ./build /user/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]