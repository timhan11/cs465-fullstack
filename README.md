-My project first began with a static Express HTML application, which I then changed to a SPA. One of the biggest differences between the Express HTML application and the Angular SPA is the way the pages load. SPAs will have a longer first load, as they are downloading all the different page information. However, once this initial load is done, the time it takes to load different pages is very fast. In comparison, the Express HTML application takes much longer to load different pages, as it does not download all their information initially. Another considerable difference between the static Express HTML page and the dynamic Angular SPA was how the files were stored. Instead of having the frontend and backend in the same folders, we separated our front-end into an entirely new folder, which we called app_admin. This allowed us to clearly separate our front-end from the rest of our application.

-The backend used a NoSQL MongoDB database, mainly because of its speed and flexible data models. This allowed us to bring in mongoose, which we used to define our schemas, enhancing readability and performance.

-One of them biggest differences between JavaScript and JSON is that JSON is not a programming language, but a syntax that allows us to send and receive data. We use JSON to send data to different parts of our application so that backend functionalities will work properly. 

-One example of refactoring code would be the use of handlebars. Instead of having large pages of HTML, I used handlebars to increase code readability.

-Methods, endpoints, and security play a vital role in a full-stack application. We use various methods, such as logging in a user, to ensure our app is secure. Endpoints, which are where our API is and where it sends requests, are one of the most important security features in our application. Our methods interact with our endpoint in order to validate data that is then reflected on the front end. We used a model, view, controller approach in travlr to ensure all users are properly authenticated.

-This course has helped me in reaching my professional goals by teaching me the process of developing an application. One of the most important things I learned in this course was the model, view, controller architecture that we used in this project. By understanding this architecture, I can now build powerful, responsive, and secure applications.
