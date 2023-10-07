import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInPage = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const displayName = form.get("displayName");
        const photoURL = form.get("photoURL"); 
        const phoneNumber = form.get("phoneNumber"); 
    

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            toast('Password must be at least 6 characters long')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one capital letter");
            toast("Password must contain at least one capital letter");
            return;
        } else if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError("Password must contain at least one special character");
            toast("Password must contain at least one special character");
            return;
        } else {
            setPasswordError();
        }
        console.log(email, password, displayName);
        createUser(email, password, displayName, photoURL, phoneNumber)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
                toast.error(error)
            })
    };

    return (
        <div className="">
            <section className="bg-gray-50 dark:bg-gray-900 py-28">
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
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <div>
                                    <input
                                        type="text"
                                        name="displayName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="name@mail.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number</label>
                                    <input
                                        type="phone"
                                        name="phoneNumber"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="+880**********"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                                    <input
                                        type="url"
                                        name="photoURL"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder="https://i.ibb.co/p3HZ1Kb/ubisoft.png"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="********"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                {passwordError && (
                                    <div className="text-red-500">
                                        {passwordError}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600"
                                >
                                    Create Account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={'/login'}><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
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
        </div>
    );
};

export default SignInPage;
