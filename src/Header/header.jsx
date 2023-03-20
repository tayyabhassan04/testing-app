import { useState} from "react";
function Input() {
    let [user, setUser] = useState({
        username: '',
        password: '',
        test:''
    });
   
    const handleInput = ({ target: { value, name } }) => {
        setUser({ ...user, [name]: value });

    }
    return (
     
        <div>
            <input className="my-5" name="username" type="text" value={user.username} onChange={handleInput } />
            <input className="my-5" name="password" type="password" value={user.password} onChange={handleInput} />
            <input className="my-5" name="test"type="password" value={user.test} onChange={handleInput } />
            <p>{JSON.stringify(user) }</p>
        </div>
        
 )
}
export default Input;