FROM busybox

LABEL maintainer="Jeroen Pardon"

WORKDIR /opt/html

COPY src/ /opt/html

EXPOSE 80

ENTRYPOINT [ "httpd", "-f", "-v", "-u", "1000" ]
