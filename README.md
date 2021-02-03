![icon](public/logo192.png)  
# Application Publics APIs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
It Using [Material-kit-React](https://github.com/creativetimofficial/material-kit-react).  

## Used APIs

- List APIs from [Public API](https://github.com/public-apis/public-apis) using [API Public-API](https://github.com/davemachado/public-api)  
- Translate Texts with [Frengly](https://frengly.com/translate)  
- Get favicon from [GoogleUserContent favicons](https://s2.googleusercontent.com/s2/favicons)  
- Screenshots the APIs websites with [APIFlash Screenshot API](https://apiflash.com/)  

## Specifications

1. file `.htaccess` do url rewriting for client-side request ( refreshing or typing uris)  
   - for Apache HTTP Server only.  
   - see the Fb Official Doc [ here](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing) and [Aidin](https://stackoverflow.com/users/6868584/aidin) comment for the issue  [react-router-urls-dont-work-when-refreshing-or-writing-manually](https://qastack.fr/programming/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) on [QAStack](https://qastack.fr/) for do the same on Nginx Server or Apache Tomcat
> to put in the root folder of the app

2. file `jsconfig.json` is config for rebase absolute imports   

## Routing  
- in `package.json` the followed line specify the baseUrl for build  
```json
{
    "homepage": "https://kwabounga.fr/publics-apis-app",
}
```


- and `basename` prop in `index.js` add baseUrl to the `<Links/>` urls
```js
<Router basename="/publics-apis-app">
```





