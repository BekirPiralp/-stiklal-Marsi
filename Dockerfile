FROM isimsiz/angular:latest as builder
#ENV HOST="172.18.0.2"
#ENV PORT=3000
#EXPOSE ${PORT}
WORKDIR /home/project/
COPY ["package.json","package-lock.json","./*","./"]
COPY [".","."]
RUN npm install
#CMD ng serve --host ${HOST} --port ${PORT} --open
#CMD ng serve --host ${HOST} --port ${PORT} --open
RUN ng build


FROM nginx
ENV site=/usr/share/nginx/html
WORKDIR ${site}
#temizleme
RUN rm -f -d -r *
COPY --from=builder /home/project/dist/*/* "${site}/"

CMD ["nginx","-g","daemon off;"]