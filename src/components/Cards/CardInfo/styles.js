import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 180px;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 170px;
  height: 170px;

  border-radius: 50%;

  @media (max-width: 500px) {
    margin-top: -5em;
  }
`;

export const Imagem = styled.img`
  display: flex;
  justify-content: center;

  width: 170px;
  height: 170px;

  border-radius: 50%;

  @media (max-width: 500px) {
    width: 140px;
    height: 140px;

    margin-left: 4em;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 400px;
  height: 170px;

  @media (max-width: 500px) {
    margin-top: -5em;
  }
`;

export const Name = styled.h2`
  display: flex;
  align-self: center;

  margin-left: 0.4em;

  color: #fff;

  @media (max-width: 500px) {
    font-size: 15.5pt;
    margin-left: 1.6em;
    margin-top: 2em;
  }
`;

export const Bio = styled.label`
  display: flex;
  justify-content: center;

  font-size: 14pt;

  margin-top: -0.5em;
  margin-bottom: 1.2em;

  color: #fff;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const BottomSide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Label = styled.label`
  font-size: 12.5pt;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: #fff;
`;
