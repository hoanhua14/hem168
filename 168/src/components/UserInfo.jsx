import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userInfoSlice";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCurrentDateTimeLocal = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const localISOTime = new Date(now.getTime() - offset * 60000)
      .toISOString()
      .slice(0, 16);
    return localISOTime;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, add, phone, deliveryTime, note }));
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
      <label>
        Delivery Time:
        <input
          type="datetime-local"
          min={getCurrentDateTimeLocal()}
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Note:
        <input value={note} onChange={(e) => setNote(e.target.value)} />
      </label>
      <br />
      <button type="submit">checkout</button>
    </form>
  );
}
