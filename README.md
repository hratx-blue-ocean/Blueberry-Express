# Blueberry Express

Everyone knows speaking a language is one of the best ways to learn it. Unfortunately, finding someone to regularly speak a foreign language with can be challenging and expensive. Enter Blueberry Express. We aim to make learning a new language easy, fun, and accessible for everyone. Thanks to our team of volunteer language experts, we are able to offer a learning experience that rivals studying a language abroad from the comfort of your home.

## Learn your way

Browse our list of hundreds of language experts. Find a teacher with language expertise, ratings, and availability that fits your needs. Reach out and request a meeting time. Wait for approval and then learn from a fluent speaker. It's that easy! What if the teacher wasn't a great fit for you? No problem, you are free to schedule subsequent sessions with the same or a different teacher at any time! The choice is yours.

## Accessible to all

Because we rely on volunteer teachers, we have very low costs to operate our service. That said, we wanted to offer this service to our learners and teachers at absolutely no cost to reduce the barrier to entry as much as possible. Don't have a computer at home? Exchange contact information with your tutor from a library and schedule future meetings without having to log in to a browser, or, better yet, use your mobile browser to log in to Blueberry Express and schedule sessions from anywhere.

## In Action

[Live demo](http://BlueberryExpress.net)

![](https://thumbs.gfycat.com/ShabbyLiquidBlackrussianterrier-size_restricted.gif)
![](https://thumbs.gfycat.com/BruisedPointedAoudad-size_restricted.gif)
![](https://thumbs.gfycat.com/BarrenWelldocumentedAmphibian-size_restricted.gif)

# User Stories
We worked with a lot of feedback at every stage of this project, here are the user stories we decided to explore:

## Implemented:
- As a user, I want a simple, clean UI.
- As a user, I want to have a familiar way to sign in that is both safe and simple.
- As a user, I want to be able to easily see my upcoming appointments in the app and in my google calendar.
- As a user, I want to be able to learn more about a prospective learner/teacher by clicking on their profile picture/name.
- As a user, I want to be able to reschedule appointments should I need to.
- As a user, I want to be able to send messages to other users and I want to be able to read the messages other users send me.
- As a user, if an appointment is cancelled, I want my calendar to be updated to reflect this.

- As a learner, I want to filter the list of available teachers by language, rating, and name.
- As a learner, I want to be able to rate the teacher I just met with so other students can see which teachers are highly rated.

- As a teacher, I want to see all pending appointments from my home page and easily be able to approve or deny them.
- As a teacher, I want be able to see the ratings and reviews I have received from students.

## Coming Soon:
- As a user, I want to be able to live chat with my learner/teacher without leaving the app.
- As a user, I want to be able to browse teachers as a guest without logging in.
- As a user, I want to be able to turn on email/text notifications of upcoming appointments.

# Stack

<table>
  <tr>
    <td>Languages</td>
    <td><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/></td>
  </tr>
  <tr>
    <td>Frameworks & Libraries</td>
    <td><img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="Tailwind Css" src="https://img.shields.io/badge/-Tailwind%20Css-%2338B2AC?&style=for-the-badge&logo=tailwind-css&logoColor=white"/> <img alt="Material Ui" src="https://img.shields.io/badge/-Material--UI-%230081CB?&style=for-the-badge&logo=material-ui&logoColor=white"/></td>
  </tr>
  <tr>
    <td>Hosting</td>
    <td><img alt="DigitalOcean" src="https://img.shields.io/badge/-DigitalOcean-%230080FF?&style=for-the-badge&logo=DigitalOcean&logoColor=white"/> <img alt="Docker" src="https://img.shields.io/badge/-Docker-blue?&style=for-the-badge&logo=docker&logoColor=white"/> </td>
  </tr>
  <tr>
    <td>Databases</td>
    <td><img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="Postgres" src ="https://img.shields.io/badge/-Postgres-%23336791?&style=for-the-badge&logo=PostgreSQL&logoColor=white"/></td>
  </tr>
  <tr>
  <td>APIs</td>
  <td><img alt="GoogleOAuth2.0" src="https://img.shields.io/badge/-GoogleOAuth2.0-white?&style=for-the-badge&logo=google&logoColor=blue"/> <img alt="Google Calendar API" src="https://img.shields.io/badge/-Google%20Calendar%20API-%234285F4?&style=for-the-badge&logo=google-calendar&logoColor=white"/> <img alt="JSON Web Tokens" src="https://img.shields.io/badge/-JSON%20Web%20Tokens-black?&style=for-the-badge&logo=json-web-tokens&logoColor=white"/></td>
  </tr>
  <tr>
    <td>Testing</td>
    <td><img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?&style=for-the-badge&logo=jest&logoColor=white"/></td>
  </tr>
</table>


## Front-End

We designed our website to have a minimalistic look which aims to be user friendly in every aspect. The sign up process was designed to reduce any confusion and made to be as efficient as possible. The goal for both student and teacher portals are quick and easy connections between both users. The message and appointment sections plus the calendar page provides the user with the upmost ease-off use. We placed elements within the app to be familiar to users of the most common social media sites. Check out our initial [wireframes](https://miro.com/welcomeonboard/QfRdsuYlUZOM6zQelCUecN0Jr131kHxx5uUIaBLi8GzPOBnhgcSVrd35cB6FAzKs) here.

## Back-End
We decided to track our user information and appointments primarily in Postgres as the data structure for user info and appointments is highly relational. We used Sequelize to create relationships between tables and to query our Postgres db. Here is a link to our [Postgres Relationships](https://cdn.discordapp.com/attachments/802245906983551058/830515517924179998/Blueberry_Express_V2_3.png). Notifications, on the other hand, take many different shapes. To accommodate this irregular data and to future-proof our application, we decided to also implement a MongoDB database. Searching for all notifications for a user is simplified by being able to query one table in our MongoDB rather than searching multiple tables in a relational database like Postgres. Our server was built on Node.js and Express.


## Deployment
We depoloyed our application to Blue Ocean via Dockerizing our api, front-end, Postgres, and MongoDB. We then registered the domain [BlueberryExpress.net](http://blueberryexpress.net).

## APIs
We used the Google OAuth2.0 API for authentication combined with Passport.js. We found Googles Authentification process to be highly secure and familiar to users. This fits our goals of being simple and intuitive. We also used Google's Calendar Api for scheduling, changing, and removing events. Since many users already use Google Calendar, adding appointment notifications will feel familiar for our users.

# Work Flow

This project was managed using the agile workflow practices and git workflow:

## [Trello Board](https://trello.com/c/pgtzKvIh/83-implement-conditional-rendering-for-ratings-button-on-user-profile)
![](https://thumbs.gfycat.com/MerrySinfulGlassfrog-size_restricted.gif) &nbsp; &nbsp;

## Git Workflow
![](https://thumbs.gfycat.com/GrippingLazyGannet-size_restricted.gif)

We have one main branch that branches out to staging. Our staging branch is where we merge our features until we have a batch of tested, functioning features in staging at which point we will merge staging to main.

# Coming Soon

This repo contains our first release. Here are the features we are currently working on:

- Live chat between teacher and learner without leaving the app.
- Guest browsing of our service.
- Email, SMS, and Push notifications.

# Get started

If you are interested in contributing to this project, follow this [guide](https://github.com/hratx-blue-ocean/Blueberry-Express/blob/main/CONTRIBUTING.md).


# Challenges & Learnings
This is a project is the child of a group of hungry software engineers all eager to create a viable product and to learn along the way. As passionate new developers, we did end up learning a lot here are some of the learnings we've had so far:

## Challenges
- Each of us selected new technologies we wanted to play around with during this project. We gained insight on assessing technologies prior to use as well as practical implementation practice with these new technologies.
- On the front-end, we planned to style the entire app using tailwind. However, we learned that tailwind is not set up to be highly customizable by default. We decided we needed to customize more features than tailwind would easily allow so we ended up using a blend of css and tailwind.
- On the back-end, interacting with Google's Calendar Api became available fairly late into the project. This led to a bit of a time crunch with lining up our db queries.

## Learnings
- The importance of planning is reinforced daily in our workflow. Between detailed wireframes on Miro and a detailed Trello board, we were able to stay well organized.
- Pair programming was a big part of building Blueberry Express. Although initially, we were concerned that pair programming might slow us down, we found that both parties learned more while making roughly the same amount of progress. Futhermore, the code produced was less likely to contain bugs which saved time in the long run.
- After our initial meeting with the stakeholder, our team predicted that we would be able to implement all features that were proposed. After several days into creating this app, we found that we had underestimated the time commitment necessary to implement several features. We all certainly learned how seemingly simple applications may have much more going on under the hood than is first apparent and will keep this in mind for future projects.

## Potential Improvements
- Implementing unit tests earlier in the production of our application would have been helpful. Using a CCID or Typescript would both have been a viable solution.
- Mapping out dependencies and structuring our gameplan to target foundational features first would have been helpful as we did run into challenges with testing features while our back end was still being set up.

# Contributors

[Cody Haines](https://github.com/chaines), [Tahsin Ahmed](https://github.com/tahsinocity), [Matt Collinsl](https://github.com/matt-collins087), [Brandon Harden](https://github.com/bmh0013), [Zach Thomas](https://github.com/zt2401), [Ekaterina Drozdova](https://github.com/Katerina-spb), [Steve Gackstetter](https://github.com/stevehackreactor)