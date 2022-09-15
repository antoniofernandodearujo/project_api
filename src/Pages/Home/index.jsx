import React, { useState } from "react";

//Styles
import * as S from "./styles";

//img
import IMG from "../../assets/R.png";

import ModalInfo from "../../components/Modal/ModalInfo";

function Home() {
  const [nameUser, setNameUser] = useState();

  return (
    <>
      <S.Container>
        <S.Box>
          <S.TopSide>
            <S.Imagem src={IMG} />
          </S.TopSide>

          <S.Message>Seja Bem-Vindo(a)</S.Message>

          <S.BottomSide>
            <S.Input
              type="text"
              placeholder="Digite o seu usuário..."
              value={nameUser}
              onChange={(ev) => setNameUser(ev.target.value)}
            />

            <ModalInfo valueNameUser={nameUser} />
          </S.BottomSide>
        </S.Box>
      </S.Container>
    </>
  );
}

export default Home;
