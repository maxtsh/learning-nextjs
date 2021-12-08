import React, { useState, useContext } from "react";
import NotifContext from "store/NotifContext";
import { Container } from "./styles";

const NewsLetter: React.FC = () => {
  const [form, setForm] = useState<string>("");
  const { showNotification } = useContext(NotifContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showNotification({
      status: "pending",
      message: "Registering for newsletter...",
      title: "Signingup...",
    });
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ email: form }),
      });
      const response = await res.json();
      showNotification({
        status: "success",
        message: response?.message || "",
        title: "Success",
      });
    } catch (err: any) {
      showNotification({
        status: "error",
        message: "Something went wrong!",
        title: "ERROR",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value);
  };

  return (
    <Container>
      <h4 className="title">Signup to stay updated!</h4>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input-group">
          <input
            value={form}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
          />
          <button className="submit-btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </Container>
  );
};

export default NewsLetter;
