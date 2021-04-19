FROM centos

MAINTAINER abhiram <abhiramcareer18@gmail.com>

RUN yum install httpd git -y

RUN git clone https://github.com/abhiramIT/html.git /var/www/html

CMD ["httpd","-DFOREGROUND"]
