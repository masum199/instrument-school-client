
export const saveUser = user => {
    const currentUser = {
        email: user.email,
    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
    }) 
    .then(response => response.json())
    .then(data => console.log(data))
    
}