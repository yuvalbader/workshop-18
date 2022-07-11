# Academy CI/CD workshop

For your GitHub workflows to work with Heroku, they will need to authenticate against their API. The API token can be found in your [Heroku account page](https://dashboard.heroku.com/account):

![Screen Shot 2022-07-11 at 21 30 44](https://user-images.githubusercontent.com/22532516/178333451-18451121-c7ba-4cfb-8808-a6645be47e52.png)

We suggest following security best practices and storing this token as an [encrypted secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) and not wihin the GitHub Action definition itself. The same article includes [instructions on how to access it from within workflows](https://docs.github.com/en/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).
