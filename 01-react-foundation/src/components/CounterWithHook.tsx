import { useCounter } from "../hooks"

export const CounterWithhook = () => {
  const { counter, increaseBy } = useCounter({})

  return (
    <>
      <h3>Contador con custom hook: <small>{counter}</small></h3>

      <div>
        <button onClick={() => increaseBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
