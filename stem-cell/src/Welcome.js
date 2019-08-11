import React from 'react';
import './App.css';
import doctor from './doctor.png';
import caillou from './patient.png'
import NameForm from './App.js'
import ReactDOM from 'react-dom';
import DoctorForm from './doctorform'
import { populateData } from './actions';
import { isLVal } from '@babel/types';

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value1: '', value2: '', value3:''};
  
      this.handleChangeValue1 = this.handleChangeValue1.bind(this);
      this.handleChangeValue2 = this.handleChangeValue2.bind(this);
      this.handleChangeValue3 = this.handleChangeValue3.bind(this);
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.data = populateData();
    }
  
    handleChangeValue1(event) {
      this.setState({value1: event.target.value});
    }
  
    handleChangeValue2(event) {
      this.setState({value2: event.target.value});
    }
  
    handleChangeValue3(event) {
      this.setState({value3: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your results have been submitted!: ' + this.state.value1 + " " + this.state.value2 + " " + this.state.value3);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <p className="padded" >Are you a doctor or a patient?</p>
            <div className="imageInput">
            <span classname="doctor">  &nbsp;&nbsp;&nbsp;Doctor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span className="patient">Patient &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className="imageInput">
            <input className='imageinput' type="image" src={doctor} height='270' width='300' onClick={() => {
                var password = prompt("Enter your medical unique identifier");
                if (password == "1234") {
                    ReactDOM.render(<DoctorForm data={this.data}/>, document.getElementById('root'));
                }
                }}/>
            <input className="imageinput" type="image" src={caillou} height='250' width='310' onClick={() => {ReactDOM.render(<NameForm />, document.getElementById('root'));}}/>
            </div>
          </header>
        </div>
      );
    }
  }
  
  export default Welcome;
  