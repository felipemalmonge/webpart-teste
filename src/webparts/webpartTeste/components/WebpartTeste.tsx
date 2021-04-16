import * as React from 'react';
import styles from './WebpartTeste.module.scss';
import { IWebpartTesteProps } from './IWebpartTesteProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { useState, useEffect } from 'react';
import MyModal from './modal'
import Slider from 'infinite-react-carousel';

interface IConsultaArquivo {
  Title: string,
  capa: {
    Description: string,
    Url: string
  },
  assunto: string,
  autor: string,
  tipoDocumento: string,
  editora: string,
  status: string,
  sinopse: string,
  idiomas: []
}

const WebpartTeste: React.FC<IWebpartTesteProps> = (props): JSX.Element => {

  const [arquivo, setArquivo] = useState<IConsultaArquivo[]>();
  const [results, setresults] = useState<IConsultaArquivo[]>()
  const [modal, setmodal] = useState(false)
  const [arquivoSelecionado, setArquivoSelecionado] = useState<IConsultaArquivo>();
  const [contadorPagina, setContadorPagina] = useState(1);
  const [searchText, setsearchText] = useState<string>('')

  useEffect(() => {
    sp.web.lists.getByTitle("bibliotecaArquivos").items.orderBy("ID", false).get().then(r => {
      setArquivo(r); setresults(r)
    });
  }, [])

  const openModal = (g) => {
    setArquivoSelecionado(g);
    setmodal(true);
  }

  const closeModal = () => setmodal(false);

  var settings = {
    dots: false,
    Speed: 500,
    rows: 3,
    slidesPerRow: 4,
    adaptiveHeight: true
  };

  const search = () => {
    let items = arquivo
    if (results.length > 0)
      items = results

    searchText.length == 0 ? setresults(arquivo) : filterResult()
  }

  const filterResult = () => {
    let filtered: IConsultaArquivo[]
    filtered = arquivo.filter(r => {
      return r.Title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1 || r.sinopse.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1
    })
    setresults(filtered)
  }

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="https://inparlabsdev.sharepoint.com/sites/SquadCarlos/Documentos%20Partilhados/online-news-smartphone-laptop-mockup-website-woman-reading-news-articles-mobile-phone-screen-application-home-newspaper-portal-internet@2x.png" />
      </div>
      <div className={styles.busca}>
        <h2>Faça sua busca</h2>
        <div className={styles.filtro}>
          <input value={searchText} type="text" onChange={(e) => setsearchText(e.target.value)} placeholder="Digite o nome do documento"></input>
        </div>
        <a href="javascript:void(0)" onClick={() => search()} className={styles.botaoFiltro}>Buscar</a>
        {/* <button className={styles.botaoFiltro}>Buscar</button> */}
      </div>
      <div className={styles.containerInferior}>
        <div className={styles.menuLateral}>
          <div className={styles.menu}>
            <h3>Menu</h3>
            <ul>
              <div className={styles.inicio}><li>Início</li></div>
              <div className={styles.categoria}><li>Categoria</li></div>
              <div className={styles.lermaistarde}><li>Ler mais Tarde</li></div>
              <div className={styles.favoritos}><li>Favoritos</li></div>
              <div className={styles.buscaavancada}><li>Busca Avançada</li></div>
              <div className={styles.minhabiblioteca}><li>Minha Biblioteca</li></div>
              <div className={styles.bibliotecacompartilhada}><li>Biblioteca Compartilhada</li></div>
            </ul>
          </div>
          <div className={styles.duvidas}>
            {/* <img src="https://inparlabsdev.sharepoint.com/sites/SquadCarlos/Documentos%20Partilhados/imagem_back.PNG" /> */}
            <h2>Dúvidas <br />ou Sugestões?</h2>
            <h4>Envie aqui sua mensagem</h4>
            <button>Envie mensagem</button>
          </div>
        </div>
        <div className={styles.arquivos}>
          <div className={styles.topico}>Pra você</div>
          {results && <div style={{ width: "100%" }}>
            <Slider {...settings}>
              {results && results.map(item =>
                <a className={styles.arquivoContent} onClick={e => openModal(item)}>
                  <div className={styles.img}>
                    <img src={item.capa.Url} />
                    <div className={styles.categoria}>
                      <h4>{item.assunto}</h4>
                    </div>
                  </div>
                  <div className={styles.titulo}>
                    <strong>{item.Title}</strong><br />
                        20/05/2021
                  </div>
                </a>
              )}
            </Slider>
          </div>}
          {/*          {arquivo && arquivo.map(item =>
            <>
              <a className={styles.arquivoContent} onClick={e => openModal(item)}>
                <div className={styles.img}>
                  <img src={item.capa.Url} />
                  <div className={styles.categoria}>
                    <h4>{item.assunto}</h4>
                  </div>
                </div>
                <div className={styles.titulo}>
                  <strong>{item.Title}</strong><br />
                        20/05/2021
                  </div>
              </a>
            </>)} */}
        </div>
      </div>
      {
        modal &&
        <MyModal closeModal={() => closeModal()} arquivo={arquivoSelecionado}></MyModal>
      }

    </div>
  );
}

export default WebpartTeste;
