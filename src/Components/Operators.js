import React from 'react';
export class Operators extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickD = this.handleClickD.bind(this);
    this.handleClickM = this.handleClickM.bind(this);
    this.handleClickS = this.handleClickS.bind(this);
    this.handleClickA = this.handleClickA.bind(this);
  }
  handleClickD() {
    this.props.handleOperator("/");
  }
  handleClickM() {
    this.props.handleOperator("*");
  }
  handleClickS() {
    this.props.handleOperator("-");
  }
  handleClickA() {
    this.props.handleOperator("+");
  }
  render() {
    return (<div>
      <div className='row-small'>
        <div>
          <div id='divide' className='panel-op' onClick={this.handleClickD}>
            /
            </div>
          <div id='multiply' className='panel-op' onClick={this.handleClickM}>
            *
            </div>
          <div id='subtract' className='panel-op' onClick={this.handleClickS}>
            -
            </div>
          <div id='add' className='panel-op' onClick={this.handleClickA}>
            +
            </div>
        </div>
        <div>
          <div id='clear' className='panel-big-vert' onClick={this.props.handleClear}>
            C
            </div>
          <div id='equals' className='panel-big-vert' onClick={this.props.handleResult}>
            =
            </div>
        </div>
      </div>
    </div>);
  }
}
