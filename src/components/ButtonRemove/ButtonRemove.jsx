import './ButtonRemove.css'
export default function ButtonRemove(){
    const handleClick = () => {
        console.log('Elemento Eliminado');
    }
    return(
        <>
            <button className='ButtonRemove' onClick={handleClick}>X REMOVE</button>
        </>
    )
}