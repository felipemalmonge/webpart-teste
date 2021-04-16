import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './WebpartTeste.module.scss';
import Slider from 'infinite-react-carousel';
import MyModal from './modal'

interface IArquivo {
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


interface IMyFiles {
    contadorPagina: number,
    arquivos: IArquivo[]
}

const MyFiles: React.FC<IMyFiles> = (props): JSX.Element => {

    const [modal, setmodal] = useState(false);
    const [arquivoSelecionado, setArquivoSelecionado] = useState<IArquivo>();


    const openModal = (g) => {
        setArquivoSelecionado(g);
        setmodal(true);
    }

    const closeModal = () => setmodal(false);
    useEffect(() => {
        console.log(props.arquivos);
        /* const arquivosMostrados = props.arquivos.slice(inicioArquivo, 12);
        setArquivosMostrados(arquivosMostrados);
        console.log(arquivosMostrados); */
    }, [])

    var settings = {
        dots: false,
        Speed: 500,
        rows: 3,
        slidesPerRow: 4
    };

    return (
        <div style={{ width: "100%" }}>
            <Slider {...settings}>
                {props.arquivos && props.arquivos.map(item =>
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
        </div>
    );
}
export default MyFiles;