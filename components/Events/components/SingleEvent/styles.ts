import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  width: 700px;
  height: 250px;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 8px;
  position: relative;

  .image {
    flex: 0.35;
    height: 100%;

    &-tag {
      width: 100%;
      height: 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    flex: 0.65;
    padding: 1rem;

    &-title {
      margin-bottom: 2rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 700;
      font-size: 140%;
    }

    &-date {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      &-icon {
        margin-right: 0.5rem;
      }

      &-datetime {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 120%;
        font-weight: 700;
        color: #6c757d;
      }
    }

    &-address {
      display: flex;
      align-items: center;

      &-icon {
        margin-right: 0.5rem;
      }

      &-address {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 100%;
        font-weight: 700;
        color: #6c757d;
      }
    }

    &-button {
      position: absolute;
      bottom: 30px;
      right: 15px;

      a {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: 100%;
        padding: 0.65rem 1.5rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        text-decoration: none;
        color: #fff;
        background-color: #1ba39c;
        border-radius: 4px;
      }
    }
  }
`;
