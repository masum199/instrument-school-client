import axios from "axios";

export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        role: "Student"
    }

    axios.put(`http://localhost:5000/users/${user?.email}`,currentUser) 
    .then(data =>{
        console.log(data.data)
    })
}