import { useEffect, useState } from "react"

function EditUserForm(props) {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault()
                if (!user.name || !user.mailid)
                    return
                props.updateUser(user.id, user)
            } }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            <label>Mail ID</label>
            <input type="text" onChange={handleInputChange} name="mailid" value={user.mailid} />
            <label>Age</label>
            <input type="number" onChange={handleInputChange} name="age" value={user.age} />
            <button>Update user</button>
            <button className="button muted-button" onClick={() => {
                props.setEditing(false)
            } }>Cancel</button>
        </form>
    )
}

export default EditUserForm;