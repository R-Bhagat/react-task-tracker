import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
const Header = ({title,onAdd,showAdd}) => {
    const location=useLocation()

    return (
        <header className='header'>
            <h2 >{title}</h2>
            
            {location.pathname==='/' &&<Button color={showAdd?"red":"green"} text={showAdd?'Close':"add"} onClick={onAdd} />}
        </header>
    )
}
Header.defaultProps={
    title:"Task Tracker"
}
Header.propTypes={
    title:PropTypes.string.isRequired, 
}
//
// const headingStyle={
//     color:"red",
//     backgroundColor:"blue"

// }
export default Header
