/*
 * One Controller per layout view
 */

const express = require('express');
const router = express.Router();
const api = require('../api');
const recurringEventsHelper = require('../helpers/recurringEvents');

/**
 * handle recurring events for fullcalendar.js
 * @param event {Event} - a event which could contain a recurring value
 * @returns events [] - new set of events
 */
const mapRecurringEvent = (event) => {
    if (event.included && event.included[0].attributes.freq == 'WEEKLY') {
        return recurringEventsHelper.createRecurringEvents(event);
    }

    return [event];
};

/**
 * maps properties of a event to fit fullcalendar
 * @param event
 */
const mapEventProps = (event) => {
    event.url = event["x-sc-courseId"] ? `/courses/${event.attributes["x-sc-courseId"]}` : '';
};

// secure routes
router.use(require('../helpers/authentication').authChecker);

router.get('/', function (req, res, next) {
    res.render('calendar/calendar', {
        title: 'Kalender',
        userId: res.locals.currentUser._id
    });
});

router.get('/events/', function (req, res, next) {
    api(req).get('/calendar/').then(events => {

        events.forEach(mapEventProps);
        events = [].concat.apply([], events.map(mapRecurringEvent));

        return res.json(events);
    }).catch(err => {
        res.json([]);
    });
});

router.post('/events/', function (req, res, next) {
   api(req).post('/calendar/', {json: req.body}).then(event => {
      res.redirect('/calendar');
   });
});

module.exports = router;
