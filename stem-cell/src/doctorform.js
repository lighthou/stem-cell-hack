import React from 'react';
import './App.css';
import { fetchData, getData, populateData, data} from './actions';


function promptdata(text) {
    prompt("What was the patient's levels?", 0);
}

class DoctorForm extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           students: this.props.data
       }
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
