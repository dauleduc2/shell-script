# Linux

## Open port

```json
 netstat -lntu
```

## Firewall

```json
ufw status
```

```json
ufw disable
```

```json
ufw enable
```

# aaPanel

## Installation

```json
apt-get update &&
apt-get upgrade &&
apt-get install docker-compose &&
apt-get install dos2unix &&
ufw disable &&
cd &&
mkdir app &&
cd app &&
mkdir data &&
cd data &&
mkdir nginx &&
cd nginx &&
touch nginx.conf &&
apt-get install vim &&
wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && sudo bash install.sh &&
bt 14
```

## Panel Control Option, Reset username + Reset password of panel

```json
 bt
```

# Docker

## Installation

```json
apt-get update && apt-get install docker-compose
```

## Restart

```json
 sudo systemctl start docker
```

## Log Container

```json
docker logs <container>
```

## Copy File From Container To Local Machine

```json
docker cp <dockerId>:/app/insideDocker ./localMachine
```

## Running CMD into Container

```json
docker exec -it <container name> /bin/bash
```

```json
docker exec -it <container name> <command>
```

## Create network

```json
docker network create <container name>
```

## Pull and Up

```json
docker-compose pull &&  docker-compose up -d
```

# Mysql

## Backup database

```json
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql
```

## Restore database

```json
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE
```

## Create User For A Database

```json
create LOGIN wallet WITH PASSWORD='123456789', CHECK_POLICY = OFF;

USE master;
GO
DENY VIEW ANY DATABASE TO [wallet];



USE master;
GO
ALTER AUTHORIZATION ON DATABASE::StudentWallet5 TO [wallet];
GO
```

# Dos2unix

## Installation

```json
apt-get update && apt-get install dos2unix
```

## Allow to run sh script

```json
chmod +x letsencrypt.sh
```

## Convert dos to unix and vise versa

```json
dos2unix letsencrypt.sh
```

```json
unix2dos letsencrypt.sh
```

### Run letsencrypt.sh

```json
./letsencrypt.sh
```
