# Projeto Final Arquitetura Web
Este projeto tem como objetivo desenvolver uma plataforma de streaming baseada na stack MERN (MongoDB, Express, React e Node.js), incorporando um sistema de recomendação para aprimorar a experiência do usuário.


#### Como executar

```
> cd client
> npm install
> npm start
> cd server 
> npm install
> node index
```


**Configuração para o arquivo .env para o Front e o Back** 
* Note 
    
    Criar *.env*  na pasta do client e do server

*  Conteúdo do .env para o client

    REACT_APP_API_KEY = Enter your tmdb api key

* Conteúdo do .env para o server

    MONGO_ATLAS_PW = dbpassword

    DB_URL = db url from mongodb atlas

    FEEDBACK_GMAIL = email id

    CLIENT_ID = client id

    CLIENT_SECRET = client secret

    REDIRECT_URI = https://developers.google.com/oauthplayground

    REFRESH_TOKEN = refresh token


**Reference** : 

* Código fonte 
    https://github.com/bhagat-hrishi/amazon-prime-clone.git

* Consumo do TMDB API para informações dos filmes e séries
    https://developers.themoviedb.org/3

