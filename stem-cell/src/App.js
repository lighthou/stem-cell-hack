import React from 'react';
import './App.css';
import { addData } from './actions';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', number: '', weight: '', calcium: '', age:'', uce:'-', bscl: '-'};

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeCalcium = this.handleChangeCalcium.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value})
  }

  handleChangeNumber(event) {
    this.setState({number: event.target.value});
  }

  handleChangeWeight(event) {
    this.setState({weight: event.target.value});
  }

  handleChangeCalcium(event) {
    this.setState({calcium: event.target.value});
  }

  handleChangeAge(event) {
    this.setState({age: event.target.value});
  }

  handleSubmit(event) {
    alert('Your results have been submitted!');
    event.preventDefault();

    addData(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p ><b>Please enter your details below.</b></p>
        <div className="padded" align="right"> 
        <form id="submitform" onSubmit={this.handleSubmit}>  
        <label className="inputlabel">First Name:  <input required type="text" name="name" value={this.state.name} onChange={this.handleChangeName}/></label><br></br>
        <label className="inputlabel">Phone Number:  <input required type="text" name="name" value={this.state.number} onChange={this.handleChangeNumber}/></label><br></br>
        <label className="inputlabel">Weight (in Kg):  <input required type="number" min="20" max="150" name="name" value={this.state.weight} onChange={this.handleChangeWeight}/></label><br></br>
        <label className="inputlabel">Daily Calcium (in Mg):  <input required type="number" name="name" min="0" max="2000" value={this.state.calcium} onChange={this.handleChangeCalcium}/></label><br></br>
        <label className="inputlabel">Age (in Years):  <input required type="number" name="name" min="1" max="110" value={this.state.age} onChange={this.handleChangeAge}/></label><br></br>
        <input type="submit" name="submit" value="Submit Stem Cell Details" align="center"/>
        </form>
        </div>
        <p><b>You will receive a text about any dietary modifications that should be made based on calcium intake.</b></p>

        </header>
      </div>
    );
  }
}

export default NameForm;
