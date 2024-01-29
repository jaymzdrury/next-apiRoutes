export default function FormField(
    {func, type, data}
    :
    {func: (formData: FormData) => void,
      type: string,
      data: Data
    }
  ): JSX.Element {
  
    return (
      <form action={func}>
        <input readOnly style={{display: 'none'}} name='id' type="text" value={data.id} />
        <input readOnly name='name' type="text" value={data.name} />
        <button type="submit">{type}</button>
      </form> 
    )
    
  }