import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useNavigate();
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/login", {
          studentID,
          password,
        })
        .then((res) => {
          if (res.data === "success") {
            history("/", { state: { id: studentID } });
          } else if (res.data === "not exist") {
            alert("User has not registed");
          } else if (res.data === "the password is incorrect") {
            alert("the password is incorrect");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
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
