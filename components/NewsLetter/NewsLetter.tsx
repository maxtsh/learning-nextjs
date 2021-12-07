import React, { useState } from "react";
import { Container } from "./styles";

const NewsLetter: React.FC = () => {
  const [form, setForm] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ email: form }),
      });
    } catch (err: any) {
      console.log(err);
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
