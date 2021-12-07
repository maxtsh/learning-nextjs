import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    background-color: #1ba39c;

    &-title {
      font-size: 300%;
      font-weight: 700;
      color: #fff;
    }
  }

  .box {
    display: flex;
    position: absolute;
    top: 100px;
    left: 50%;
    padding: 1rem;
    transform: translate(-50%, 0);
    background-color: #252525;
    width: 600px;
    height: 220px;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0.5;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 4px solid #fff;
      }
    }

    &-info {
      flex: 0.5;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      &-date {
        display: flex;
        align-items: center;

        &-str {
          margin-left: 0.5rem;
          color: #fff;
        }
      }

      &-address {
        display: flex;
        align-items: center;

        &-str {
          margin-left: 0.5rem;
          color: #fff;
        }
      }
    }
  }

  .description {
    display: flex;
    justify-content: center;
    margin-top: 300px;
  }
`;
