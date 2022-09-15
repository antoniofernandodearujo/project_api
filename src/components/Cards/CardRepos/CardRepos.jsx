import React from "react";

//style
import * as S from "./styles";

function CardRepos({ title }) {
  return (
    <>
      <S.Container>
        <S.Top>
          <S.Title>{title}</S.Title>
        </S.Top>
      </S.Container>
    </>
  );
}

export default CardRepos;
