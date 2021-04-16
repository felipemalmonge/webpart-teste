var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './WebpartTeste.module.scss';
import Slider from 'infinite-react-carousel';
var MyFiles = function (props) {
    var _a = useState(false), modal = _a[0], setmodal = _a[1];
    var _b = useState(), arquivoSelecionado = _b[0], setArquivoSelecionado = _b[1];
    var openModal = function (g) {
        setArquivoSelecionado(g);
        setmodal(true);
    };
    var closeModal = function () { return setmodal(false); };
    useEffect(function () {
        console.log(props.arquivos);
        /* const arquivosMostrados = props.arquivos.slice(inicioArquivo, 12);
        setArquivosMostrados(arquivosMostrados);
        console.log(arquivosMostrados); */
    }, []);
    var settings = {
        dots: false,
        Speed: 500,
        rows: 3,
        slidesPerRow: 4
    };
    return (React.createElement("div", { style: { width: "100%" } },
        React.createElement(Slider, __assign({}, settings), props.arquivos && props.arquivos.map(function (item) {
            return React.createElement("a", { className: styles.arquivoContent, onClick: function (e) { return openModal(item); } },
                React.createElement("div", { className: styles.img },
                    React.createElement("img", { src: item.capa.Url }),
                    React.createElement("div", { className: styles.categoria },
                        React.createElement("h4", null, item.assunto))),
                React.createElement("div", { className: styles.titulo },
                    React.createElement("strong", null, item.Title),
                    React.createElement("br", null),
                    "20/05/2021"));
        }))));
};
export default MyFiles;
//# sourceMappingURL=arquivos.js.map