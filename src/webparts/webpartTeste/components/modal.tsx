import * as React from 'react';
import styles from './WebpartTeste.module.scss';

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

interface IMyModalProps {
    closeModal: any,
    arquivo: IArquivo
}

const MyModal: React.FC<IMyModalProps> = (props): JSX.Element => {

    const close = () => {
        props.closeModal()
    }

    const idiomas: [] = props.arquivo.idiomas;
    console.log(idiomas);

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.contentModal}>
                    <div className={styles.close} onClick={() => close()}></div>
                    <div className={styles.categoriaModal}>
                        <h3>{props.arquivo.assunto}</h3>
                    </div>
                    <div className={styles.imagemModal}>
                        <img src={props.arquivo.capa.Url} />
                    </div>
                    <div className={styles.contentArquivo}>
                        <div className={styles.title}>
                            <strong>{props.arquivo.Title}</strong>
                        </div>

                        <div className={styles.info}>
                            <h3>Autor: {props.arquivo.autor}</h3>
                            <h3>{props.arquivo.tipoDocumento}</h3>
                            <h3>Editoria: {props.arquivo.editora}</h3>
                            <h3>{props.arquivo.status}</h3>
                        </div>
                        <div className={styles.sinopose}>{props.arquivo.sinopse}</div>
                        <div className={styles.idiomas}>
                            {idiomas && idiomas.map(item =>
                                <>
                                    <input type="checkbox"></input>
                                    <label>{item}</label>
                                </>
                            )}
                        </div>
                        <div className={styles.botao}>
                            <button>Ler agora</button>
                            <button>Ler mais tarde</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyModal;

/* import * as React from 'react';

function Modal(props) {
    const { show, closeModal } = props;

    return (
        <>
            <div className={show ? "overlay" : "hide"} onClick={closeModal} />
            <div className={show ? "modal" : "hide"}>
                <button onClick={closeModal}>X</button>
                <h1>Modal heading</h1>
                <p>This is modal content</p>
            </div>
        </>
    );
}
 */