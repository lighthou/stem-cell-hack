const accountSid = 'ACc9ccc6c41bd632675a838b63813bf41c';
const authToken = 'b0ba39f79c9d113aa9ece16c409c7b2a';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+61439737983',
     to: '+61411282134'
   })
  .then(message => console.log(message.sid));
