const axios = require('axios');

const refresh = (refreshToken) => {
  let params =
    `client_id=72049321950-t0dcl714jtn83ste38331gk9mh7e9kja.apps.googleusercontent.com&client_secret=nfhS-I1U0UuG_mFjlkuRXlYR&refresh_token=${refreshToken}&grant_type=refresh_token`;

  let headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  let body = {};

  return axios
    .post((`https://oauth2.googleapis.com/token?${params}`, body, headers))
    .then((response) => {
      return response;
    });
};

module.exports = refresh;


// return value:
// {
//   "access_token": "ya29.a0AfH6SMCXt1MMbtOJoOBtbKQ4oZ36mlIzhABa4PEfHpUUPMQv38WEs4W_owksrQ28PDRljroyKDkZirsPu_baxz3E5iSAwDYOrwW524ADoVLruenOXzCz8uLKSF_cVUmGyGv9Ac7Brpz8A7Fo4ORA63zcSUf8",
//   "expires_in": 3599,
//   "scope": "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar.events openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.settings.readonly",
//   "token_type": "Bearer",
//   "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUxYWMzOWI2Y2NlZGEzM2NjOGNhNDNlOWNiYzE0ZjY2ZmFiODVhNGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3MjA0OTMyMTk1MC10MGRjbDcxNGp0bjgzc3RlMzgzMzFnazltaDdlOWtqYS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjcyMDQ5MzIxOTUwLXQwZGNsNzE0anRuODNzdGUzODMzMWdrOW1oN2U5a2phLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEyOTc2MTc2NzY5MDY0MzkyMjc4IiwiZW1haWwiOiJzdGV2ZS5nYWNrc3RldHRlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ii1lX1E0Z3BwN0NsZXp0SHYya09kTlEiLCJpYXQiOjE2MTc5MTIyMzYsImV4cCI6MTYxNzkxNTgzNn0.ZDc6E3iM6f5CE7qTZ-5rjiEupXv306O-zs4YloK0uh-wJ6KEfkCaEBrW_6qMlIkiQSj0KQS92svRqe-f51USRYGnpveimS1bz2qr7xQhzNqwbyXn9UjOol5ohvTDLVxdrV9XdHWFOrTgRMls2o_MukG7JjqV1YHCTlBmdCXYzyJBZMK5IGdbySSmdt4qmZwxju-yXsqsj4GOeJZwTDZOJ74jtMRKwWEVXR3SXwvlOUJOYfKQABlndMuzV9AddZayO5MGrbEUgY-Qpo3wNUKyG8nU7ATZn111lpfYHDh6Bbj4fEyOIh_XDTUzj_4fyI_nRACQ7qmGsfsMkXEjsYVQAw"
// }