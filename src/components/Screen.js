import { useContext } from "react"
import { CalculateContext } from "../context/CalculateContext"
import { Textfit } from "react-textfit";

const Screen = () => {
  const { calculate } = useContext(CalculateContext);

  return (
    <Textfit className="screen" max={70} mode="single">{calculate.num ? calculate.num : calculate.res}</Textfit>
  )
}

export default Screen