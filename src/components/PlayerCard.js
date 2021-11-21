import '../css/playercard.css'

const PlayerCard = ({name,firstName,country,number})=>{
    const src = `https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/${name}_1100x693.jpg`
    return (
    <div className='player-card-wrap'>
        <img className='palyer-card-img' src={src}/>
        <span className='palyer-card-first-name'>{firstName}</span>
        <span className='palyer-card-name'>{name}</span>
        <span className='palyer-card-country'>{country}</span>
        <span className='palyer-card-number'>{number}</span>
    </div>)
}

export default PlayerCard;