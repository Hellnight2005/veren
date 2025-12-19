FROM node:20-alpine

RUN apk add --no-cache \
    docker-cli \
    git \
    bash \
    curl \
    jq \
    ca-certificates \
  && npm install -g pnpm nodemon ts-node

WORKDIR /src

CMD ["nodemon", "--watch", "src", "--ext", "ts", "--exec", "node --loader ts-node/esm src/job/workers/build.ts"]
