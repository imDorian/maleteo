import axios from "axios";
import {useForm} from "react-hook-form";
import "./Register.scss";

const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) =>{
        console.log(data);
        const born = new Date(data.birthdate);
        //console.log(born.getFullYear());
        const now = new Date();
        //console.log(now.getFullYear());
        let age = now.getFullYear() - born.getFullYear();
        if(age >= 18){
            axios.post(process.env.REACT_APP_BACKEND + "users/register", data).then(res => {
                console.log("Usuario creado");
            })
        } else {
            console.log("Edad incorrecta, debes ser mayor de edad");
        }
    
    }

    return(
        <div>
            <h2>Únete a Maleteo y disfruta de sus ventajas</h2>
            <button>Facebook</button>
            <button>Google</button>
            <p>o utiliza tu correo electrónico</p>
            <div className="center">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                    <label htmlFor="email">Dirección de correo electrónico</label>
                        <input id="email" type="email" {...register("email", {required:true})}/>
                    <label htmlFor="name">Nombre</label>
                        <input id="name" type="text" {...register("name",{required:true})}/>
                    <label htmlFor="surname">Apellido</label>
                        <input id="surname" type="text" {...register("surname",{required:true})}/>
                    <label htmlFor="password">Contraseña</label>
                        <input id="password" type="password" {...register("password",{required:true})}/>
                    <label htmlFor="birthdate">Fecha de nacimiento</label>
                        <input id="birthdate" type="date" placeholder="Para registrarte tendrás que ser mayor de edad. Los usuarios no veran tu fecha de cumpleaños" {...register("birthdate",{required:true})}/>
                    <input type="checkbox"></input>
                    <span>Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y otros correos electrónicos de Maleteo</span>
                    <button>Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;

