import React, { useState } from 'react';
import FormValidation from './FormValidation';

function Form() {

    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Authenticted", { email, password });
    }
    return (
        <div className="container">
            <h2>Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="uname">Username:</label>
                    <input type="text" className="form-control" valus={email} onChange={e=>setEmail(e.target.value)} id="uname" placeholder="Enter username" name="uname" required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} id="pwd" placeholder="Enter password" name="pswd" required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" required /> I agree on blabla.
                    <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;