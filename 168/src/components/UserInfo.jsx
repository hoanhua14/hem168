import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userInfoSlice";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, add, phone }));
    navigate("/summary");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Address:
        <input value={add} onChange={(e) => setAdd(e.target.value)} required />
      </label>
      <br />
      <label>
        Phone:
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">checkout</button>
    </form>
  );
}
