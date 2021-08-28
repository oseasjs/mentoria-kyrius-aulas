# Mentoria Kyrius | Kyrius Mentoring

This project was bootstrapped with:
- [Node v16](https://nodejs.org);
- [React](https://reactjs.org)
- [Black Dashboard React](https://github.com/creativetimofficial/black-dashboard-react);
- [React Icons](https://react-icons.github.io/react-icons/);
- [Github Pages](https://pages.github.com/);

## Scripts

Installing:

`npm install --global yarn`

In the project directory, you can run:

`yarn install`
`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn deploy`

Deploy the content of build folder to github branch: gh-pages.
It will allow github pages to show the content of this branch: https://oseasjs.github.io/mentoria-kyrius-aulas/


### Project Structure

- _src/routes.js_
  Contains all page routes. For each route, there is a related json with dynamic content that should be rendered by BasePageView.js. 
  <br/>

- _src/view/BasePageView.js_
  Base class that contains all logic to render html content related to each route. The main content is the same, just some images, links and text content should come from json files. Axios is been uses to call the json files as an API (GET).
  <br/>

- _src/view/CommonPageView.js_
  Class used on router.js that extends the BasePageView class. All the render logic is implemented on BasePageView.js
  <br/>

- _public/jsons_
  Json Files related to each route with dynamic content that should be rendered by BasePageView.js
  <br/>

### The Kirius Project

This full project content is fully described in **portuguese** on Medium: 
https://medium.com/@oseasjs/mentoria-desenvolvedor-java-parte-1-9f2b58e51aaa
