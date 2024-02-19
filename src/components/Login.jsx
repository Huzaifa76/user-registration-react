import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { logInSchema } from "../schemas";

const Login = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: logInSchema,
        onSubmit:async (values, action) => {
            // console.log(values);
            try{
                const res= await fetch("https://registerformreact-default-rtdb.firebaseio.com/userLoginInfo.json", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, 
                        body: JSON.stringify(values)
                });
                if (res.ok) {
                    alert("Data stored successfully");
                    action.resetForm();
                } else {
                    alert("Error saving data");
                }
            }
            catch(error){
                console.error("Error:", error);
            }
        }
    })

    return (
        <Wrapper>
            <div className="container">
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-left">
                            <h1 className="modal-title">Welcome!</h1>
                            <p className="modal-desc">
                                Fill the form to Sign In
                            </p>
                            <form onSubmit={handleSubmit} method="post">
                                <div className="input-block">
                                    <label htmlFor="email" className="input-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        autoComplete="off"
                                        name="email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email && <p>{errors.email}</p>}
                                </div>
                                <div className="input-block">
                                    <label htmlFor="password" className="input-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password && <p>{errors.password}</p>}
                                </div>
                                <div className="modal-buttons">
                                    <button className="input-button" type="submit">
                                        Login
                                    </button>
                                </div>
                            </form>
                            <p className="sign-up">
                                Create an account? <Link to="/">Sign Up now</Link>
                            </p>
                        </div>
                        <div className="modal-right">
                            <img
                                src="https://images.pexels.com/photos/7437499/pexels-photo-7437499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #CD5C5C;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #CD5C5C;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #F08080;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #CD5C5C;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #CD5C5C;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }
  .input-block p{
    color: red;
    font-size: 13px;
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Login;