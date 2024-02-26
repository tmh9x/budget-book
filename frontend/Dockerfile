FROM node:lts-alpine AS buildstage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest AS productionstage
COPY --from=buildstage /app/dist/frontend/browser /usr/share/nginx/html
# COPY --from=buildstage /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]