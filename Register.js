import React, { useState } from "react";

function Login() {
    const [username,setUsername] = useState(0);
    const [email,setEmail] = useState(0);

    const handleLogin = async (e) =>
    e.preventDefault();

    const response =  fetch ('http://localhost:7000/users/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, email}),
});

if (response.ok) {

} else{

};

return(
    <div> 
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
           <input 
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    </div>
);
}
export default Login 