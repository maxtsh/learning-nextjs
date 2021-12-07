import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 120%;
    font-weight: 700;
    margin: 0.5rem 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 700px;
    padding: 1rem;
    border-radius: 4px;
    background-color: #1ba39c;

    &-group {
      margin-top: 0.5rem;
      display: flex;
      justify-content: space-between;

      .form-control {
        display: flex;
        flex-direction: column;
        width: 330px;

        &.full {
          width: 100%;
        }

        label {
          color: #fff;
          margin: 0.5rem 0;
        }

        input {
          padding: 0.5rem;
          border: 1px solid whitesmoke;
          outline: none;
          border-radius: 4px;
          background-color: #fff;
        }

        textarea {
          padding: 0.5rem;
          border: 1px solid whitesmoke;
          outline: none;
          border-radius: 4px;
          background-color: #fff;
        }
      }
    }

    .submit-btn {
      margin-top: 1rem;
      width: 100px;
      outline: none;
      border: 1px solid #1ba39c;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 400;
      font-size: 100%;
      padding: 0.65rem 1.5rem;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      color: #1ba39c;
      background-color: #ffffff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
