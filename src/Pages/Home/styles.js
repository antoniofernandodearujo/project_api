import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #1c2035;

  width: 500px;
  height: 350px;

  border-radius: 5px;

  box-shadow: 8px 8px;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  @media (max-width: 500px) {
    width: 350px;
    height: 260px;

    box-shadow: 5px 5px;
  }
`;

export const TopSide = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  margin-top: 0.4em;
  margin-bottom: 2em;
`;

export const Imagem = styled.img`
  display: flex;

  width: 350px;
  height: 200px;

  @media (max-width: 500px) {
    width: 260px;
    height: 150px;
  }
`;

export const Message = styled.h1`
  text-align: center;
  font-weight: bold;

  margin-top: -0.4em;

  @media (max-width: 500px) {
    font-size: 22pt;
    margin-top: -0.7em;
    margin-bottom: 0.4em;
  }
`;

export const BottomSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 8px;

  margin-bottom: 0.4em;
`;

export const Input = styled.input`
  display: flex;

  width: 80%;
  height: 30px;
  border: none;
  border-radius: 5px;

  margin-right: 2px;

  color: #000;
  font-weight: bold;

  background-color: #c1c1c1;

  @media (max-width: 500px) {
    width: 70%;
    height: 25px;
    font-size: 9pt;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;

  width: 15%;
  height: 35px;

  cursor: pointer;

  color: #fff;
  font-weight: bold;

  background-color: #081241;

  transition: all ease-in 0.3s;

  &:hover {
    background-color: #1e3ab6;
  }
`;
