import styled from "styled-components";

interface Props {
  bgColor?: string;
  textColor?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  padding: 0 3rem;
  background-color: ${(p) => p.bgColor};
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  .title {
    font-size: 160%;
    font-weight: 700;
    color: ${(p) => p.textColor};
  }

  .message {
    font-size: 120%;
    font-weight: 400;
    color: ${(p) => p.textColor};
  }
`;
