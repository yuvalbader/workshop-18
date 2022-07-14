# Academy CI/CD workshop

![68747470733a2f2f692e7974696d672e636f6d2f76692f365f7a464c7357377a32452f6d617872657364656661756c742e6a7067](https://user-images.githubusercontent.com/22532516/178478575-3952f817-1c59-4c61-8865-c2c7a8f6bceb.jpeg)

## Goal
Create a CI/CD pipeline to automate testing and bringing our cube app to production, because this thing just has to be shared with the whole world:

![Screen Shot 2022-07-11 at 23 32 28](https://user-images.githubusercontent.com/22532516/178943091-159656dc-360b-4ffe-ad02-739b9acb2a0d.png)

## Prerequisites
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Open a [Heroku account](https://signup.heroku.com/)
3. Install [Heroku's CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Tasks
This repository contains:
1. A basic Express application
2. A prepared Dockerfile which contains said application and its dependencies
3. Basic tests that can be ran with `npm test`
4. Two YAML definitions with placeholders for the workflows we will be creating, under *.github/workflows*

The two workflows you need to create are:
1. When a pull request is opened, run tests – *pr-workflow.yaml*
2. When pushing to master, repeat the pull request steps + deploy to Heroku – *on-merge-workflow.yaml*

### Bonus tasks
3. We want to protect our master branch from code that fails tests. Make the pr-workflow required!
4. Create an additional app in Heroku, "cube-staging", and deploy to it only if the PR title includes a `[stage]` prefix

## Helpful details

### Creating an app in Heroku
![Screen Shot 2022-07-11 at 23 13 09](https://user-images.githubusercontent.com/22532516/178976263-c348d5ba-9b44-4839-9777-5901ef6d7fa0.png)

### Heroku authentication
For your GitHub workflows to work with Heroku, they will need to authenticate against Heroku's API. To generate a token, run `heroku login` and then `heroku auth:token`.

We suggest following security best practices and storing this token as an [encrypted secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) and not hardcoding it in the workflow YAML definitions. The same article includes instructions on how to [access secrets from within workflows](https://docs.github.com/en/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).

You might want to combine this functionality with the fact that Heroku's CLI first looks for an [environment variable called HEROKU_API_KEY](https://devcenter.heroku.com/articles/authentication#api-token-storage).

### Deploying to Heroku
A quick Google search will reveal that there are multiple ways to deploy a Dockerfile to Heroku. One straigthforward solution is to simply use the commands provided inside the *Container Registry* section, under the application's *Deploy* tab:
![Screen Shot 2022-07-11 at 23 40 09](https://user-images.githubusercontent.com/22532516/178976480-efa2d9e8-0249-4ea1-afe9-bb86aa38edc1.png)

### Accessing the app
![Screen Shot 2022-07-11 at 23 41 49](https://user-images.githubusercontent.com/22532516/178976864-95d7ce52-6f24-47b2-9085-6a227e97ba0a.png)
