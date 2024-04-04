import React, { useState } from 'react'

export default function Form() {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const postdata=(e)=>{
        e.preventDefault()
        console.log("working")
        console.log(email+"password:"+password)
    }
    return (
        <div>
            <form onClick={postdata}>
                <input type='email' value={email} onChange={(e)=>{
                    setemail(e.target.value)}}/>
                <input type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <button type='submit'>sumbit</button>
            </form>
        </div>
    )
}
