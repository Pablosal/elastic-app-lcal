# Instructions

required docker - docker desktop

#### Create docker image with command

```
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "http.cors.enabled=true" -e "http.cors.allow-origin=*" docker.elastic.co/elasticsearch/elasticsearch:6.4.0
```

## run script to poblate elasticsearch

```
node submitProducts.js
```

## call url with http://localhost:9200/appname/\_search?q={query} to get info from postman or app
