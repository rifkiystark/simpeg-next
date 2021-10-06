import Header from "../../components/head";
import Image from 'next/image';
import Footer from '../../components/footer/index';
import { useState } from "react";
import { useRouter } from "next/dist/client/router";


const Login = () => {
    const [type, setType] = useState("password");
    const togglePassword = () => {
        if (type == "password") {
            setType("text")
        } else {
            setType("password");
        }
    }

    const router = useRouter();
    return (
        <>
            <Header />
            <body className="antialiased border-top-wide border-primary d-flex flex-column">
                <div className="page page-center">
                    <div className="container-tight py-4">
                        <div className="text-center mb-4">
                            <a href="."><Image src="/static/tabler/static/logo.svg" height="48" width="128" alt="" /></a>
                        </div>
                        <div className="card card-md" method="post" autoComplete="on">
                            
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Login to your account</h2>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" name="email" className="form-control" placeholder="Enter email" />

                                    {/* @error('email')
                        <div className="invalid-feedback">{{ $message }}</div>

                        @enderror */}


                                </div>
                                <div className="mb-2">
                                    {/* <label className="form-label">
                            Password
                            <!-- <span className="form-label-description">
                                <a href="./forgot-password.html">I forgot password</a>
                            </span> -->
                        </label> */}
                                    <div className="input-group input-group-flat">
                                        <input type={type} id="password" className="form-control" name="password" placeholder="Password" autoComplete="off" />
                                        <span className="input-group-text">
                                            <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip" onClick={() => togglePassword()}>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <circle cx="12" cy="12" r="2" />
                                                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>

                                    {/* @error('password')
                        <div className="invalid-feedback">{{ $message }}</div>

                        @enderror */}
                                </div>
                                <div className="mb-2">
                                    <label className="form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <span className="form-check-label">Remember me on this device</span>
                                    </label>
                                </div>
                                <div className="form-footer">
                                    <button onClick={() => router.push('/dashboard')} className="btn btn-primary w-100">Sign in</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </body>
            <Footer />
        </>
    );
}





export default Login