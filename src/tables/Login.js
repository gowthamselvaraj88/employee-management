import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';
import { useForm } from 'react-hook-form';

const Login = () => {

  const [right, setRight] = useState(false);
  const [name, setName] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setRight(true);
    navigate('/App');
    console.log('handleSubmit');
  };


  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value);
  };



  return (
    <div>
      <form className='formbox' onSubmit={handleSubmit(onSubmit)} >
        <h1 className='heading'>
          Login here...
        </h1>
        <lable className='textlable'>Mail ID:
          <input {...register("MailID",
            {
              required: false,
              maxLength: 15,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            })}
            className='mailbox' type='text' name='mail' onChange={handleOnChange}></input>
        </lable>
        {errors?.MailID?.type === "required" && <p>This field is required</p>}
        {errors?.MailID?.type === "maxLength" && (<p>First name cannot exceed 15 characters</p>)}
        {errors?.MailID?.type === "pattern" && (<p>Mail Address only</p>)}
        <lable className='textlable'>Password:
          <input
            {...register("Password", {
              maxLength: 8,
              pattern: /^[A-Z0-9]+[A-Z0-9]+\.[A-Z]{2,4}/i
            })}
            className='mailbox' type='password' name='password' onChange={handleOnChange}></input>
        </lable>
        {errors?.MailID?.type === "required" && <p>This field is required</p>}
        {errors?.Password?.type === "maxLength" && (<p>First name cannot exceed 8 characters</p>)}
        {errors?.Password?.type === "pattern" && (<p>Valuable Password only</p>)}
        <button type='sumbit'
        >Submit</button>
      </form>
    </div>
  )
}

export default Login;