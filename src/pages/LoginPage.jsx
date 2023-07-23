import { useForm} from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login_register.css';

function LoginPage () {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signin, errors: signInErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async(data) => {
        signin(data);
    });
    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated]);

    return (
        <div className='background_config flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className="form__container max-w-md w-full p-10 rounded-md">
                {
                    /*signInErrors.map((error, index) => (
                        <div className='bg-red-500 p-2 text-white' key={index} >
                            {error}
                        </div>
                    ))*/
                }
                <h1 className="text-2xl font-bold text-center mb-5" > Login </h1>
                <form 
                    onSubmit={onSubmit}
                    >
                    <input type="email" placeholder="Enter your email" {...register("email",
                    {required: true})}
                    className=" w-full px-4 py-2 border rounded-md my-2"/>
                    {errors.email && <p className="text-red-500"> Email is required </p>}
                    <input type="password" placeholder="Enter your password" {...register("password",
                    {required:true})}
                    className= "w-full px-4 py-2 border rounded-md my-2"/>
                    {errors.password && <p className="text-red-500"> Password is required </p>}
                    <button type="submit"
                    className="bg-[#c01761] text-white px-4 py-2 rounded-md my-2">
                        Iniciar Sesión
                    </button>
                </form>
                <p className="flex gap-x-2 justify-between" >
                    ¿No tienes una cuenta?
                    <Link to="/register" className="text-[#c01761]" > Regístratre </Link>
                </p>
            </div>
        </div>
    )
}
export default LoginPage;