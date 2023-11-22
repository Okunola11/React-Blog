#   React Blog App

This is a Blog project for my personal development.

It is a react single page app which runs on a local development [package.json](package.json) with url [http://localhost:3500/posts](http://localhost:3500/posts)

## Working Procedure 

In the project directory:

React routers were configured for navigation between pages. There are about three main routes which includes: 
* Home (which is the index page)
* Post (Which has other sub-routes)
* About

### CRUD Operation 
Users can Create, Read, Update and Delete posts.

### Main React Functionalities used Include:

### `useState`
This was used to apply to dynamically apply values or states to function components. 

### `useEffect`
This was used to synchronize two components (like values of post and search to display search results) or synchronize a component to an external system (It was used for the synchronization of `posts` data and the `package.json` at any given time). 

### `Custom Hooks`
This is a self-defined hook for perfoming logical repitive tasks. Like the `useAxiosFetch` used in this project. This is a custom hook which fetches the JSON data and can be re-used in other projects as I plan to.  

## My Learning from the Project

This project has helped me immensely in using React Router V6. I also have better command of `useState` and `useEffect`.

Learning about custom hooks has to be my icing of the cake for this project! I have grown to love to define and use them as I proceed in my learning journey.  

