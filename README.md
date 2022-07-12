# Academy CI/CD workshop

![68747470733a2f2f692e7974696d672e636f6d2f76692f365f7a464c7357377a32452f6d617872657364656661756c742e6a7067](https://user-images.githubusercontent.com/22532516/178478575-3952f817-1c59-4c61-8865-c2c7a8f6bceb.jpeg)

Prerequisites:
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Open a [Heroku account](https://signup.heroku.com/)
3. Install [Heroku's CLI](https://devcenter.heroku.com/articles/heroku-cli)

For your GitHub workflows to work with Heroku, they will need to authenticate against their API. To generate a token, run `heroku login` and then `heroku auth:token`.

We suggest following security best practices and storing this token as an [encrypted secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) and not hardcoding it in the workflow YAML definitions. The same article includes instructions on how to [access secrets from within workflows](https://docs.github.com/en/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).

You might want to combine this functionality with the fact that Heroku's CLI first looks for an [environment variable called HEROKU_API_KEY](https://devcenter.heroku.com/articles/authentication#api-token-storage).

Slides 45-55 in our presentation should prove to be helpful for this task.
