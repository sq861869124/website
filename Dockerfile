FROM registry.cn-hangzhou.aliyuncs.com/terminus/dice-nginx:1.1.0

# Set special timezone
RUN echo "Asia/Shanghai" | tee /etc/timezone

COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf.template

CMD sed -i "s^server_name .*^^g" /etc/nginx/conf.d/nginx.conf.template && \
    envsubst "`printf '$%s' $(bash -c "compgen -e")`" < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf && \
    /usr/local/openresty/bin/openresty -g 'daemon off;'
