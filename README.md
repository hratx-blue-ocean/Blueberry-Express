# Blueberry Express

Everyone knows speaking a language is one of the best ways to learn it. Unfortunately, finding someone to regularly speak a foreign language with can be challenging and expensive. Enter Blueberry Express. We aim to make learning a new language easy, fun, and accessible for everyone. Thanks to our team of volunteer language experts, we are able to offer a learning experience that rivals studying a language abroad from the comfort of your home.

## Learn your way

Browse our list of hundreds of language experts. Find a teacher with language expertise, ratings, and availability that fits your needs. Reach out and request a meeting time. Wait for approval and then learn from a fluent speaker. It's that easy! What if the teacher wasn't a great fit for you? No problem, you are free to schedule subsequent sessions with the same or a different teacher at any time! The choice is yours.

## Accessible to all

Because we rely on volunteer teachers, we have very low costs to operate our service. That said, we wanted to offer this service to our learners and teachers at absolutely no cost to reduce the barrier to entry as much as possible. Don't have a computer at home? Exchange contact information with your tutor from a library and schedule future meetings without having to log in to a browser, or, better yet, use your mobile browser to log in to Blueberry Express and schedule sessions from anywhere.

## In Action

[Live demo](http://BlueberryExpress.net)


![](https://gfycat.com/icynaughtyasp) &nbsp; &nbsp;
![](https://thumbs.gfycat.com/InsistentOptimisticGoshawk-size_restricted.gif) &nbsp; &nbsp;
![](https://thumbs.gfycat.com/FrighteningLameFrogmouth-size_restricted.gif) &nbsp; &nbsp;

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
- As a user, I want to be able to turn on email/text notifications of upcoming appointments 24/12/1 hour before the appointment.

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
Although we lifted some components from the Grommet library, the majority of the styling is custom in order to match the [wireframes](https://www.figma.com/file/JnKGDEIyFEjL456ZDV97XL/chickpeach?node-id=5643%3A3615) we designed. We were also fans of Grommet's built in accessibility features. We used React Router to manage routes, and managed state with Redux. Persistence is maintained at the browser level, but we will be moving it to the account level at a later date.

## Back-End
Users, preferences, favorites and recipes had to be tracked in our database. Additionally, because of how the Spoonacular API is structured, recipes were broken down into general info, nutrition, ingredients and steps. We chose to implement a relational database to both handle complex queries and reduce the amount of duplicated data. MySQL was a great option for this, and the the MySQL npm packages helped us easily design queries. The server was built on express.

## Deployment
We managed deployment through partitions (usually front-end and back-end) of Docker images. We then deployed on AWS EC2 using PM2 to keep our server running and routed traffic with the help of NGINX.

## APIs
We used the Firebase Auth API for authentication. For recipes, we found Spoonacular's API to be the most comprehensive.

# Work Flow

This project was managed using the git workflow:

![](https://thumbs.gfycat.com/ImaginativeWelltodoCreature-size_restricted.gif)

We have one development branch that branches out specific features. When they are ready to be deployed, features are deployed as follows:

1. The branch is rebased to consolidate commit history and ensure only working code is pushed to the dev branch.
2. The branch is pushed.
3. A pull request is made.
4. Another member of the team is to perform a review before merging the branch into developer.
5. At the end of a sprint, the developer branch is merged into production.

In addition to git, we also used [Trello](https://trello.com/b/FbPFygN4/chickpeach) to manage pending tasks, bugs and feedback.

# Coming Soon

This repo contains our first release. Here are the features we are currently working on:

- User generated recipes
- Calendar view for cook planning
- Tie state persistence to account, not browser
- Login with Google

# Get started

Take the following steps to run the app in your localhost, you will need to have the following:
- MySQL should be running on your machine
- You will need to register for a [Spoonacular API key](https://spoonacular.com/food-api/)

From your MySQL shell:
```
source [PATH TO ROOT/db/schema.sql]
```

From terminal in the index folder:
```
npm install
npm run compile
npm start
```

# Challenges & Learnings
This is a project created by a group of friends all trying to fill a gap that we saw in many popular meal-planing apps. This app was also an opportunity for us to learn, as at the time of this writing we are a team of passionate new developers. Here are some of the learnings we've had so far:

## Challenges
- We all approached the project with a new technology to implement and tried to do so in it's early stages. We've learned lessons on how to assess an entire tech stack before beginning to implement it.
- On the front-end, we planned to build and then add state management later. Eventually we had to refactor all of our React components to be stateless in order to work with hooks and Redux. A more productive strategy would have been to start with Redux and hooks and build from that convention instead of refactoring.
- On the back-end, we tried to use GraphQL but quickly realized it didn't make sense for us at the current scale. In this, we learned to apply the technology to the use case and not simply add complexity for the sake of learning new technology or to greatly scale down the line.

## Learnings
- The importance of planning is reinforced daily in our workflow. Between detailed wireframes on Figma and a detailed Trello board, we were able to stay relatively organized.
- Pair programming was a big part of building Chickpeach. Although it did slow us down a bit, the code pushed from pairs was visibly more accurate and concise.
- Good communication between stakeholders, the team, and user testing was a boon for development. As developers, we were able to articulate the direction of where the app was going and properly manage stakeholder expectations against user feedback and developer input.

## Potential Improvements
- We may benefit from dividing sprints into specific features instead of splitting our team into traditional (front-end/back-end) roles. As we're all full-stack developers, an iterative approach may have allowed us to develop more consistently. In our experience so far, with one team working on front-end and the other on back-end, we found ourselves waiting on eachother as well as in situations where we lost familiarity with the other side of the code base and had to spend more time catching up.
- In the future, we will be extending our UI mockup to also include data flow between apps.

# Contributors

[John Connolly](https://github.com/jkcryptolock), [Arohan Dutt](https://github.com/ArohanD), [Gibran Iqbal](https://github.com/Jibbscript), [Julia Kim](https://github.com/jxkim), [Whitney Lee](https://github.com/wiggitywhitney), [Sean McCarthy](https://github.com/SeanMcCarthy3223), [Jeff Salinas](https://github.com/JeffSalinas)