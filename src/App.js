import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalculateProvider from "./context/CalculateContext";

const buttonValue = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  return (
    <CalculateProvider>
      <div className="box">
        <img src="./favicon.ico" alt="react"/>
        <h1>React Calculator</h1>
      </div>
      <Wrapper>
        <Screen />
        <br/>
        <ButtonBox>
          {buttonValue.flat().map((button, index) => (
            <Button 
              value = {button}
              key = {index}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalculateProvider>
  );
}

export default App;
