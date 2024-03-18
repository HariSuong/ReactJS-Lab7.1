import PropTypes from 'prop-types'

const Button = ({ className, type, onClick, children }) => {
  return (
    <button className={className} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.node,
  type: PropTypes.node,
  className: PropTypes.node
}
export default Button
