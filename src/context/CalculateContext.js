import { createContext, useState } from 'react'

export const CalculateContext = createContext()
const CalculateProvider = ({ children }) => {
    const[calculate, setCalculate] = useState({
        num: 0,
        res: 0,
        operator: ""
    });

    const providerValue = {
        calculate, setCalculate
    }

    return (
        <CalculateContext.Provider value={providerValue}>{children}</CalculateContext.Provider>
  )
}

export default CalculateProvider