# Personal Web Site SPA 

This is the First Version of a Login System.

# Objectives/Next Steps
- I'm reading about how to implement JWT for login persistence.
- I'll add validations to the forms, to avoid code Injection.
- Prepare the Deploy with Docker to run on a Cloud Server.

# Important: This isn't a secure App!!!

The Username and password is sent as a Plain text from the client to the API, so be carefull.

# Client
This is an Angular project with all the files (including the node_modules folder),
view his own readme file.

# Server
It's an Node.js + Express + mongoose API for receiving the login information from the client and looks for a Matching Username and Password on a MongoDB database.

It's a simple CRUD (whithout Delete option).
