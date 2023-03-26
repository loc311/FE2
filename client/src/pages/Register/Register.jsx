import React from 'react'
import { Link } from 'react-router-dom';
import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>ELEC</h1>
                    <p>Nơi mọi thứ đều có thể.</p>
                    <span>Bạn đã có tài khoản?</span>
                    <Link to="/login">
                        <button>Đăng Nhập</button>
                    </Link>
                </div>

                <div className="right">
                    <h1>Chào mừng bạn !</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Đăng kí</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
