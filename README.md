# handlebars

Fork and clone this repo
bower init

install your bower dependencies, don't forget to --save
create a .gitignore and ignore your bower components
include script tags for jQuery, handlebars, and myJavascript.js
create a handlebars script tag in index.html, make sure it has an id associated with it
within the handlebars script tag, write a basic summary of our random user (name, address, and e-mail). Syling is up to you,
all randomUser info (that you're using) needs to be in {{}}, but there's no rule against hard coding info while you're figuring out how you want it to look
HINT: use dot notation for accessing items in an array instead of bracket notation ({{results.0.name.title}})
follow the directions in the comments in myJavascript.js to fill your html with the appropriate info
power up

Include a picture of our random user
create an ajax call to get a random user from the randomUser.me api and use this info to populate the template (can you fill the handlebars template inside a .then() of a Promise?)
