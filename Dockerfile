FROM python:3.8

# install aws-cli
RUN apt-get -y update
RUN pip install --upgrade pip
RUN pip install awscli 