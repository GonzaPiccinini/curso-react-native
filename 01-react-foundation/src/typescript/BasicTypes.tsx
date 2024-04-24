export const BasicTypes = () => {
  const name: string = 'Gonzalo';
  const age: number = 18;
  const isActive: boolean = false;

  const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Qwik'];

  return (
    <>
      <h3>Tipos Básicos</h3>

      {name} {age} {isActive ? 'true' : 'false'}
      <br />
      {powers.join(', ')}
    </>
  )
}
