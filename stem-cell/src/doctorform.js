import React from 'react';
import './App.css';
import { fetchData, getData, populateData, data} from './actions';


class DoctorForm extends React.Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       console.log(this.props.data);
       this.state = {
           students: this.props.data
       }
    }
    
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { value1, value2, value3 } = student //destructuring
           return (
              <tr key={value1}>
                 <td>{value1}</td>
                 <td>{value2}</td>
                 <td>{value3}</td>
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
              <h1 id='title'>React Dynamic Table</h1>
              <table id='students'>
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
