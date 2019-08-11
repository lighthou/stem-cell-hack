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
           const { name, number, weight, age, calcium, UCE, BSCL } = student //destructuring
           return (
              <tr key={name}>
                 <td>{name}</td>
                 <td>{number}</td>
                 <td>{weight}</td>
                 <td>{age}</td>
                 <td>{calcium}</td>
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
              <h1 id='title' className="title">Patient Calcium Data</h1>
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
