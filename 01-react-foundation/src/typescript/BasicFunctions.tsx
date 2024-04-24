export const BasicFunctions = () => {
  const addTwoNumber = (a: number, b: number) => (a + b)
  
  return (
    <>
      <h3>Funciones</h3>
      <span>Rel resultado de sumar: { addTwoNumber(2, 8) }</span>
    </>
  )
}
