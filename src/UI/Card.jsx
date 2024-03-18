const Card = props => {
  return (
    <div className='bg-purple-600 min-h-screen flex items-center text-lg'>
      {props.children}
    </div>
  )
}

export default Card
