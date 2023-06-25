import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const [checktype, setChecktype]=useState('password')
    const [showdata, setShowdata]=useState('show')
    
    const userNameChange=(e)=>{
        setUsername(e.target.value);
    }

    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleLogin=()=>{
        const user={
            username,
            password
        };

        localStorage.setItem('user', JSON.stringify(user))
        alert('Login Successful!')
    }

    const handlePassword=(e)=>{
      const gettype=e.target.value;
      if(gettype==='password')
      {
        setChecktype('text')
        setShowdata('Hide')
      }else{
        setChecktype('password')
        setShowdata('Show')
      }
    }

    
  return (
    <div className="body">
      <div className='liBox1'>
    <div className='liBox'>
      <h1>Login Page</h1>
      <form>
        <div className='unBox'>
        <lable>UserName</lable>
        <div>
        <input type='text' value={username} onChange={userNameChange} />
        </div>
        
        </div>
        <div className='pwBox'>
            <lable>Password</lable>
            <div>
            <input type={checktype} value={password} onChange={passwordChange} />
            </div>
            <div>
              <button type='button' className='button lg'value={checktype} onClick={(e)=>handlePassword(e)} >{showdata}</button>
            </div>
        </div>
        <button className='lgbtn' type='button' onClick={handleLogin}>Login</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default LoginPage;
