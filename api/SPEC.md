# API Specifications

_NOTE: This document is a work in progress, and the API specifications may change as application requirements change_

#### Contents

- [Overview](#1-overview)
- [Authentication](#2-authentication-routes-auth)
  - [GET /auth/](#21-get)
  - [GET /auth/google](#22-get)

## 1. Overview

This API is not public facing, and will only be exposed on a local network to the front-end code.
This document is intended for use by those developing the API and/or the front-end code that needs to consume the API, as such, it is more technical in nature than many would expect.

All API responses will be sent as JSON documents, with the specific structure of the document specified under a specific endpoint

Currently, the API does not require any in-built authentication or API keys to use, but this may change with future updates.

## 2. Authentication Routes: `/auth/`

Authentication of users on Blueberry Express is currently limited solely to OAuth2.0 authentication via google's services. This design choice has implications on how authentication routes are handled from the API server.

## 2.1 GET `/auth/`

A GET request to the `/auth` endpoint accepts no parameters, and will determine if a user is logged in based on the cookies sent with the request. If a user is not logged in, this route will respond with an empty JSON object. If a cookie is present and represents a valid session, this endpoint will respond with an object containing associated information about the user.

### Example Usage:

```javascript
axios.get('/auth').then((response) => {
  if (!response.body.id) {
    /*
          User is not logged in, response is simply an empty object:
          {}
        */
  } else {
    /*
          User is logged in, process the data appropriately
        */
  }
});
```

### Example Responses:

#### Valid session

```json
{
  "id": 1234,
  "type": "student",
  "name": "Cody Haines",
  "photo": "http://link.to/google/profile/image.png",
  "hasUnreadMessages": false,
  "hasUnreadNotifications": false
}
```

#### No cookie, or invalid session

```json
{}
```

## 2.2 DELETE /auth/

A DELETE request to the `/auth/` endpoint accepts no parameters. It will remove any session associated with the logged in user. This endpoint will not send a response body, instead it will use the response code
to indicate success or failure.

### Example Usage:

```javascript
axios
  .delete('/auth/')
  .then((response) => {
    if (response.status === 204) {
      /*
        The session has been appropriately destroyed.
        Any future requests without first generating a new session will be rejected
        as unauthorized.
      */
    }
  })
  .catch((error) => {
    if (error.response.status === 404) {
      /*
        No valid session could be found with the associated cookie
      */
    } else {
      /*
        Actual server error, OH NOES
      */
    }
  });
```

## 2.3 GET /auth/google

**IMPORTANT: This endpoint should not be used programmatically. This endpoint simply serves as a redirect to google's OAuth2.0 service, and as such the response object cannot be guaranteed**

```

```
