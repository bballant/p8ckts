default:
    @just -l

bootstrap:
    npm install

build:
    npm run build
    npm run lint

# build / run CLI with the given args
run *ARGS: build
    node dist/main.js {{ ARGS }}

