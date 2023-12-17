import React, { useState } from 'react'

const Login = () => {
    let [fristName, setFristName]=useState("");
    let [lastName,setLastName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [webName,setWebName]=useState("");
    return (
        <div>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <div class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Enter Frist Name" value={fristName} onChange={(e)=>{
                                   setFristName(e.target.value)
                                } }/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Enter Last Name" value={lastName} onChange={(e)=>{
                                    setLastName(e.target.value)
                                }} />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-envelope"></i>
                                <input type="email" class="login__input" placeholder="Enter Email" value={email} onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Enter Pasword" value={password} onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-check"></i>
                                <input type="text" class="login__input" placeholder="Enter Webname" value={webName} onChange={(e)=>{
                                    setWebName(e.target.value)
                                }}/>
                            </div>
                            <button class="button login__submit" onClick={()=>{
                                console.log(fristName,lastName,email,password,webName);
                            }}>
                                <span class="button__text">Log In Now</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="social-login">
                            <h3>log in via</h3>
                            <div class="social-icons">
                                <a href="#" class="social-login__icon fab fa-instagram"></a>
                                <a href="#" class="social-login__icon fab fa-facebook"></a>
                                <a href="#" class="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
