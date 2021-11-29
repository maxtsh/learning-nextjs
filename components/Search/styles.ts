import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 700px;
  height: 50px;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  .form-controls {
    display: flex;
    width: 100%;
    flex: 0.85;

    .form-control {
      flex: 0.5;
      margin: 0 0.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      select {
        width: 80%;
        height: 30px;
        border-radius: 8px;
      }
    }
  }

  .form-button {
    flex: 0.15;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 100%;
    padding: 0.25rem 1rem;
    color: #fff;
    background-color: #1ba39c;
    border-radius: 4px;
    cursor: pointer;
  }
`;
