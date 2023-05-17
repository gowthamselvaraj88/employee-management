import React from 'react'
import { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/EditUserForm";


function AppUser() {

 

const usersData = [
    //  {id:1,name:" ",mailid:" ",age:" "}
];

const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

    const [users,setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:'',mailid:'',age:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,mailid:user.mailid,age:user.age});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

    

  return (
  <>
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit User</h2>
                <EditUserForm 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>):(<div>
                <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
          </div>) 
        }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
    </>
  );
}

export default AppUser;
