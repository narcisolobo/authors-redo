# Authors Assignment

To run this project, `MONGODB_URI` and `POST` environment variables must be configured.

## Server
The [server code](./server/) uses the more modern ES Module syntax so the student does not have a different import/export syntax for the back end. All it takes is one line of code in [package.json](./server/package.json).

```json
"type": "module"
```

Some students cannot run `nodemon server.js` for some reason, so Nodemon is installed as a dev dependency. A "dev" script is written in package.json to run Nodemon from its npm package. This introduces students to writing npm scripts and also allows them to have the same dev server spin up command for both the back end and Vite front end.

```json
"dev": "nodemon server.js"
```

The [author model](./server/models/author-model.js) splits the original name field into two fields - `firstName` and `lastName`. This makes it easier to visualize what the form state will look like in React.

I've attempted to clarify and simplify the code for the beginner, especially in the [server.js](./server/server.js) file. The file is also no longer housed outside of the server directory.

I use async/await for a more [modern, readable controller](./server/controllers/author-controller.js).

Finally, I make use of the router included with Express for a [DRYer, more RESTful, and cleaner routes file](./server/routes/author-routes.js).

## Client
For this project, I stayed away from Bootstrap and went with [Pico CSS](./https://picocss.com/) instead. Pico is more "invisible" than Bootstrap, and I thought the assignment called for more focus on the nuts and bolts. This is a front-end heavy course, however -- so I did not [neglect the UI entirely](./client/src/css/style.css).

All the Axios API calls have been [abstracted into a service](./client/src/services/author-service.js). This demonstrates the "separation of concerns" coding practice. These calls are imported into the components that need them.

The [AuthorList component](./client/src/components/AuthorList.jsx) makes use of a boolean, `isCurrent`, in the dependency array of `useEffect`. This boolean is flipped when an author is deleted to run the `useEffect` again. This approach no longer calls for a "remove from DOM" helper function and has the added benefit of making use of the dependency array, which I think could be given more focus.

The [form component](./client/src/components/AuthorForm.jsx) handles state as an object (both new and edit). This allows me to use a one-size-fits-all `handleChange` function. This better illustrates what exactly the `event.target` is and what it contains.

I have added an [Author Details](./client/src/components/AuthorDetails.jsx) component. A belt prep assignment should cover all basic CRUD operations. We do get the details of one author in the edit component to prepopulate the form, but a dedicated details component prepares the student more explicitly.