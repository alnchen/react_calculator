import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e){
    var firstNum = e.target.value;
    firstNum = parseInt(firstNum);
    this.setState({ num1: firstNum});
  }

  setNum2(e){
    var secondNum = e.target.value;
    secondNum = parseInt(secondNum);
    this.setState({ num2: secondNum});
  }

  multiply(e){
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  divide(e){
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  add(e){
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract(e){
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  clear(e){
    e.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }


  render() {
    const { num1, num2, result} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
        <br />
        <button onClick={this.add}>ADD</button>
        <button onClick={this.subtract}>SUBTRACT</button>
        <button onClick={this.multiply}>MULTIPLY</button>
        <button onClick={this.divide}>DIVIDE</button>
        <button onClick={this.clear}>CLEAR</button>
      </div>
    );
  }
}

export default Calculator;


// e.target =
//   -the thing under the mouse
//   -the thing that triggers the event
//   -
//
// e.currentTarget -
//   -the thing before the dot(what calls for addEventListener)
//   -
