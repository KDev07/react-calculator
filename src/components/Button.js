import { useContext } from "react";
import { CalculateContext } from "../context/CalculateContext";

const getStyleName = btn => {
  const className = {
    '=' : 'equals',
    'x' : 'operator',
    '-' : 'operator',
    '+' : 'operator',
    '/' : 'operator',
  }
  return className[btn]
};

const Button = ({ value }) => {
  const { calculate, setCalculate } = useContext(CalculateContext)

  const comma = () => {
    setCalculate({
      ...calculate,
      num: !calculate.num.toString().includes('.') ? calculate.num + value : calculate.num
    })
  }

  const clear = () => {
    setCalculate({
      num:0,
      res:0,
      operator: ""
    })
  }

  const numberClick = () => {
    const numberString = value.toString()
    let numberValue;

    if(numberString === '0' && calculate.num === 0){
      numberValue = "0";
    }else{
      numberValue = Number(calculate.num + numberString);
    }

    setCalculate({
      ...calculate,
      num: numberValue
    })
  }

  const operatorClick = () => {
    setCalculate({
      operator: value,
      res: !calculate.res && calculate.num ?  calculate.num : calculate.res,
      num: 0
    })
  }

  const equalsClick = () => {
    if(calculate.res && calculate.num){
      const math = (a,b,operator) => {
        const result = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            'x': (a, b) => a * b,
            '/': (a, b) => a / b
        }
        return result[operator](a, b);
      }
      setCalculate({
        res: math(calculate.res, calculate.num, calculate.operator),
        num: 0,
        operator: "",
      })
    }
  }

  const percentageClick = () => {
    setCalculate({
      num: (calculate.num / 100),
      res: (calculate.res / 100),
      operator: ""
    })
  }

  const invertClick = () => {
    setCalculate({
      num: calculate.num ? calculate.num * -1 : 0,
      res: calculate.res ? calculate.res * -1 : 0,
      operator: ""
    })
  }

  const buttonClick = () => {
    const result = {
      '.': comma,
      'C': clear,
      '+': operatorClick,
      '-': operatorClick,
      'x': operatorClick,
      '/': operatorClick,
      '=': equalsClick,
      '%': percentageClick,
      '+/-': invertClick
    }
    if(result[value]) {
      return result[value]()
    }else {
      return numberClick()
    }
  }

  return (
    <button onClick={buttonClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button