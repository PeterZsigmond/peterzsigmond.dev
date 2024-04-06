# peterzsigmond.dev

This is my personal portfolio website. I made it in React, and also used other tools like Sass and Docker.<br><br>
Live version: https://peterzsigmond.dev

## Run
#### With Docker:
```bash
docker run --name peterzsigmond.dev -d -p 80:80 peterzsigmond/peterzsigmond.dev
```
Docker Hub: https://hub.docker.com/r/peterzsigmond/peterzsigmond.dev

#### Or locally:
```bash
npm install
npm start
```

## Build
```bash
npm update
npm run build
docker build -t peterzsigmond/peterzsigmond.dev:<x.x.x> -t peterzsigmond/peterzsigmond.dev:latest .
```
