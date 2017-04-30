We will be using Vue.js and Flask for this workshop. Vue is a javascript framework that we will be using for frontend and Flask is a python-written framework that we will be using for backend.

Be sure to look out for the following notations:
* :computer: run in terminal
* :rocket: this is a key step

## Clone the Repo
Fork it [here] (https://github.com/allisonchuang/altstack_workshop) and then clone the repo

## Install Vue
Now we want to install vue.js and vue resource, as well as bootstrap for frontend formatting. Vue resource allows us to make web requests.

:computer: Install vue.js, vue resource, and bootstrap from your command line:
```
npm install vue vue-resource bootstrap
```

## Install Flask
:computer: Now we want to install Flask:
```
pip install Flask
```

## Import vue.js and vue
Import vue.js and vue resource into your html. :rocket: Put these tags at the end of your html body:
```
<script src="node_modules/vue/dist/vue.js"></script>
<script src="node_modules/vue-resource/dist/vue-resource.js"></script>
```
:computer: Let’s run it to see what it looks like:
```
Python -m SimpleHTTPSERVER 9000
```
Visit http://localhost:9000/! Your site should look something like this:

IMAGE


## Create a Vue instance
:rocket: Copy and paste this into your app.js file:
```
// app.js

new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {},

  // Anything within the ready function will run when the application loads
  ready: function() {},

  // Methods we want to use in our application are registered here
  methods: {}
});
```
What do we have here?
**el** targets divs with a #events id. Now vue will be available wherever div id=#events.
**data** will be the object where the html can access vue’s data
**ready** is a function that will be called when the app loads and used to call other methods that will initialize the app’s data
**methods** is where we will hold all our functions

## Incorporate Vue into the html
Let’s connect our html to vue! In the div class “panel-body”, you will see three “form-group” classes. In each class is either an input or a textarea element.
:rocket: We are going to use **v-model** to incorporate vue like so:
```
<input class="form-control" placeholder="Event Name" v-model="event.name">
```
:rocket: Now do the same for description and date inputs by using event.description and event.date.

V-model assigns a specific spot on an event to it’s element. The value we input into these fields will be attached to ViewModel and be available for vue. 
