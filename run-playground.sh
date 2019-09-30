#!/bin/sh

docker build -f Playground.Dockerfile -t ionic4angulartemplate .
docker run --rm -it -p 4200:4200 -p 8100:8100 -p 9876:9876 -p 35729:35729 -p 53703:53703 -v $(pwd)/workspace:/workspace ionic4angulartemplate
