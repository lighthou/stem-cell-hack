import React from 'react';
import logo from './logo.svg';
import './App.css';

function myFunction() {
  console.log("Helo")
}

class NameForm extends React.Component {
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
        <div className="padded" align="right"> 
        <form id="submitform" onSubmit={this.handleSubmit}>
        <label className="inputlabel">Weight:  <input type="text" name="name" value={this.state.value1} onChange={this.handleChangeValue1}/></label><br></br>
        <label className="inputlabel">Diet:  <input type="text" name="name" value={this.state.value2} onChange={this.handleChangeValue2}/></label><br></br>
        <label className="inputlabel">Age:  <input type="text" name="name" value={this.state.value3} onChange={this.handleChangeValue3}/></label><br></br>
        <input type="submit" name="submit" value="Submit Stem Cell Details" align="center"/>
        </form>
        </div>
        
        </header>
      </div>
    );
  }
}

export default NameForm;
