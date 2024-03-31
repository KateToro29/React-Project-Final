import './ButtonRemove.css'
import {store, removeUser} from './../../store'
export default function ButtonRemove(props){
    const handleClick = (userId) => {
        console.log('Elemento Eliminado' + userId);
        store.dispatch(removeUser(userId))
    }
    return(
        <>
            <button className='ButtonRemove' onClick={() => handleClick(props.userId)}>X REMOVE</button>
        </>
    )
}