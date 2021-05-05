const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/accessTokenValidator');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const ticket_controller = require('../controllers/ticket.controller');

router.post('/create', authenticateJWT, ticket_controller.ticket_create);
router.get('/:id', authenticateJWT, ticket_controller.ticket_details);
router.put('/:id/update', authenticateJWT, ticket_controller.ticket_update);
router.delete('/:id/delete', authenticateJWT, ticket_controller.ticket_delete);

module.exports = router;