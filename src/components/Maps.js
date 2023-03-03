import "./Maps.css"
import data from "../data"

const Maps = () => {
    return <div className="all-maps">

    {
        data.map( (oneMap) => {
            const {id, image, title, date, description} = oneMap


        return <div key={id} className="one-map">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>

        </div>
        })
    }

    </div>
} 

export default Maps