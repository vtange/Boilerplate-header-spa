# ejs-header-fastlog

No Refresh version of an EJS header template with login, signup, social media and forgot email functions

This module extends your Express app with routes and templates needed to quickly add login functionality to your app.

 - requires EJS and AngularJS ~1.4
 - requires you use Passport.JS and Express Session
 
 How to use:
 
 ```
 npm install --save ejs-header-fastlog
 ```
 In your server.js or app.js:
 ```
app.use(session({ secret: 'blah' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/public'));
app.use('/users', express.static(__dirname + '/public'));

require('ejs-header-fastlog')(app,session,passport);
 ```
 In your own templates
 ```
 	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script> <!-- load angular -->
	<script src="app.js"></script>
	...
<%- include ../node_modules/ejs-header-fastlog/views/partials/header.ejs %>
 ```
  
 The .ejs partial for the header requires a 'title' property inputed from all your server routes. This autogenerates the title shown on the header. For example:
 
 ```
 		res.render('index.ejs', {
			title : app.title,
 ```
 You can define ```app.title``` in ```server.js/index.js``` or in ```package.json``` and require it.
 
 
 You can find example boilerplate code (most importantly the /public files needed for the page to function) for a project using this module at 
 https://github.com/vtange/Boilerplates/tree/master/ejs-fastlog
