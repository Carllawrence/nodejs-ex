var mongoose = require('mongoose'),

  Event = mongoose.model('Event');
 
/**
 * Find event by id and store it in the request
 */
exports.event = function(req, res, next, id) {
  Event.findById(id, function(err, event) {
    if (err) return next(err);
    if (!event) return next(new Error('Failed to load event ' + id));
    req.event = event;
    next();
  });
};
 
/**
 * List of events
 */
exports.query = function(req, res) {
  Event.find().sort('-createdAt').exec(function(err, events) {
    if (err) return res.json(500, err);
    res.json(events);
  });
};
 
/**
 * Show a event
 */
exports.show = function(req, res) {
  res.json(req.event);
};
 
/**
 * Create a event
 */
exports.create = function(req, res) {
  var event = new Event(req.body);
 
  event.save(function(err) {
    if (err) return res.json(500, err);
    res.json(event);
  });
};
 
/**
 * Update a event
 */
exports.update = function(req, res) {
  Event.update({ _id: req.event._id }, req.body, { }, function(err, updatedEvent) {
    if (err) return res.json(500, err);
    res.json(updatedEvent);
  });
};
 
/**
 * Remove a event
 */
exports.remove = function(req, res) {
  var event = req.event;
 
  event.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(event);   
  });
};