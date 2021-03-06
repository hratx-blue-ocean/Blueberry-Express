const axios = require('axios');

const Calendar = {};

Calendar.createEvent = (accessToken, calendarId, eventParams) => {
  let event = {
    kind: 'calendar#event',
    summary: eventParams.summary,
    start: {
      dateTime: eventParams.start, // '2015-05-28T17:00:00-07:00'
      timeZone: 'US/Central', // 'America/Minneapolis'
    },
    end: {
      dateTime: eventParams.end,
      timeZone: 'US/Central',
    },
  };
  if (eventParams.recurrence) {
    event.recurrence = [eventParams.recurrence];
  }
  // calendar id should look like: optdi857if3c83476keu5hp8g0@group.calendar.google.com
  // https://www.googleapis.com/calendar/v3/calendars/optdi857if3c83476keu5hp8g0@group.calendar.google.com/events

  return axios
    .post(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, event, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      // response.data:
      // {
      //   "kind": "calendar#event",
      //   "etag": "\"3235650833128000\"",
      //   "id": "1o3qqpvjcu3mppo0mkvtg7vfl8",
      //   "status": "confirmed",
      //   "htmlLink": "https://www.google.com/calendar/event?eid=MW8zcXFwdmpjdTNtcHBvMG1rdnRnN3ZmbDggb3B0ZGk4NTdpZjNjODM0NzZrZXU1aHA4ZzBAZw",
      //   "created": "2021-04-07T19:56:56.000Z",
      //   "updated": "2021-04-07T19:56:56.564Z",
      //   "summary": "some summary",
      //   "creator": {
      //       "email": "steve.gackstetter@gmail.com"
      //   },
      //   "organizer": {
      //       "email": "optdi857if3c83476keu5hp8g0@group.calendar.google.com",
      //       "displayName": "practice calendar",
      //       "self": true
      //   },
      //   "start": {
      //       "dateTime": "2015-05-29T00:00:00Z",
      //       "timeZone": "America/Los_Angeles"
      //   },
      //   "end": {
      //       "dateTime": "2015-05-29T00:00:00Z",
      //       "timeZone": "America/Los_Angeles"
      //   },
      //   "iCalUID": "1o3qqpvjcu3mppo0mkvtg7vfl8@google.com",
      //   "sequence": 0,
      //   "reminders": {
      //       "useDefault": true
      //   },
      //   "eventType": "default"
      // }
      return response.data;
    })
    .catch((err) => {
      // if the error has the issue that it is outdated, use the refresh token to get a new token
      return err;
    });
};

Calendar.listEvents = (accessToken, calendarId, timeMin, timeMax) => {
  let start = `timeMin=${timeMin}&`;
  let end = `timeMax=${timeMax}&`;
  if (!timeMin) {
    start = '';
  }
  if (!timeMin) {
    end = '';
  }
  return axios
    .get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${start + end}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      // response.data:
      //   {
      //     "kind": "calendar#events",
      //     "etag": "\"p328f93v7urmeu0g\"",
      //     "summary": "practice calendar",
      //     "updated": "2021-04-07T20:03:32.970Z",
      //     "timeZone": "UTC",
      //     "accessRole": "owner",
      //     "defaultReminders": [],
      //     "nextSyncToken": "CJD0j-f27O8CEJD0j-f27O8CGAUgm870rgE=",
      //     "items": [
      //         {
      //             "kind": "calendar#event",
      //             "etag": "\"3235650833128000\"",
      //             "id": "1o3qqpvjcu3mppo0mkvtg7vfl8",
      //             "status": "confirmed",
      //             "htmlLink": "https://www.google.com/calendar/event?eid=MW8zcXFwdmpjdTNtcHBvMG1rdnRnN3ZmbDggb3B0ZGk4NTdpZjNjODM0NzZrZXU1aHA4ZzBAZw",
      //             "created": "2021-04-07T19:56:56.000Z",
      //             "updated": "2021-04-07T19:56:56.564Z",
      //             "summary": "some summary",
      //             "creator": {
      //                 "email": "steve.gackstetter@gmail.com"
      //             },
      //             "organizer": {
      //                 "email": "optdi857if3c83476keu5hp8g0@group.calendar.google.com",
      //                 "displayName": "practice calendar",
      //                 "self": true
      //             },
      //             "start": {
      //                 "dateTime": "2015-05-29T00:00:00Z",
      //                 "timeZone": "America/Los_Angeles"
      //             },
      //             "end": {
      //                 "dateTime": "2015-05-29T00:00:00Z",
      //                 "timeZone": "America/Los_Angeles"
      //             },
      //             "iCalUID": "1o3qqpvjcu3mppo0mkvtg7vfl8@google.com",
      //             "sequence": 0,
      //             "reminders": {
      //                 "useDefault": true
      //             },
      //             "eventType": "default"
      //         },
      //         {
      //             "kind": "calendar#event",
      //             "etag": "\"3235651625940000\"",
      //             "id": "1piltrki6vc7s0kokdfql1p6p4",
      //             "status": "confirmed",
      //             "htmlLink": "https://www.google.com/calendar/event?eid=MXBpbHRya2k2dmM3czBrb2tkZnFsMXA2cDQgb3B0ZGk4NTdpZjNjODM0NzZrZXU1aHA4ZzBAZw",
      //             "created": "2021-04-07T20:03:32.000Z",
      //             "updated": "2021-04-07T20:03:32.970Z",
      //             "summary": "some summary",
      //             "creator": {
      //                 "email": "steve.gackstetter@gmail.com"
      //             },
      //             "organizer": {
      //                 "email": "optdi857if3c83476keu5hp8g0@group.calendar.google.com",
      //                 "displayName": "practice calendar",
      //                 "self": true
      //             },
      //             "start": {
      //                 "dateTime": "2021-04-08T00:00:00Z",
      //                 "timeZone": "America/Los_Angeles"
      //             },
      //             "end": {
      //                 "dateTime": "2021-04-08T00:00:00Z",
      //                 "timeZone": "America/Los_Angeles"
      //             },
      //             "iCalUID": "1piltrki6vc7s0kokdfql1p6p4@google.com",
      //             "sequence": 0,
      //             "reminders": {
      //                 "useDefault": true
      //             },
      //             "eventType": "default"
      //         }
      //     ]
      // }
      return response.data;
    })
    .catch((err) => {
      // if the error has the issue that it is outdated, use the refresh token to get a new token
      return err;
    });
};

Calendar.createCalendar = (accessToken) => {
  return axios
    .post(
      'https://www.googleapis.com/calendar/v3/calendars',
      {
        summary: 'Blueberry Appointments',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      // response.data:
      //   {
      //     "kind": "calendar#calendar",
      //     "etag": "\"E2oTHFMnrHZ3l45lCWK4iO2AN8Q\"",
      //     "id": "optdi857if3c83476keu5hp8g0@group.calendar.google.com",
      //     "summary": "practice calendar",
      //     "timeZone": "UTC",
      //     "conferenceProperties": {
      //         "allowedConferenceSolutionTypes": [
      //             "hangoutsMeet"
      //         ]
      //     }
      // }
      return response.data;
    })
    .catch((err) => {
      // if the error has the issue that it is outdated, use the refresh token to get a new token
      return err;
    });
};

Calendar.deleteEvent = (accessToken, calendarId, eventId) => {
  return axios
    .delete(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      // a successful delete does not return anything
      return response.data;
    })
    .catch((err) => {
      // An error here indicates the eventID was already deleted (410) or it was not found (404)
      return err;
    });
};

Calendar.freeBusy = (accessToken, calendarId, timeStart, timeEnd) => {
  if (timeStart === undefined) {
    timeStart = new Date().toISOString();
  }
  if (timeEnd === undefined) {
    var oneWeek = new Date().valueOf() + 86400000 * 7;
    timeEnd = new Date(oneWeek).toISOString(); // one week later
  }
  // iso 8601
  let body = {
    timeMin: timeStart,
    timeMax: timeEnd,
    timeZone: 'US/Central',
    groupExpansionMax: 50,
    calendarExpansionMas: 25,
    items: [{ id: calendarId }],
  };

  return axios
    .post('https://www.googleapis.com/calendar/v3/freeBusy', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      // a successful delete does not return anything

      // {
      //   "kind": "calendar#freeBusy",
      //   "timeMin": "2021-04-07T20:55:37.000Z",
      //   "timeMax": "2021-04-14T20:55:37.000Z",
      //   "calendars": {
      //       "optdi857if3c83476keu5hp8g0@group.calendar.google.com": {
      //           "busy": [
      //               {
      //                   "start": "2021-04-07T17:00:00-07:00",
      //                   "end": "2021-04-07T18:00:00-07:00"
      //               }
      //           ]
      //       }
      //   }
      // }

      return {
        busy: response.data.calendars[calendarId].busy,
      };
    })
    .catch((err) => {
      // Will return busy: [] if there are no conflicts
      return err;
    });
};

Calendar.markCancelled = (accessToken, calendarId, eventId) => {
  let event = {
    summary: 'Cancelled Appointment',
  };

  return axios
    .patch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`, event, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      // if the error has the issue that it is outdated, use the refresh token to get a new token
      return err;
    });
};

Calendar.findOrCreateCalendar = async (accessToken) => {
  const calendars = (
    await axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  ).data.items.filter((calendar) => calendar.summary === 'Blueberry Appointments');
  if (calendars.length) {
    console.log(`Found ${calendars.length} calendars with the name 'Blueberry Appointments'`);
    return calendars[0].id;
  }
  return (await Calendar.createCalendar(accessToken)).id;
};

module.exports = Calendar;
