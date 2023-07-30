import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/authContext";


const Login = () => {

  const { login } = useContext(AuthContext);

  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    await login(studentID, password);
  }

  return (
    <div className="login-container">
      <form className="login-form" action="POST">
        <label htmlFor="id">Mã sinh viên</label>
        <input
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          type="number"
          placeholder="Mã sinh viên"
          id="id"
          name="id"
        />

        <label htmlFor="pass">Mật khẩu</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />

        <input type="submit" onClick={submit} />
      </form>

      <Link to="/Register">Chưa có tài khoản? Đăng ký</Link>
    </div>
  );
};

export default Login;
