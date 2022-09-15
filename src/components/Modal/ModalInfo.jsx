import React, { useState } from "react";

//styles
import * as S from "./styles";

//api
import api from "../../services/api";

//components
import ModalError from "../Modal/ModalError/ModalError";
import ModalSuccess from "../Modal/ModalSuccess/ModalSuccess";

function ModalInfo({ valueNameUser }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [infoBasics, setInfoBasics] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [busca, setBusca] = useState("");

  const [itensPerPage, setItensPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(repositories.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = repositories.slice(startIndex, endIndex);

  async function visualizarInfo() {
    setIsOpen(true);

    await api
      .get(`${valueNameUser}`)
      .then((res) => {
        console.log(setInfoBasics(res.data));
      })
      .catch((err) => console.log(err));

    await api
      .get(`${valueNameUser}/repos`)
      .then((res) => {
        const repositories = res.data;

        const repositoriesName = [];

        repositories.forEach((i) => {
          repositoriesName.push(i.name);
        });

        localStorage.setItem(
          "RepositoriesName",
          JSON.stringify(repositoriesName)
        );
      })
      .catch((err) => console.log(err));

    let repositoriesName = localStorage.getItem("RepositoriesName");

    if (repositoriesName) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const repositoriesFilter = currentItens.filter((r) =>
    r.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <S.Button onClick={visualizarInfo}>Visualizar</S.Button>

      {infoBasics === "" ? (
        <ModalError modalIsOpen={modalIsOpen} closeModal={closeModal} />
      ) : (
        <ModalSuccess
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          infoBasics={infoBasics}
          busca={busca}
          setBusca={setBusca}
          valueNameUser={valueNameUser}
          repositoriesFilter={repositoriesFilter}
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default ModalInfo;
