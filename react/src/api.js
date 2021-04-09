const axios = require('axios').default;

const jwt = localStorage.getItem('jwt');

axios.defaults.headers.common['Authorization'] = jwt;
axios.defaults.baseURL = process.env.API_URL;

// Returns the current user object, if the user is logged in
export function getUser(type) {
  return axios.get('/users')
    .then(res => res.data);
}


// Sets user as either a teacher or a student, this process can not be undone
export function initializeUser(type) {
  const options = {
    method: 'put',
    url: '/users/type',
    data: {type: type}
  };

  return axios(options)
    .catch( err => {
      console.error(err);
    });
}

// Sets a language as a preferred language in the DB
export function addUserLanguage(languageId) {
  const options = {
    method: 'post',
    url: `/users/languages/${languageId}`,
  };

  return axios(options)
    .catch(err => {
      console.error(err);
    });
}

// Deletes user preferred language in the DB
export function deleteUserLanguage(languageId) {
  const options = {
    method: 'delete',
    url: `/users/languages/${languageId}`,
  };

  axios(options).then(res => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.error(err);
  });
}

export function fetchOtherUser(userId) {
  const options = {
    method: 'get',
    url: `/users/${userId}`,
  };

  return axios(options)
  .catch(err => {
    console.error(err);
  });
}

export function fetchBusySchedule(userId, start, end) {
  const options = {
    method: 'get',
    url: `/users/${userId}/availability`,
    params: { start, end }
  };

  return axios(options).then(res => {
    return res.json();
  })
  .catch(err => {
    console.error(err);
  });
}

export function setBusySchedule(userId, day, start, end) {
  const options = {
    method: 'post',
    url: `/users/${userId}/availability`,
    params: {
      [day]: {
        busy: [{start, end}]
      }
    }
  };

  return axios(options)
  .catch(err => {
    console.error(err);
  });
}

// Fetches appointments scheduled by the current user and the statuses of those requests
// status options are "pending", "requested", "rejected" if not specified will retrieve all
export function fetchAppointments(status = null, start, end, count, page) {
  let url;

  if (status) {
    url = `/appointments/${status}`
  } else {
    url = '/appointments'
  }

  const options = {
    method: 'get',
    url: url,
    params: { start, end, count, page }
  };

  return axios(options).then(res => {
    return res.json();
  })
  .catch(err => {
    console.error(err);
  });
}

// Returns the number of appointment requests the current user has left
export function fetchRemainingAppointments() {
  const options = {
    method: 'get',
    url: '/appointments/available',
  };

  return axios(options).then(res => {
    return res.json();
  })
  .catch(err => {
    console.error(err);
  });
}

// Sends an appointment request 'with' a given user, end can't be longer than 90mins from start
export function sendAppointmentRequest(withUser, start, end) {
  const options = {
    method: 'post',
    url: '/appointments',
    params: {withUser, start, end}
  };

  return axios(options).then(res => {
    return res.json();
  })
  .catch(err => {
    console.error(err);
  });
}

// Called with boolean to say if user approves or rejects appointment request.
export function updateAppointmentRequest(appointmentId, approve) {
  const options = {
    method: 'put',
    url: `/appointments/${appointmentId}`,
    params: {approve}
  };

  return axios(options)
  .catch(err => {
    console.error(err);
  });
}

// Deletes an appointment
export function deleteAppointment(appointmentId) {
  const options = {
    method: 'delete',
    url: `/appointments/${appointmentId}`,
  };

  return axios(options)
  .catch(err => {
    console.error(err);
  });
}

// Fetches all messages sent to the currently logged in user. Note that this does not return the message body
export function fetchAllMessages(count, page) {
  const options = {
    method: 'get',
    url: `/messages`,
    params: { count, page }
  };

  return axios(options).then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  });
}

// Fetches only unread messages sent to the currently logged in user. Note that this does not return the message body
export function fetchUnreadMessages(count, page) {
  const options = {
    method: 'get',
    url: `/messages/unread`,
    params: { count, page }
  };

  return axios(options).then(res => {
    return res.json();
  })
  .catch(err => {
    console.error(err);
  });
}

// Returns the body of a specific message, automatically marks message as read
export function fetchMessage(messageId) {
  const options = {
    method: 'get',
    url: `/messages/${messageId}`,
  };

  return axios(options).then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  });
}

// Returns list of messages the currently logged in user has sent
export function fetchSentMessages(count, page) {
  const options = {
    method: 'get',
    url: `/messages/sent`,
    params: { count, page }
  };

  return axios(options).then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  });
}

export function sendMessage(id, subject, body) {
  const options = {
    method: 'post',
    url: `/messages`,
    data: {
      toId: id,
      body: body,
      subject: subject
    }
  };

  return axios(options)
  .catch(err => {
    console.error(err);
  });
}

// Returns a list of all languages
export function fetchAllLanguages(count, page) {
  const options = {
    method: 'get',
    url: `/languages`,
    params: { count, page }
  };

  return axios(options).then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  });
}

// Returns all teachers willing to teach a given language
export function searchTeacherByLanguage( languageId, count, page) {
  const options = {
    method: 'get',
    url: `/languages/${languageId}/teachers`,
    params: { count, page }
  };

  return axios(options).then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  });
}

// Returns all students willing to learn a given language
export function searchStudentByLanguage( languageId, count, page) {
  const options = {
    method: 'get',
    url: `/languages/${languageId}/student`,
    params: { count, page }
  };

  return axios(options).then(res => {
    return res.json();
  })
  .catch(err => {
    console.error(err);
  });
}
