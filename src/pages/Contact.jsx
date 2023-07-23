import { useForm} from "react-hook-form";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import '../styles/login_register.css';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ContactPage () {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {sendMessage, errors: messageErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    //const navigate = useNavigate();
    const onSubmit = handleSubmit(async(data) => {
        if (data && isAuthenticated ) {
            sendMessage(data);
        } else {
            navigate('/login');
        }
    });

    return (
        <div className='background_config flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className="form__container max-w-md w-full p-10 rounded-md">
                {
                    /*messageErrors.map((error, index) => (
                        <div className='bg-red-500 p-2 text-white' key={index} >
                            {error}
                        </div>
                    ))*/
                }
                <h1 className="text-2xl font-bold text-center mb-5" > Contáctanos </h1>
                <p className="flex gap-x-2 justify-between" >
                    Envíanos tus comentarios, dudas o sugerencias. ¡Nos encantaría saber de ti!
                </p>
                <form 
                    onSubmit={onSubmit}
                    >
                    <input type="name" placeholder="Enter your name" {...register("name",
                    {required: true})}
                    className=" w-full px-4 py-2 border rounded-md my-2"/>
                    {errors.name && <p className="text-red-500"> Name is required </p>}
                    <input type="email" placeholder="Enter your email" {...register("email",
                    {required: true})}
                    className=" w-full px-4 py-2 border rounded-md my-2"/>
                    {errors.email && <p className="text-red-500"> Email is required </p>}
                    <textarea rows="3" placeholder="Escribe tu mensaje"
                    {...register("message",
                    {required:true})}
                    className= "w-full px-4 py-2 border rounded-md my-2"/>
                    {errors.message && <p className="text-red-500"> Message is required </p>}
                    <button type="submit"
                    className="bg-[#c01761] text-white px-4 py-2 rounded-md my-2">
                        Enviar 
                    </button>
                </form>
                <p className="flex gap-x-2 justify-between" >
                    Don&apos;t have an account?
                    <Link to="/register" className="text-[#c01761]" > Register </Link>
                </p>
            </div>
        </div>
    )
}
export default ContactPage;