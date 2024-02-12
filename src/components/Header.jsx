import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return(
    <header>
        <FontAwesomeIcon className='icon' icon={faEarthAmericas} />
        <h1>My Travel Journal</h1>
    </header>
)}
export default Header