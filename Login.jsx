import react, { useState } from "react";
import "./../components/Login.css";




const Login = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();




    const submitHandler = (e) => {
        e.preventDefault();

        if (password == " " && email == " ") {
            alert("Email And PAssword Cannot be Blank")
        }
        else if (password.length < 8) {
            alert("The password be greater than 8 digits");
        }
        else {
            alert("data subbmitted successfullly");
            console.log(email)
            console.log(password);

        }

    }

    return (
        <>
            <div className="main">
                <div className="parentBox">
                    <div className="subMain">
                        <div className="bgContainer">

                        </div>
                        <div className="login">
                            <div className="heading">
                                <h1>welcome</h1>
                                <h5>Login into your account to continue</h5>
                            </div>
                            <div className="form">
                                <form onSubmit={submitHandler}>
                                    <input type="mail" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} required />
                                    <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                                    <button type="submit" class="btn btn-outline-dark w-100">Login</button>
                                </form>
                            </div>
                            <h6>don't have an account ? <a href="#">signUp</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;