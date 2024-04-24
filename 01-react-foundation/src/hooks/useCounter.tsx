import { useState } from "react"

interface Options {
  initialState?: number
}

export const useCounter = ({initialState = 0}: Options) => {
  const [counter, setCounter] = useState(initialState)

  const increaseBy = (value: number) => {
    setCounter(counter + value)
  }

  return { counter, increaseBy }
}
