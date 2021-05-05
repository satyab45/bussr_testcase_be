const Ticket = require('../models/ticket.model');

exports.ticket_create = function (req, res) {
    let ticket = new Ticket(
        {
            customer_name: req.body.customer_name,
            performance_title: req.body.performance_title,
            performance_time: req.body.performance_time,
            ticket_price: req.body.ticket_price,
        }
    );

    ticket.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Ticket Created successfully')
    })
};

exports.ticket_details = function (req, res) {
    Ticket.findById(req.params.id, function (err, ticket) {
        if (err) return next(err);
        res.send(ticket);
    })
};

exports.ticket_update = function (req, res) {
    Ticket.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, ticket) {
        if (err) return next(err);
        res.send('Ticket udpated.');
    });
};

exports.ticket_delete = function (req, res) {
    Ticket.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};