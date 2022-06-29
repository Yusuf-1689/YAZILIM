
import './Item.css';



const Item = ({card}) => {
    const {name, img, options} = card;
    
  return (
    <div className='card'>
        <img className='card-logo' src={img} alt="img" />
        <h3 className='card-title' >{name}</h3>
    </div>
  )
}

export default Item;
