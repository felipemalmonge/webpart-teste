import * as React from 'react';
import styles from './WebpartTeste.module.scss';
var MyModal = function (props) {
    var close = function () {
        props.closeModal();
    };
    var idiomas = props.arquivo.idiomas;
    console.log(idiomas);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.modal },
            React.createElement("div", { className: styles.contentModal },
                React.createElement("div", { className: styles.close, onClick: function () { return close(); } }),
                React.createElement("div", { className: styles.categoriaModal },
                    React.createElement("h3", null, props.arquivo.assunto)),
                React.createElement("div", { className: styles.imagemModal },
                    React.createElement("img", { src: props.arquivo.capa.Url })),
                React.createElement("div", { className: styles.contentArquivo },
                    React.createElement("div", { className: styles.title },
                        React.createElement("strong", null, props.arquivo.Title)),
                    React.createElement("div", { className: styles.info },
                        React.createElement("h3", null,
                            "Autor: ",
                            props.arquivo.autor),
                        React.createElement("h3", null, props.arquivo.tipoDocumento),
                        React.createElement("h3", null,
                            "Editoria: ",
                            props.arquivo.editora),
                        React.createElement("h3", null, props.arquivo.status)),
                    React.createElement("div", { className: styles.sinopose }, props.arquivo.sinopse),
                    React.createElement("div", { className: styles.idiomas }, idiomas && idiomas.map(function (item) {
                        return React.createElement(React.Fragment, null,
                            React.createElement("input", { type: "checkbox" }),
                            React.createElement("label", null, item));
                    })),
                    React.createElement("div", { className: styles.botao },
                        React.createElement("button", null, "Ler agora"),
                        React.createElement("button", null, "Ler mais tarde")))))));
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
//# sourceMappingURL=modal.js.map