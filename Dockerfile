FROM httpd:2.4.59

WORKDIR /usr/local/apache2/htdocs/

COPY build/ .
COPY conf/.htaccess .
COPY conf/httpd.conf /usr/local/apache2/conf/httpd.conf