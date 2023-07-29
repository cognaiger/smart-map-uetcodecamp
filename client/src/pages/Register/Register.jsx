/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
export const Register = () => {
  const [studentID, setStudentID] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  async function submit(e)  {
    e.preventDefault();

    // Send Student data to the server for registration
    try {
      axios
        .post("http://localhost:8000/register", {
          studentID,
          fullname,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exist");
          } else if (res.data == "notexist") {
            navigate("/login")
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" action="POST">
        <label htmlFor="id">Mã sinh viên</label>
        <input
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          type="number"
          placeholder="Mã sinh viên"
          id="id"
          name="id"
        />

        <label htmlFor="name">Họ và tên</label>
        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          placeholder="Họ tên"
          id="name"
          name="name"
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

      <Link to="/">Đã có tài khoản?</Link>
    </div>
  );
};
