import axios from "axios";

export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        role: "Student"
    }

    axios.put(`https://school-server-side.vercel.app/users/${user?.email}`, currentUser)
        .then(data => {
            console.log(data.data)
        })
}