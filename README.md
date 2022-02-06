This repo was made from [Geocine's Template](https://github.com/geocine/phaser3-rollup-typescript) it is worth a star! If you don't want the added automated push to github pages, I highly recommend you just use their repo instead.

[Geocine's Template](https://github.com/geocine/phaser3-rollup-typescript) provided a [Phaser 3](https://github.com/photonstorm/phaser) starter with [TypeScript](https://www.typescriptlang.org/), [Rollup](https://rollupjs.org) with ⚡️ lightning fast HMR through [Vite](https://vitejs.dev/).

I changed a few minor things and added a github workflow that will automatically deploy
the site to a gh-page on push. Follow the below steps.

### Since this is a typescript Repo, I'm going to assume you have enough knowledge to only need simplified instructions. Please check my [plain javascript repo](https://)  if you are an absolute beginner.

## Creating your own project off the template
1. Go to the [Template Repo](https://github.com/CKillen/phaser-template)
2. Click the green button "Use Template"
3. Follow instructions. <b>Repo MUST be kept public for gh-pages to work</b>
5. Clone the created repo and run in project directory
```
yarn install
```
To run the dev server
```
yarn dev
```
## Github pages
You only need to do this once
1. in the vite.config.ts change the base to filling in the correct values for the parts in <> 
```
base: "https://<github-account-name>.github.io/<repo-name>/",
```
2. Push to remote
3. Wait for github action to complete. You will see a yellow circle next to the commits on your repo's page while it's running. It will turn to a green checkmark when complete. If it turns into a red x please contact me (see bottom of Readme) and I'll help you debug it  
4. Go to repo's settings
5. On the left select Pages
6. Under source click the branch dropdown and select gh-pages
7. next to the branch dropdown, click the file dropdown and select /docs
8. Click save and wait a minute

Your site should now appear at the base url