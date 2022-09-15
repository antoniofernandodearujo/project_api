import React from "react";

//componente Modal do react
import Modal from "react-modal";

//styles
import * as S from "../styles";
import "../style.modal.css";

//icon
import { FaGithub } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

//components
import CardInfo from "../../Cards/CardInfo/CardInfo";
import CardRepos from "../../Cards/CardRepos/CardRepos";
import PaginationComponent from "../../PaginationComponent/PaginationComponent";

Modal.setAppElement("#root");

function ModalSuccess({
  modalIsOpen,
  closeModal,
  infoBasics,
  busca,
  setBusca,
  valueNameUser,
  repositoriesFilter,
  pages,
  currentPage,
  setCurrentPage
}) {
  const URL = "https://github.com";
  return (
    <Modal
      className="modalResponsivoSuccess"
      closeTimeoutMS={200}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="Overlay"
      contentLabel="Modal Info"
    >
      <S.ContainerButtonClose>
        <S.ButtonClose onClick={closeModal}>
          <IoCloseSharp />
        </S.ButtonClose>
      </S.ContainerButtonClose>

      <S.ContainerCardInfo>
        <CardInfo
          name={infoBasics.name}
          bio={infoBasics.bio}
          login={infoBasics.login}
          img={infoBasics.avatar_url}
          company={infoBasics.company}
        />
      </S.ContainerCardInfo>

      <S.ContainerSearch>
        <S.InputPesquisa
          type="text"
          placeholder="Digite o nome do repositório ou procure por página..."
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        />
      </S.ContainerSearch>

      <S.ContainerMessage>
        <S.MessageSearch>
          <FaGithub />
          {valueNameUser}:{" "}
        </S.MessageSearch>
      </S.ContainerMessage>

      <S.ContainerCardRepos>
        {repositoriesFilter.map((r, i) => (
          <a href={`${URL}/${valueNameUser}/${r}`} target="_blank" key={i}>
            <CardRepos title={r} nameUser={valueNameUser} />
          </a>
        ))}

        <S.ContainerButtonPagination>
          <PaginationComponent
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </S.ContainerButtonPagination>
      </S.ContainerCardRepos>
    </Modal>
  );
}

export default ModalSuccess;
