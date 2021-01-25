

# Installation

## Update the Instance

The first step after logging into your new ECS instance is to update the components on your instance using the following Yum command:

``` sudo yum update -y ```

## Install Docker

Next install docker using the following commands:

```
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
```

Note: The last command sets permissions to allow the ec2-user to run the docker service.

## Logout and Back In

The change in permssions made above requires the ec2-user to log out and back in to continue with the next steps:

```logout```

## Install Docker-compose

The following commands download version 1.6.1 , set ownership on the executable, move it to the ```/usr/local/bin``` directory, and modify its execution permissions.

```
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

## Start Jenkins

To start Jenkins use the following command from within the ```jenkins``` directory:

```docker-compose up -d```

**Note**: If the is the first time you are running Jenkins you will need to get the instance's initial administrative password from secrets. Your ```JENKINS_HOME``` directory will be ```/home/ec2-user/Jenkins``` and you can use the following command to output the password:

```sudo cat ~/Jenkins/secrets/initialAdminPassword```

Your Jenkins instance will be available on port 8080 

We need Git ,Docker Pipeline and pipeline plugins to be installed.
