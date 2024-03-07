import Image from '../../Image/Logo.png'
import './Nav.css'
export default function Navbar(){
    return(
        <>
        <div className='ContainerNav'>
            <div className='ContainerImageNav'>
                <img className='ImagenNav' src={Image} alt="" />
            </div>
            <div>
                <a className='a' href="">Overview</a>
                <a className='a' href="">Contacts</a>
                <a className='a' href="">Favorites</a>
                <button className='buttonNEW'> +  New</button>
            </div>
        </div>
        <hr />
            

        </>
    )
}