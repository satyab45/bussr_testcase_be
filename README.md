# bussr_testcase_be
bussr testcase

Steps to execute project:

1) clone and cd into directory. e.g cd bussr_testcase_be

2) run npm install

3) configure node port and mongo creds in config/config.js

3) type npm start

API Examples:

Login:

http://localhost:3000/login

header: Content-type: application/json
Request:
Body: raw
{
    "username": "john",
    "password": "password123admin"
}
Response:
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2MjAyMDYyMjF9.idGhtf5IER_eRP0-oJSij4uFmd1WrwIAxnmOxV3FVjg"
}

Ticket Create:

http://localhost:3000/tickets/create

header: 
Content-type: application/json
Authorization: bearer <access_token>

Request:
Body: raw
{
    "customer_name": "ravi",
    "performance_title": "Raadha",
    "performance_time": "11:00 AM",
    "ticket_price": "150"
}
Response:
Ticket Created successfully

Get Ticket:
http://localhost:3000/tickets/<ticket_id>

header: 
Content-type: application/json
Authorization: bearer <access_token>

Response:
{
    "_id": "609262f510f9a53224aeb969",
    "customer_name": "ravi",
    "performance_title": "Raadha",
    "performance_time": "11:00 AM",
    "ticket_price": 150,
    "creation_date": "2021-05-05T09:18:45.179Z",
    "__v": 0
}

Update Ticket:
http://localhost:3000/tickets/<ticket_id>/update

header: 
Content-type: application/json
Authorization: bearer <access_token>

Request:
Body: raw
{
    "customer_name":  "raju"
}

Response:
Ticket udpated.

Delete Ticket:

http://localhost:3000/tickets/<ticket_id>/delete

header: 
Content-type: application/json
Authorization: bearer <access_token>

Response:
Deleted successfully!