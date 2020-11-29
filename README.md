# KALKULATOR

- Zwyczajny kalkulator
- Zachowuje kolejność wykonywania działań, możliwe są też działania na liczbach ujemnych - to jedne z ciekawszych funkcji 
- Dodatkowo działa bez użycia funkcji 'eval()'

## Główna logika (zastąpienie eval())

```javascript
handleResult = () => {
    let result = this.state.altInput + this.state.input;

    let resultArr = result.split(' ');

    while (isNaN(parseInt(resultArr[resultArr.length - 1]))) {
      resultArr = resultArr.slice(0, -1)
    }
    
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
      input: Math.round(1000000000000 * resultArr[0]) / 1000000000000,
      altInput: '',
      resetStatus: true
    })
  }
```

## Przykładowy CSS

```css
.panel {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #BBDEFB;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Sucrose Bold Two";
  width: 120px;
  height: 120px;
  margin: 3px;
  box-sizing: border-box;
  border: black solid 5px;
  &:hover {
   transform: scale(1.1, 1.1)
  }
}
```

## Instalacja

[Create React App](https://create-react-app.dev/docs/getting-started/ "Create React App"):

`npm init react-app my-app`

SCSS:

`npm install node-sass@4.14.1`