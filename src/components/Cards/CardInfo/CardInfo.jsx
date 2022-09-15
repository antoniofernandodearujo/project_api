import React from "react";

import { FaGithub, FaRegBuilding } from "react-icons/fa";

import * as S from "./styles";

function CardInfo({ name, bio, login, company, img }) {
  return (
    <>
      <S.Container>
        <S.LeftSide>
          <S.Imagem src={img} alt="foto-perfil" />
        </S.LeftSide>
        <S.RightSide>
          <S.Name>{name}</S.Name>
          <S.Bio>"{bio}"</S.Bio>

          <S.BottomSide>
            <S.Label>
              <FaGithub /> {login}
            </S.Label>
            <S.Label>
              <FaRegBuilding /> {company}
            </S.Label>
          </S.BottomSide>
        </S.RightSide>
      </S.Container>
    </>
  );
}

export default CardInfo;
