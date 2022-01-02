# react-component-template
template for developing react components

# publish
`$REPO/.npmrc` file

```plain
registry=https://registry.npmjs.org/
@ZitySpace:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=$GITHUB_PERSONAL_AUTH_TOKEN
```
`@ZitySpace` scope refers to the prefix of package name in `package.json`. `npm publish` or `yarn publish` will publish to github repo.


# reference
- [How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
- [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://blog.harveydelaney.com/creating-your-own-react-component-library/)
- [Build a component library with React and TypeScript](https://blog.logrocket.com/build-component-library-react-typescript/)
