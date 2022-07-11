# Academy CI/CD workshop

For your GitHub workflows to work with Heroku, they will need to authenticate against their API. The API token can be found in your [Heroku account page](https://dashboard.heroku.com/account).

We suggest following security best practices and storing this token as an [encrypted secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) and not within the GitHub Action definition itself. The same article includes [instructions on how to access it from within workflows](https://docs.github.com/en/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).

You might want to combine this functionality with the fact that Heroku's CLI first looks for an [environment variable called HEROKU_API_KEY](https://devcenter.heroku.com/articles/authentication#api-token-storage), just saying.
