import { connect } from "react-redux";
import { useParams } from "react-router";

const Detail = ({ players }) => {
    const { id } = useParams();
    const { country, firstName, name, number } = players.filter(v => v.name === id)[0]
    const src = `https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/${name}_1100x693.jpg`
    return <div className='detail-wrap'>
        <img src={src}></img>
        <div className='detail-text-wrap'>
            <span className='detail-text-number'>{number}.</span>
            <span className='detail-text-name'>{name}</span>
            <span className='detail-text-firstName'>{firstName}</span>
        </div>
        <div className='detail-text-wrap'>{country}</div>
    </div>
}

function mapStatetoProps(state) {
    const { players } = state;
    return { players }
}

export default connect(mapStatetoProps)(Detail);

