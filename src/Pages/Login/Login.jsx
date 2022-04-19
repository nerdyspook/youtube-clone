import React from "react";
import "./Login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
                    alt="logo"
                />
                <button>Login with Google</button>
                <p>This project is using Youtube API</p>
            </div>
        </div>
    );
};

export default Login;
