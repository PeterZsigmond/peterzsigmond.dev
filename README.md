# peterzsigmond.dev

This is my personal portfolio webpage. It was made in React.<br>
The website is at: https://dev.zsigmondpeter.hu

## Run
#### With Docker:
```bash
docker run --name peterzsigmond.dev -d -p 80:80 peterzsigmond/peterzsigmond.dev
```

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
