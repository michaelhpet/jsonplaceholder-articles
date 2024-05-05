# PubArticles

A simple web app for interacting with the free and public [PubArticles](https://github.com/michaelhpet/pubarticles-api) API `articles` resource.

Users may only create a post, with `POST /articles`, and see a list of existing posts, with `GET /articles`.

## Steps to start application

> This app has already been deployed at [pubarticles.michaelhpet.com](https://pubarticles.michaelhpet.com). Please follow the steps below if you wish to start and use the app locally.

#### Clone this repository

```
git clone git@github.com:michaelhpet/pubarticles.git
cd pubarticles
```

#### Install dependencies

```
yarn
```

#### Create `.env` file (reference `.env.example`)

```
cp .env.example .env
```

> The API is public. Therefore, the base url is already included in `.env.example`.

#### Start the server

```
yarn dev
```

## Authors

- [Michael Peter](https://github.com/michaelhpet)
