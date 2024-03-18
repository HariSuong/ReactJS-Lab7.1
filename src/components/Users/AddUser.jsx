const AddUser = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username </label>
      <input type='text' id='username' />
      <label htmlFor='age'>Age (Years) </label>
      <input type='number' id='age' />
      <button type='submit'> Add User </button>
    </form>
  )
}

export default AddUser
