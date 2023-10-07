import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const { singIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        singIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                setLoginError("Invalid email or password. Please try again.");
                toast.error("Invalid email or password. Please try again.");
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError("Google sign-in error. Please try again.");
                toast.error("Google sign-in error. Please try again.");
            });
    }
    

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={'https://i.ibb.co/YQ5tYRB/gs.png'} alt="logo" />
                    Game Stop
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="name@mail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    placeholder="********"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Log In
                            </button>
                            {loginError && (
                                <div className="text-red-500 mt-2 text-center">
                                    {loginError}
                                </div>
                            )}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to={'/signin'}><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a></Link>
                            </p>
                        </form>
                        <div className="flex items-center space-x-4">
                            <hr className="flex-grow border-gray-300" />
                            <span className="text-black">or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <h2 className="text-center font-extrabold ">Login With</h2>
                        <div className="flex justify-center">

                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-1/2"><FcGoogle></FcGoogle>Google</button>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                pauseOnHover
                closeOnClick
                toastStyle={{
                    backgroundColor: 'rgba(31, 41, 156)',
                    color: 'white',
                }}
            />
        </section>
    );
};

export default LoginPage;
