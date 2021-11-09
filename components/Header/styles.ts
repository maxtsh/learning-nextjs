import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    max-width: 1200px;
    flex: 1;

    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        a {
          text-decoration: none;
          color: #fff;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 700;
          font-size: 1.2em;
        }
      }
    }
  }
`;
