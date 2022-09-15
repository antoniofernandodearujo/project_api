import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 370px;
  height: 150px;

  background-color: #050a20;

  margin-right: 8px;
  margin-top: 10px;

  border-radius: 10px;

  transition: all ease-in 0.4s;

  &:hover {
    background-color: #020b2e;
  }

  @media (max-width: 500px) {
    width: 135px;
    height: 110px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: -0.8em;
`;

export const Title = styled.h2`
  margin-left: 0.5em;
  color: #fff;

  @media (max-width: 500px) {
    text-align: center;
    font-size: 14pt;
  }
`;
