# Macquarie Handbook Project

This project is a front-end for the data supplied by the Macquarie Curriculum Management
System. 

Provides a server that can proxy the main API.  This allows us to use the access credentials on
the server and proxy the requests to an open API.  Use cachios to cache requests to the main API. 

Provides a simple React application that displays a list of courses and some details from 
individual courses. 


## Development Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run server` 

Runs the proxy server to forward requests to the main API.  

* /gateway/list/courses/2020 -> https://api.uat.mq.edu.au/ws/rest/cms/listcourses/2020
* /gateway/list/units/2020 -> https://api.uat.mq.edu.au/ws/rest/cms/listunits/2020
* /gateway/get/course/12356 -> https://api.uat.mq.edu.au/ws/rest/cms/cms_course/12356
* /gateway/get/unit/12356 -> https://api.uat.mq.edu.au/ws/rest/cms/cms_unit/12356
* etc

Where 12356 is the cl_id property of the target object



### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

