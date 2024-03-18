import { useRef, useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'

const AddUser = () => {
  // const username = useRef()
  // const age = useRef()
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (username.trim().length === 0 || age.trim().length === 0) {
      return
    }
    if (+age < -1) return
    setUsername('')
    setAge('')
  }

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handleAge = e => {
    setAge(e.target.value)
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit}
        className='p-10 md:w-2/3 lg:w-1/2 mx-auto rounded'
      >
        <div className='shadow'>
          <div className='flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b'>
            <label
              htmlFor='username'
              className='w-20 text-right mr-8 p-4 text-purple-200'
            >
              Username
            </label>
            <input
              type='text'
              name='username'
              id='username'
              // ref={username}
              value={username}
              onChange={handleUsername}
              placeholder='Put in your username'
              className='flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden'
            />
          </div>
          <div className='flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10'>
            <label
              htmlFor='age'
              className='w-20 text-right p-4 mr-8 text-purple-200'
            >
              Age (Years)
            </label>
            <input
              type='number'
              name='age'
              id='age'
              // ref={age}
              value={age}
              onChange={handleAge}
              placeholder='Put in age pseudonym'
              className='flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden'
            />
          </div>
        </div>
        <Button
          className='bg-pink-400 block w-full rounded py-4 text-white font-bold shadow'
          type='submit'
        >
          Add User
        </Button>
      </form>
    </Card>
  )
}

export default AddUser
