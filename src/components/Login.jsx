import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate()
    const [student,setStudent]=useState({})
    
    useEffect(()=>{
        console.log(student)
    },[student])
    
    function handleChange(event){
        setStudent({...student,[event.target.name]:event.target.value})
    }

    function handleSubmit(){
        navigate('/admin')
    }
    
    return(
        <div>
            <div className="login">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username <br />
                    <input type="text" name="userName" value={student.userName || ""} required onChange={handleChange}/>
                    </label>
                    <br />
                    <label>Password <br />
                    <input type="text" name="password" value={student.password || ""} required onChange={handleChange}/>
                    </label><br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;