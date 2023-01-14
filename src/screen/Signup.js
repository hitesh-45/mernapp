import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", Geolocation: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, 
            location:credentials.geolocation }))
        const response = await fetch("http://localhost:5000/api/Createuser",
            {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name:credentials.name, email:credentials.email, password:credentials.password, 
                    location:credentials.geolocation })
            })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            alert('enter valid credentials')
        }
        
    }
    const onchange= (event) => {
     setcredentials({ ...credentials, [event.target.name]:event.target.value })
 }
    return (
        <>
            < div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' defaultValue={credentials.name} onChange=
                        {onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" defaultValue={credentials.email} onChange={onchange}/>
                        {/* <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' defaultValue={credentials.password}
                            onChange={onchange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' defaultValue={credentials.Geolocation} onChange={onchange} id="exampleInputPassword2" />
                    </div>
                    <button type="submit" className=" m-3 btn btn-primary">Submit</button>
                    <Link to="/Login " className="m-3 btn btn-danger" >Already a user</Link>
                </form>
            </div>
        </>
    )
}
