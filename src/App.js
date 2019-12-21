import React from 'react';
import './App.scss';
import { Operators } from './Components/Operators';
import { Numbers } from './Components/Numbers';
import { Display } from './Components/Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      altInput: '',
      resetStatus: false,
    }    
  } 
  
  handleClick = (val) => {
    if (this.state.resetStatus) {
      if (val === ".") {
        this.setState ({
          input: "0."
        })
      } else {
        this.setState ({
          input: val
        })
      }

      this.setState ({
        resetStatus: false
      })

      return
    }

    if (this.state.input === 0 && val !== ".") {      
      this.setState ({
        input: val
      })
    } else
    this.setState ({
      input: this.state.input + val
    })
  }
  
  handleOperator = (val) => {
    if (this.state.resetStatus) {
      this.setState ({
        input: false
      })
    }
    console.log("altinput:" + this.state.altInput)
    if (this.state.input == 0) {
      if (val === "-" && this.state.altInput[this.state.altInput.length - 1] === "-" ) {return}
      if (val === "-" && this.state.altInput[this.state.altInput.length - 2] === "-" ) {return}
      if (val === "-" && isNaN(this.state.altInput[this.state.altInput.length - 2])) {
        this.setState ({
          altInput: this.state.altInput + val
        })
        return
      }
      if (val !== "-" && isNaN(this.state.altInput[this.state.altInput.length - 3])) {
        this.setState ({
          altInput: this.state.altInput.slice(0, (this.state.altInput.length - 4)) + " " + val + " "
        })
        
        return
      }
      this.setState ({
        altInput: this.state.altInput.slice(0, (this.state.altInput.length - 3)) + " " + val + " "
        
      })
      return
    }
   this.setState ({
      altInput: this.state.altInput + this.state.input + " " + val + " ",
      input: 0
    })
  }
  
  handleResult = () => {
    let result = this.state.altInput + this.state.input;
    console.log("result:" + result);

    let resultArr = result.split(' ');

    while (isNaN(parseInt(resultArr[resultArr.length - 1]))) {
      resultArr = resultArr.slice(0, -1)
    }
    console.log(resultArr);
    
    while (resultArr.indexOf("*") > 0) {
      let ind = resultArr.indexOf("*");
      let res = resultArr[ind-1] * resultArr[ind+1];
      resultArr.splice(ind-1, 3, res)
    };

    while (resultArr.indexOf("/") > 0) {
      let ind = resultArr.indexOf("/");
      let res = resultArr[ind-1] / resultArr[ind+1];
      resultArr.splice(ind-1, 3, res)
    };

    while (resultArr.indexOf("+") > 0) {
      let ind = resultArr.indexOf("+");
      let res = Number(resultArr[ind-1]) + Number(resultArr[ind+1]);
      resultArr.splice(ind-1, 3, res)
    };

    while (resultArr.indexOf("-") > 0) {
      let ind = resultArr.indexOf("-");
      let res = resultArr[ind-1] - resultArr[ind+1];
      resultArr.splice(ind-1, 3, res)
    };

    this.setState ({
      input: resultArr[0],
      altInput: '',
      resetStatus: true
    })
  }
 
  handleClear = () => {
    this.setState ({
      input: 0,
      altInput: ''
    })
  }
  
  render() {
    
    return (
    
     <div>
        <div id='main'>
          <Display mainInput={this.state.input} altInput={this.state.altInput} />
          <div id='buttons-container'>
            <Numbers handleClick={this.handleClick} mainInput={this.state.input} />
            <Operators handleOperator={this.handleOperator} handleClear={this.handleClear} handleResult={this.handleResult} />
          </div>
        </div>
        
     </div>          
    )   
  }
}

export default App;
