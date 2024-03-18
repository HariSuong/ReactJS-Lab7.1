import PropTypes from 'prop-types'

const Card = ({ children }) => {
  return (
    <div className='bg-purple-600 min-h-screen flex items-center text-lg'>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}
export default Card
