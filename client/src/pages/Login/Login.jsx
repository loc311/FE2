import React from 'react';
import { Link } from 'react-router-dom';
import "./login.scss";

const Login = () => {


  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios.post('/api/auth/login', {
  //     username: username,
  //     password: password
  //   })
  //   .then(response => {
  //     localStorage.setItem('accessToken', response.data.accessToken);
  //     // Redirect to protected page
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // };
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello!</h1>
            <p>lasnckjcakjcn</p>
            <span>Bạn không có tài khoản ?</span>
            <Link to="/register">
                        <button>Đăng Kí</button>
                    </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='User' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
