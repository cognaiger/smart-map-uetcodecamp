/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";
export const Register = () => {
  const [studentID, setStudentID] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e)  {
    e.preventDefault();

    // Send Student data to the server for registration
    try {
      await axios
        .post("http://localhost:8000/register", {
          studentID,
          fullname,
          phoneNum,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exist");
          } else if (res.data == "notexist") {
            history("/home", { state: { id: studentID } });
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

        <label htmlFor="phoneNum">Số điện thoại</label>
        <input
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          type="text"
          placeholder="SDT"
          id="phoneNum"
          name="phoneNum"
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
