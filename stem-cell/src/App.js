import React from 'react';
import './App.css';
import { addData } from './actions';


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
    addData(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="padded" align="right"> 
        <form id="submitform" onSubmit={this.handleSubmit}>
        <label className="inputlabel">Weight:  <input required type="number" name="name" value={this.state.value1} onChange={this.handleChangeValue1}/></label><br></br>
        <label className="inputlabel">Daily Calcium:  <input required type="number" name="name" value={this.state.value2} onChange={this.handleChangeValue2}/></label><br></br>
        <label className="inputlabel">Age:  <input required type="number" name="name" value={this.state.value3} onChange={this.handleChangeValue3}/></label><br></br>
        <input type="submit" name="submit" value="Submit Stem Cell Details" align="center"/>
        </form>
        </div>
        
        </header>
      </div>
    );
  }
}

export default NameForm;
