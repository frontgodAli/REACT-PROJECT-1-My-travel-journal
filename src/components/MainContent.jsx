import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function MainContent(props){
    return(
        <div className='travel-grid'>
            <img className='img-grid' src={props.travel.imageUrl} alt="destination" />
            <div className='location-grid'>
            <FontAwesomeIcon className='icon' icon={faLocationDot} />
            <h3>{props.travel.location}</h3>
            </div>
            <a className='maps-grid' href={props.travel.googleMapsUrl}>View on google maps</a>
            <h1 className='title-grid'>{props.travel.title}</h1>
            <p className='date-grid'>{props.travel.startDate} - {props.travel.endDate}</p>
            <p className='description-grid'>{props.travel.description}</p>
        </div>
    )
}

export default MainContent