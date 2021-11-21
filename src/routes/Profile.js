import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";

const Profile = ({players}) =>{
    return <div className='profile-wrap'>
        {players.map(v=>{
            return (<Link to={`/profile/${v.name}`}>
                <PlayerCard 
                    name={v.name}
                    firstName = {v.firstName}
                    country = {v.country}
                    number = {v.number}
                    >
                    </PlayerCard>
            </Link>
        )})}
    </div>
}


function mapStateToProps(state,props){
    console.log(state)
    return {
        players:state.players
    }
}

export default connect(mapStateToProps)(Profile);

