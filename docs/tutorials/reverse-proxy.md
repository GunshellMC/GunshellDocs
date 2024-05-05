---
title: Nginx Reverse Proxy with Cloudflare SSL
---

# Reverse Proxy

::: warning Note
This tutorial was written and tested for Ubuntu 18.04 and above. Other operating systems may work if you use the correct package manager. This has not been tested by me.
:::

## Before we start

Make sure your system is up to date to avoid problems! You can update your package manager (APT) with `apt-get update` and update your packages with `apt update`.

If you are not a root user, please type `sudo` before every command.

## Get SSL Certificate

### Installing packages

To request the SSL certificate from CloudFlare, we utilize the acme.sh script, which is installed through the GitHub repository using the cURL package.

With the following command, you'll install the cURL package, fetch the acme.sh script from GitHub, and install the script on your server. Afterward, you'll update bash to ensure the script functions correctly.

```bash
apt install curl && curl https://get.acme.sh | sh -s email=<EMAIL> && source ~/.bashrc
```

Replace `<EMAIL>` with the email address you used to create your Cloudflare account.

### Authentication

Before requesting our SSL certificate from Cloudflare, we need to authenticate with Cloudflare. To do this, we must set our CloudFlare email and API Key as server environment variables so that the acme.sh script can access and use them.

To simplify this process, you can obtain the Cloudflare Global API Key on the following [page](https://dash.cloudflare.com/profile/api-tokens). Then, you can use the following commands to set your Cloudflare Email and API Key in the environment variables:

```bash
export CF_Key="<API_KEY>"
export CF_Email="<EMAIL>"
```

Replace `<API_KEY>` with the API Key you generated in the previous step and `<EMAIL>` with the email address you used to create your Cloudflare account.

### Request SSL

Before requesting the SSL certificate from Cloudflare, we need to create a directory where we will store the SSL certificate files. In this tutorial, we will use `/etc/ssl/example.com` as the directory.

Create a directory with the following command:

```bash
mkdir /etc/ssl/<DOMAIN>
```

::: tip Note
Make sure to replace `<DOMAIN>` with your domain in the above and all following commands.
:::

Now we can request the SSL Certificate from Cloudflare using the acme.sh script.

```bash
acme.sh --issue --dns dns_cf -d "<DOMAIN>" \
--key-file /etc/ssl/<DOMAIN>/privkey.pem \
--fullchain-file /etc/ssl/<DOMAIN>/fullchain.pem
```

## Nginx Configuration

Now comes the somewhat simpler part of the tutorial.

We are going to create the Nginx configuration for the reverse proxy. First, we need to create an Nginx configuration file in the `sites-available` folder and create a symbolic link to it in the `sites-enabled` folder. You can create a symlink with the next command:

```bash
sudo ln -s /etc/nginx/sites-available/reverse.conf /etc/nginx/sites-enabled/reverse.conf
```

We assume your nginx configuration file is called `reverse.conf`.

To force the SSL certificate, we create an automatic HTTPS forwarder. You can easily achieve this by adding the following code to your Nginx configuration:

```nginx
server {
    listen 80;
    server_name <DOMAIN>;

    return 301 https://$server_name$request_uri;
}
```

Next, we set up a server listener on port 443 (HTTPS port) and redirect it with the SSL certificate to our application using the following code:

```nginx
server {
    listen 443 ssl http2;
    server_name <DOMAIN>;

    ssl_certificate /etc/ssl/<DOMAIN>/fullchain.pem;
    ssl_certificate_key /etc/ssl/<DOMAIN>/privkey.pem;

    location / {
        proxy_pass http://<IP>:<PORT>/;
    }
}
```

When you combine all of this, your Nginx configuration will look like this:

```nginx
server {
    listen 80;
    server_name <DOMAIN>;

    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name <DOMAIN>;

    ssl_certificate /etc/ssl/<DOMAIN>/fullchain.pem;
    ssl_certificate_key /etc/ssl/<DOMAIN>/privkey.pem;

    location / {
        proxy_pass http://<IP>:<PORT>/;
    }
}
```

Remember to replace `<DOMAIN>`, `<IP>`, and `<PORT>` with your actual domain, IP address, and port of your application.

And now, your Reverse Proxy is set up! To start using it, you can restart or reload Nginx with the following command:

```bash
service nginx restart
```

Your Nginx Reverse Proxy should work now!
