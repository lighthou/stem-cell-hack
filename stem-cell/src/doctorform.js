import React from 'react';
import './App.css';
import {updateUCE, updateBSCL} from './actions';
import ReactDOM from 'react-dom';
import NameForm from './App'

function promptdatauce(name) {
    var text = prompt("What was the patient's levels?", 0);
    updateUCE(name, text);
    return text;
};

function promptdatabscl(name) {
   var text = prompt("What was the patient's levels?", 0);
   updateBSCL(name, text);
   return text;
};

function sendTextWithData(name, number, uce, bscl, calcium, age, weight) {
    let message = "";
    message += "Hey " + name+ "!\n\n"

    if (calcium < 1000) {
        if (calcium < 600) {
            message += "Your calcium levels are looking a little low, it might be good to eat more calcium rich foods such as almonds, milk, other dairy products or calcium supplements.\n\n"
        } else {
            message += "Your calcium levels are looking good, good job!\n\n"
        }
    } else {
        message += "Your calcium levels are a little high, so try to eat a little less of foods such as almonds, milk, other dairy products or calcium supplements.\n\n"
    }

    if (uce > 0.25 * calcium) {
        message += "Also, you need to absorb more calcium. This mean's eating more phosphate rich foods such as seafood, nuts and dairy. Also try to get some more Vitamin D!\n\n"
    }

    if (bscl < 8.5 || bscl > 10.2) {
        message += "Finally, your Blood Serum Calcium Levels are out of sorts and you should see your doctor on further steps."
    }

    message += "If you have any further questions, please dont hesistake to contace chees.life clinical trials."
    console.log(message);
    //sendText(message, number)

}

function sendText(textData, destination) {
    let number = "+61" + destination.slice(1);
    console.log(number);
    var accountSid = 'ACc9ccc6c41bd632675a838b63813bf41c'; // Your Account SID from www.twilio.com/console
    var authToken = 'b0ba39f79c9d113aa9ece16c409c7b2a';   // Your Auth Token from www.twilio.com/console

    var details = {
        'Body': textData,
        'From': '+61439737983',
        'To': number
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
    theHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    fetch('https://api.twilio.com/2010-04-01/Accounts/ACc9ccc6c41bd632675a838b63813bf41c/Messages.json', {
    method: 'POST',
    headers: theHeaders,
    body: formBody
    });
};

class DoctorForm extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           students: this.props.data
       }
    }
    
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { name, number, weight, age, calcium, uce, bscl, text} = student //destructuring

           if (uce === '-' && bscl === '-')  {
            return (
                <tr key={name}>
                   <td>{name}</td>
                   <td>{number}</td>
                   <td>{weight}</td>
                   <td>{age}</td>
                   <td>{calcium}</td>
                   <td>
                   <button onClick={() => promptdatauce(name)}>Add uce</button>
                   </td>
                   <td><button onClick={() => promptdatabscl(name)}>Add bscl</button></td>
                   <td></td>
                </tr>
             )
           }

           if (uce === '-') {
            return (
                <tr key={name}>
                   <td>{name}</td>
                   <td>{number}</td>
                   <td>{weight}</td>
                   <td>{age}</td>
                   <td>{calcium}</td>
                   <td>
                   <button onClick={() => this.props.data.uce = promptdatauce(name)}>Add uce</button>
                   </td>
                   <td>{bscl}</td>
                   <td></td>

                </tr>
             )
           }

           if (bscl === '-') {
            return (
                <tr key={name}>
                   <td>{name}</td>
                   <td>{number}</td>
                   <td>{weight}</td>
                   <td>{age}</td>
                   <td>{calcium}</td>
                   <td>{uce}
                   </td>
                   <td><button onClick={() => promptdatabscl(name, this.props.data)}>Add bscl</button></td>
                   <td></td>

                </tr>
             )
           }
           console.log("Hi");
           return (
            <tr key={name}>
               <td>{name}</td>
               <td>{number}</td>
               <td>{weight}</td>
               <td>{age}</td>
               <td>{calcium}</td>
               <td>{uce}</td>
               <td>{bscl}</td>
               <td><button onClick={() => sendTextWithData(name, number, uce, bscl, calcium, age, weight)}>Send Text</button></td>

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
