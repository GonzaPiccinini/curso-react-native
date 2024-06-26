interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 19,
    firstName: 'Gonzalo',
    lastName: 'Piccinini',
    address: {
      country: 'Argentina',
      houseNo: 1570
    }
  }
  
  return (
    <>
      <h3>ObjectLiterals</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}
