import { useState } from "react";

 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',mailid:'',age:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
   

       setUser({...user,[name]:value})
    }
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if(!user.name||!user.mailid||!user.age) return;
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        <label>Name</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
        <label>Mail ID</label>
        <input type="text" onChange={handleInputChange} name="mailid" value={user.mailid} />
        <label>Age</label>
        <input type="text" onChange={handleInputChange} name="age" value={user.age} />
        <button>Add new user</button>
      </form>
    )
 }

export default AddUserForm;