FROM httpd:2.4.56

WORKDIR /usr/local/apache2/htdocs/
COPY build/ .

COPY conf/httpd.conf /usr/local/apache2/conf/httpd.conf
