import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;

  height: 35px;

  cursor: pointer;

  color: #fff;
  font-weight: bold;

  background-color: #081241;

  transition: all ease-in 0.3s;

  &:hover {
    background-color: #1e3ab6;
  }

  @media (max-width: 500px) {
    width: 25%;
    height: 30px;

    font-size: 9pt;
  }
`;

export const ContainerButtonClose = styled.div`
  float: right;
  margin-top: 0.3em;

  @media (max-width: 500px) {
    margin-top: 0.3em;
    margin-right: 0.3em;
  }
`;

export const ButtonClose = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  font-size: 20pt;

  transition: all ease-in 0.3s;

  color: #fff;

  &:hover {
    color: #c1c1c1;
  }

  @media (max-width: 500px) {
    font-size: 18pt;
  }
`;

export const ContainerCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2em;
  margin-top: 2em;

  @media (max-width: 500px) {
    margin-bottom: 1em;
    margin-top: 2em;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: -1em;
  margin-top: -0.8em;

  @media (max-width: 500px) {
    margin-bottom: -1.7em;
    margin-top: -3em;
  }
`;

export const InputPesquisa = styled.input`
  width: 80%;
  height: 30px;

  font-size: 11pt;

  border-radius: 5px;
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 3em;
  margin-left: 1em;
  margin-bottom: -1.6em;

  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const MessageSearch = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 12pt;
  font-weight: bold;
  color: #fff;
`;

export const ContainerCardRepos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  padding: 3px;

  margin-bottom: 2em;
  margin-top: 2em;

  a {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    a {
      text-decoration: none;
      font-size: 8pt;
    }
  }
`;
export const ContainerButtonPagination = styled.div`
  position: relative;

  top: 0;
  bottom: 0;

  margin-top: 0.4em;
`;

export const ContainerMessageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 6em;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 3.5em;
  }
`;

export const MessageNotFound = styled.label`
  font-weight: bold;
  font-size: 20pt;
  color: #fff;

  @media (max-width: 500px) {
    font-size: 13pt;
  }
`;

export const Message = styled.label`
  margin-top: 4px;

  font-size: 13pt;
  color: #fff;

  @media (max-width: 500px) {
    font-size: 10.5pt;
    text-align: center;
  }
`;
