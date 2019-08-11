import React from 'react';
import './App.css';

function promptdata(text) {
    prompt("What was the patient's levels?", 0);
}

function sendText(textData, destination) {
    var accountSid = 'ACc9ccc6c41bd632675a838b63813bf41c'; // Your Account SID from www.twilio.com/console
    var authToken = 'b0ba39f79c9d113aa9ece16c409c7b2a';   // Your Auth Token from www.twilio.com/console

    var details = {
        'Body': textData,
        'From': '+61439737983',
        'To': destination
      };

    var formBody = [];
    for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

        
    let theHeaders = new Headers();
    theHeaders.append('Authorization', 'Basic ' + btoa(accountSid + ":" + authToken));
    theHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')

    fetch('https://api.twilio.com/2010-04-01/Accounts/ACc9ccc6c41bd632675a838b63813bf41c/Messages.json', {
    method: 'POST',
    headers: theHeaders,
    body: formBody
    })


    // const { exec } = require('child_process');
    // exec('node new.js', (err, stdout, stderr) => {
    //     if (err) {
    //         // node couldn't execute the command
    //         return;
    //     }

    //     // the *entire* stdout and stderr (buffered)
    //     console.log(`stdout: ${stdout}`);
    //     console.log(`stderr: ${stderr}`);
    // });

//     const accountSid = process.env.TWILIO_ACCOUNT_SID;
//     const authToken = process.env.TWILIO_AUTH_TOKEN;
//     const client = require('twilio')(accountSid, authToken);


//     client.messages
//     .create({
//         body: textData,
//         from: '+61439737983',
//         to: destination
//     })
//   .then(message => console.log(message.sid));
}

class DoctorForm extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           students: this.props.data
       }

       //sendText("Hello Ryan", "+61411282134");
    }
    
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { value1, value2, value3, UCE, BSCL } = student //destructuring
           return (
              <tr key={value1}>
                 <td>{value1}</td>
                 <td>{value2}</td>
                 <td>{value3}</td>
                 <td>{UCE}<button onClick={promptdata}>Add UCE</button></td>
                 <td>{BSCL}<button  onClick={promptdata}>Add BSCL</button></td>
              </tr>
           )
        })
     }
  
     renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>Patient Calcium Data</h1>
              <table id='students' align="center">
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
 }

export default DoctorForm;
