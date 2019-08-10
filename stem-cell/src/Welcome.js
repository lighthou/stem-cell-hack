import React from 'react';
import './App.css';
import doctor from './doctor.jpg';
import caillou from './caillou.jpg'
import NameForm from './App.js'
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value1: '', value2: '', value3:''};
  
      this.handleChangeValue1 = this.handleChangeValue1.bind(this);
      this.handleChangeValue2 = this.handleChangeValue2.bind(this);
      this.handleChangeValue3 = this.handleChangeValue3.bind(this);
  
      this.handleSubmit = this.handleSubmit.bind(this);
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
            <p>Are you a doctor or a patient?</p>
            <input className='padded' type="image" src={doctor} height='300' width='500'/>
            <input type="image" src={caillou} height='300' width='500' onClick={() => {ReactDOM.render(<NameForm />, document.getElementById('root'));}}/>
          
          </header>
        </div>
      );
    }
  }
  
  export default Welcome;
  