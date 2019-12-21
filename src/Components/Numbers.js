import React from 'react';
export class Numbers extends React.Component {
  
  handleClick1 = () => {
    this.props.handleClick("1");
  }
  handleClick2 = () => {
    this.props.handleClick("2");
  }
  handleClick3 = () => {
    this.props.handleClick("3");
  }
  handleClick4 = () => {
    this.props.handleClick("4");
  }
  handleClick5 = () => {
    this.props.handleClick("5");
  }
  handleClick6 = () => {
    this.props.handleClick("6");
  }
  handleClick7 = () => {
    this.props.handleClick("7");
  }
  handleClick8 = () => {
    this.props.handleClick("8");
  }
  handleClick9 = () => {
    this.props.handleClick("9");
  }
  handleClick0 = () => {
    this.props.handleClick("0");
  }
  handleClickDot = () => {
    if (/[.]/.test(this.props.mainInput) == false)
      this.props.handleClick(".");
  }
  render() {
    return (<div>

      <div className='row'>
        <div id='one' className='panel' onClick={this.handleClick1}>
          1
          </div>
        <div id='two' className='panel' onClick={this.handleClick2}>
          2
          </div>
        <div id='three' className='panel' onClick={this.handleClick3}>
          3
          </div>
      </div>

      <div className='row'>
        <div id='four' className='panel' onClick={this.handleClick4}>
          4
          </div>
        <div id='five' className='panel' onClick={this.handleClick5}>
          5
          </div>
        <div id='six' className='panel' onClick={this.handleClick6}>
          6
          </div>
      </div>

      <div className='row'>
        <div id='seven' className='panel' onClick={this.handleClick7}>
          7
          </div>
        <div id='eight' className='panel' onClick={this.handleClick8}>
          8
          </div>
        <div id='nine' className='panel' onClick={this.handleClick9}>
          9
          </div>
      </div>

      <div className='row'>
        <div id='zero' className='panel-big-horizon' onClick={this.handleClick0}>
          0
          </div>
        <div id='decimal' className='panel' onClick={this.handleClickDot}>
          .
          </div>
      </div>


    </div>);
  }
}
