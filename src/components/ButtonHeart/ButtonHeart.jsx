import './ButtonHeart.css'
import {store, changeFavorite} from '../../store'

export default function ButtonHeart(props){
    console.log(props)

    const changeValue = (isFavorite, userId) => {
        store.dispatch(changeFavorite({
            favorite: !isFavorite,
            userId
        }))
    }

    return(
        <>
            <button className="ButtonHeart" onClick={() => changeValue(props.isFavorite, props.userId)}>
                {!props.isFavorite && "💚"}
                {props.isFavorite && "X"}
                
            </button>
        </>
    )
}