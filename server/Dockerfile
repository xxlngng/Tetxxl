FROM keymetrics/pm2:latest-alpine
ENV mypath /usr/src/app
WORKDIR $mypath
ADD . $mypath
RUN npm config set registry https://registry.npm.taobao.org/ && \  
    npm i
# RUN npm i
EXPOSE 3000
#pm2在docker中使用命令为pm2-docker
# CMD ["pm2-runtime", "start", "--json", "process.json"]
CMD ["npm", "run",  "start"]
