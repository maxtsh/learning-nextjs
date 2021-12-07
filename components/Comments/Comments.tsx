import { Container } from "./styles";
import type { Comment } from "Types/Comments";

const Comments: React.FC = () => {
  return (
    <Container>
      <h3 className="title">Comments</h3>
      <form className="form">
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control full">
            <label htmlFor="text">Message</label>
            <textarea name="text" id="text" cols={40} rows={6}></textarea>
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Comments;
