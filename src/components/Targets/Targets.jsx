
import './Target.css'
import Image from '../../Image/Logo.png'


export default function Targets(){

    return(
        <>
            <div className="ContainerTarget">
                <img className="Image" src={Image} alt="" />
                <h3 className="TitleTarget">Full Name</h3>
                <span className="Span">correo@gmail.com</span>
                <hr />
                <ButtonRemove></ButtonRemove>
                
            
            </div>
        </>
    )
}