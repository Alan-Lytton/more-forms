import React, {useState} from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [fNameError, setFNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");


    const createUser = (u) => {
        u.preventDefault();
    };
    const fNameProcess = (u) => {
        setFirstName(u.target.value);
        if (u.target.value.length < 2 && u.target.value.length != 0){
            setFNameError("First Name must be at least 2 characters long.")
        }else{
            setFNameError("");
        }

    }
    const lNameProcess = (u) => {
        setLastName(u.target.value);
        if (u.target.value.length < 2 && u.target.value.length != 0) {
            setLNameError("Last Name must be at least 2 characters long.")
        } else {
            setLNameError("");
        }
    }
        const emailProcess = (u) => {
            setEmail(u.target.value);
            if (u.target.value.length < 5 && u.target.value.length != 0) {
                setEmailError("Email must be at least 5 characters long.")
            } else {
                setEmailError("");
            }
        }
        const passwordProcess = (u) => {
            setPassword(u.target.value);
            if (u.target.value.length < 8 && u.target.value.length != 0) {
                setPasswordError("Password must be at least 8 characters long.")
            } else {
                setPasswordError("");
            }
        }
        const confirmProcess = (u) => {
            const setValue = u.target.value;
            setConfirm(setValue);
            if (password !== setValue && setValue.length !=0) {
                setConfirmError("Passwords must match.")
            } else {
                setConfirmError("");
            }
        }
    return(
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ fNameProcess }/>
                    {
                        fNameError ?
                            <p>{ fNameError }</p>:
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ lNameProcess }/>
                    {
                        lNameError ?
                            <p>{ lNameError }</p>:
                            ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={ emailProcess }/>
                    {
                        emailError ?
                            <p>{ emailError }</p>:
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ passwordProcess }/>
                    {
                        passwordError ?
                            <p>{ passwordError }</p>:
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ confirmProcess }/>
                    {
                        confirmError ?
                            <p>{confirmError}</p>:
                            ''
                    }
                </div>
            </form>
            <div>
                <h3>Your Form Data:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    );
};

export default Form;