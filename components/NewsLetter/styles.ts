import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 120%;
    font-weight: 700;
    margin: 0.5rem 0;
  }

  .form {
    width: 700px;

    &-input-group {
      display: flex;

      #email {
        width: 600px;
        padding: 0.5rem;
        border: 1px solid whitesmoke;
        outline: none;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: #fff;
      }

      .submit-btn {
        width: 100px;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: 100%;
        padding: 0.65rem 1.5rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        color: #fff;
        background-color: #1ba39c;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
