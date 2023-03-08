FROM httpd:2.4.56

WORKDIR /usr/local/apache2/htdocs/
COPY build/ .
