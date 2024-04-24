import { useForm } from "react-hook-form"

type FormInputs = {
  email: string
  password: string
}

export const FormsPage = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>({
    defaultValues: {
      email: 'gonzalo@mail.com',
      password: 'test1234'
    }
  })

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input {...register('email', { required: true })} type="text" placeholder="Email" />
          <input {...register('password')} type="password" placeholder="Password" />

          <button type="submit">Ingresar</button>
        </div>
      </form>

      <pre>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </>
  )
}
