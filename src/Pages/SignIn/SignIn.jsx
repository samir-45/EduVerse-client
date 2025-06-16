import Lottie from 'lottie-react';
import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import loginLottie from '../../assets/lotties/login-lottie.json'
import UseAuth from '../../Hooks/UseAuth';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SignIn = () => {

    const { signInUser, signInWithGoogle, setUser } = UseAuth()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        // console.log(formData)
        signInUser(email, password)
            .then(result => {
                setUser(result)
                const token = result.user.accessToken;
                localStorage.setItem('token', token);
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })

    };

    // const token = user?.accessToken;

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result)
                setUser(result)
                const token = result.user.accessToken;
                localStorage.setItem('token', token);
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [showPassword, setShowPassword] = useState(true);

    return (

        <div className=" min-h-screen relative grid place-items-center sm:grid-cols-3  items-center bg-gray-100 px-4">
            <Link
                to="/"
                className=" absolute top-5 sm:top-10 left-5 sm:left-10 inline-block mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            >
                <div className='flex items-center'><ArrowLeft /><p>Back to Home</p></div>


            </Link>
            <div className='col-span-2 mt-8'>
                <div className="w-full max-w-md z-10 bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></span>
                        SignIn
                    </h2>
                    <p className="text-gray-500 mt-2">Signup now and get full access to our app.</p>


                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 text-black border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <label className="input bg-transparent h-12 validator w-full p-2 text-black border border-gray-300 rounded-lg outline-none ">
                            <input
                                type={showPassword ? "password" : "text"}
                                required
                                name='password'
                                placeholder="Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {/* Show/Hide Icon */}
                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="w-full text-base-300 bg-blue-600  py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                        <div className="divider invert">OR</div>
                        <button onClick={handleGoogleLogin} type='button' className="btn w-full bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            SignIn with Google
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Dont have an account?{' '}
                        <Link to="/auth/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>

            {/* Lottie Animation */}
            <div className='hidden md:block'>
                <Lottie animationData={loginLottie} loop={true}></Lottie>
            </div>

        </div>
    );
};

export default SignIn;
