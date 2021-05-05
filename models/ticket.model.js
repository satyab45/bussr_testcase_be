const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TicketSchema = new Schema({
    creation_date: { type: Date, required: true, default: Date.now },
    customer_name: {type: String, required: true},
    performance_title: {type: String, required: true},
    performance_time: {type: String, required: true},
    ticket_price: {type: Number, required: true}
});


// Export the model
module.exports = mongoose.model('Ticket', TicketSchema);