import React, {useState, useContext} from "react"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"
import {Link, Navigate} from "react-router-dom"

const SignIn = () => {

    // const navigate = useNavigate()
    const [form, setForm] = useState({
        login: '',
        password: ''
    })
    const [redirect, setRedirect] = useState(false)

    const {login} = useContext(AuthContext)

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    login(response.data.token, response.data.userId, response.data.login)
                    if (response.statusText) {
                        setRedirect(true)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    if (redirect) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className="absolute bg-gradient-to-r from-gray-100 to-gray-400 h-screen">
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className='h-10'>
                                <h1 className="text-2xl font-semibold">Login to your account</h1>
                            </div>
                            <form onSubmit={e => e.preventDefault()}>
                                <div
                                    className="h-20 py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <span className='h-4'>Login</span>
                                    <div className="relative h-10">
                                        <input autoComplete="off"
                                               placeholder="Login"
                                               type="text"
                                               name="login"
                                               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                               onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="relative h-10">
                                        <span className='h-4'>Password</span>
                                        <input autoComplete="off"
                                               placeholder="Password"
                                               type="password"
                                               name="password"
                                               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                               onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="relative h-10 ">
                                        <button
                                            className="mt-10 hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"
                                            onClick={loginHandler}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                    <Link to={'/'}>
                                        <div className="relative h-10">
                                            <div
                                                className="mt-16 hover:bg-gray-300 text-gray-400 text-center font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"
                                            >
                                                HOME
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
