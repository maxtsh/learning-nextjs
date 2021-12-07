import React, { useState, useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import { nanoid } from "nanoid";
import { Container } from "./styles";
import type { Comment } from "Types/Comments";

interface Comments {
  loading: boolean;
  data: Comment[] | null;
  error: boolean | string;
}

const Comments: React.FC = () => {
  const { query }: NextRouter = useRouter();
  const eventId = query.id || "";
  const [comments, setComments] = useState<Comments>({
    loading: false,
    data: null,
    error: false,
  });
  const [form, setForm] = useState<Comment>({
    id: nanoid(),
    eventId: eventId.toString(),
    name: "",
    email: "",
    text: "",
  });

  useEffect(() => {
    (async function getData() {
      setComments({ loading: true, error: false, data: null });
      try {
        const res = await fetch(`/api/comments/${eventId}`, {
          method: "GET",
        });
        const comments = await res.json();
        setComments({ loading: false, error: false, data: comments.data });
      } catch (err: any) {
        setComments({
          loading: false,
          error: err.response.message,
          data: null,
        });
      }
    })();
  }, [eventId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(form),
      });
      setComments({
        ...comments,
        data: comments.data ? [...comments.data, form] : [form],
      });
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h3 className="title">Comments</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="name">Your name</label>
            <input
              onChange={handleChange}
              value={form.name}
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Your email</label>
            <input
              onChange={handleChange}
              value={form.email}
              type="email"
              id="email"
              name="email"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control full">
            <label htmlFor="text">Message</label>
            <textarea
              onChange={handleChange}
              value={form.text}
              name="text"
              id="text"
              cols={40}
              rows={6}
            ></textarea>
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <div className="comments">
        {comments.loading && <h1>Loading...</h1>}
        {comments?.data?.map((c: Comment) => (
          <div key={c.id} className="comment">
            <div className="comment-header">
              <h4 className="comment-name">{c.name}</h4>
              <h4 className="comment-name">{c.email}</h4>
            </div>
            <p className="comment-message">{c.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Comments;
