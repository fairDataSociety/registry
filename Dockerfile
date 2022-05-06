#build
FROM node:lts as build

WORKDIR /base
COPY yarn.lock .
COPY *.json ./
RUN yarn install
COPY . .
RUN yarn build

#webserver
FROM nginx:stable-alpine
ARG BUILD_CONTEXT
COPY --from=build /base/build /usr/share/nginx/html
COPY --from=build /base/cmd/files.json /usr/share/nginx/html
RUN chgrp -R nobody /usr/share/nginx/html
RUN echo "real_ip_header X-Forwarded-For;" \
    "real_ip_recursive on;" \
    "set_real_ip_from 0.0.0.0/0;" > /etc/nginx/conf.d/ip.conf
RUN sed -i '/index  index.html index.htm/c\        try_files $uri /index.html;' /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

