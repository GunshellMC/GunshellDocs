# NGINX Reverse Proxy

::: tip
Deze tutorial is gemaakt door [Tiebienotjuh07](https://github.com/Tiebienotjuh)
:::

## Nginx Reverse Proxy - Ubuntu **(LetsEncrypt)**

Aangeraden om je package manager eerst te updaten
``sudo apt-get update && sudo apt update``

Stap **1**)
> Installeer nginx & certbot met de volgende commando's:
> ``sudo apt install nginx && sudo apt install -y certbot``

Stap **2**)
> Zorg dat het domein (in dit voorbeeld `test.tiebienotjuh.be`) naar het ip van de vps wijst (A Record)

Stap **3**)
> Maak een SSL Certificaat via LetsEncrypt/Certbot met volgende commando
> ``sudo certbot certonly -d test.tiebienotjuh.be``
> test.tiebienotjuh.be vervangen door jouw domein

Stap **4**)
> Maak een nginx config bestand door onderstaand commando uit te voeren:
> ``sudo nano /etc/nginx/sites-available/reverse.conf``
> plaats onderstaande text in het config bestand.

```server {
    listen 80;
    server_name <DOMAIN>;

    return 301 https://$server_name$request_uri;
}
server {
    listen 443 ssl http2;
    server_name <DOMAIN>;

    ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;

    location / {
        proxy_pass http://<IP>:<PORT>/;
    }
}
```

> Vervang `<DOMAIN>` door uw domein.
> Vervang `<IP>` door het ip adres van uw vps.
> Vervang `<PORT>` door de poort waar het proces op draait.

Stap **5**)
> Maak een systemlink tussen de config bestanden met onderstaande commando:
> `sudo ln -s /etc/nginx/sites-available/reverse.conf /etc/nginx/sites-enabled/reverse.conf`

Stap **6**)
> Restart nginx en normaal gezien is je site nu bereikbaar via het ingestelde domeinnaam!
> `sudo service nginx restart`

## Nginx Reverse Proxy - Ubuntu **(Cloudflare)**

**!** Jouw domein moet blijf cloudflare staan en je SSL Settings op 'full' of 'full (strict)'.

Aangeraden om je package manager eerst te updaten
``sudo apt-get update && sudo apt update``

Stap **1**)
> Installeer nginx & acme.sh met de volgende commando's:
> ``sudo apt install nginx && curl  https://get.acme.sh | sh -s email=JOUWCLOUDFLAREEMAIL && source ~/.bashrc``
> Vervang `JOUWCLOUDFLAREEMAIL` door uw email van cloudflare (waar het domein op staat)

Stap **2**)
> Zorg dat het domein (in dit voorbeeld `test.tiebienotjuh.be`) naar het ip van de vps wijst (A Record) (**PROXIED**)

Stap **3**)
> Haal uw persoonlijke cloudflare `Global API Key` op via volgende link:
> https://dash.cloudflare.com/profile/api-tokens

Stap **4**)
> Stel uw gegeven in bij acme.sh met onderstaande commando's: 
> ``export CF_Key="GLOBALAPIKEY``
> ``export CF_Email="JOUWCLOUDFLAREEMAIL"``
> Vervang `GLOBALAPIKEY` door de key die u bij stap 3 hebt opgehaald.
> Vervang `JOUWCLOUDFLAREEMAIL` door het email die bij stap 1 hebt meegegeven bij de installatie van acme.sh

Stap **5**)
> Maak een nginx config bestand door onderstaand commando uit te voeren:
> ``sudo nano /etc/nginx/sites-available/reverse.conf``
> plaats onderstaande text in het config bestand.

```server {
    listen 80;
    server_name <DOMAIN>;

    return 301 https://$server_name$request_uri;
}
server {
    listen 443 ssl http2;
    server_name <DOMAIN>;

    ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;

    location / {
        proxy_pass http://<IP>:<PORT>/;
    }
}
```
Vervang `<DOMAIN>` door uw domein.
Vervang `<IP>` door het ip adres van uw vps.
Vervang `<PORT>` door de poort waar het proces op draait.

Stap **6**)
Maak het SSL Certificaat met onderstaand commando:
```
acme.sh --issue --dns dns_cf -d "<DOMAIN>" \
--key-file /etc/letsencrypt/live/<DOMAIN>/privkey.pem \
--fullchain-file /etc/letsencrypt/live/<DOMAIN>/fullchain.pem
```
Vervang `<DOMAIN>` door uw domein.

Stap **7**)
Maak een systemlink tussen de config bestanden met onderstaande commando:
`sudo ln -s /etc/nginx/sites-available/reverse.conf /etc/nginx/sites-enabled/reverse.conf`

Stap **8**)
Restart nginx en normaal gezien is je site nu bereikbaar via het ingestelde domeinnaam!
`sudo service nginx restart`
