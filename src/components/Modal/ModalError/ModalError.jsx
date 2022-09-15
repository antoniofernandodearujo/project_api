import React from "react";

//componente Modal do react
import Modal from "react-modal";

//styles
import * as S from "../styles";
import "../style.modal.css";

//icon
import { IoCloseSharp } from "react-icons/io5";

Modal.setAppElement("#root");

function ModalError({ modalIsOpen, closeModal }) {
  return (
    <Modal
      className="modalResponsivoError"
      closeTimeoutMS={100}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="Overlay"
      contentLabel="Modal Error"
    >
      <S.ContainerButtonClose>
        <S.ButtonClose onClick={closeModal}>
          <IoCloseSharp />
        </S.ButtonClose>
      </S.ContainerButtonClose>

      <S.ContainerMessageNotFound>
        <S.MessageNotFound>
          Usuário não encontrado / Não existe
        </S.MessageNotFound>
        <S.Message>
          Por favor, procure novamente pelo nome do usuário.
        </S.Message>
      </S.ContainerMessageNotFound>
    </Modal>
  );
}

export default ModalError;
