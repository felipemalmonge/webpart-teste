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
import styles from './WebpartTeste.module.scss';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { useState, useEffect } from 'react';
import MyModal from './modal';
import Slider from 'infinite-react-carousel';
var WebpartTeste = function (props) {
    var _a = useState(), arquivo = _a[0], setArquivo = _a[1];
    var _b = useState(), results = _b[0], setresults = _b[1];
    var _c = useState(false), modal = _c[0], setmodal = _c[1];
    var _d = useState(), arquivoSelecionado = _d[0], setArquivoSelecionado = _d[1];
    var _e = useState(1), contadorPagina = _e[0], setContadorPagina = _e[1];
    var _f = useState(''), searchText = _f[0], setsearchText = _f[1];
    useEffect(function () {
        sp.web.lists.getByTitle("bibliotecaArquivos").items.orderBy("ID", false).get().then(function (r) {
            setArquivo(r);
            setresults(r);
        });
    }, []);
    var openModal = function (g) {
        setArquivoSelecionado(g);
        setmodal(true);
    };
    var closeModal = function () { return setmodal(false); };
    var settings = {
        dots: false,
        Speed: 500,
        rows: 3,
        slidesPerRow: 4,
        adaptiveHeight: true
    };
    var search = function () {
        var items = arquivo;
        if (results.length > 0)
            items = results;
        searchText.length == 0 ? setresults(arquivo) : filterResult();
    };
    var filterResult = function () {
        var filtered;
        filtered = arquivo.filter(function (r) {
            return r.Title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1 || r.sinopse.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1;
        });
        setresults(filtered);
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.img },
            React.createElement("img", { src: "https://inparlabsdev.sharepoint.com/sites/SquadCarlos/Documentos%20Partilhados/online-news-smartphone-laptop-mockup-website-woman-reading-news-articles-mobile-phone-screen-application-home-newspaper-portal-internet@2x.png" })),
        React.createElement("div", { className: styles.busca },
            React.createElement("h2", null, "Fa\u00E7a sua busca"),
            React.createElement("div", { className: styles.filtro },
                React.createElement("input", { value: searchText, type: "text", onChange: function (e) { return setsearchText(e.target.value); }, placeholder: "Digite o nome do documento" })),
            React.createElement("a", { href: "javascript:void(0)", onClick: function () { return search(); }, className: styles.botaoFiltro }, "Buscar")),
        React.createElement("div", { className: styles.containerInferior },
            React.createElement("div", { className: styles.menuLateral },
                React.createElement("div", { className: styles.menu },
                    React.createElement("h3", null, "Menu"),
                    React.createElement("ul", null,
                        React.createElement("div", { className: styles.inicio },
                            React.createElement("li", null, "In\u00EDcio")),
                        React.createElement("div", { className: styles.categoria },
                            React.createElement("li", null, "Categoria")),
                        React.createElement("div", { className: styles.lermaistarde },
                            React.createElement("li", null, "Ler mais Tarde")),
                        React.createElement("div", { className: styles.favoritos },
                            React.createElement("li", null, "Favoritos")),
                        React.createElement("div", { className: styles.buscaavancada },
                            React.createElement("li", null, "Busca Avan\u00E7ada")),
                        React.createElement("div", { className: styles.minhabiblioteca },
                            React.createElement("li", null, "Minha Biblioteca")),
                        React.createElement("div", { className: styles.bibliotecacompartilhada },
                            React.createElement("li", null, "Biblioteca Compartilhada")))),
                React.createElement("div", { className: styles.duvidas },
                    React.createElement("h2", null,
                        "D\u00FAvidas ",
                        React.createElement("br", null),
                        "ou Sugest\u00F5es?"),
                    React.createElement("h4", null, "Envie aqui sua mensagem"),
                    React.createElement("button", null, "Envie mensagem"))),
            React.createElement("div", { className: styles.arquivos },
                React.createElement("div", { className: styles.topico }, "Pra voc\u00EA"),
                results && React.createElement("div", { style: { width: "100%" } },
                    React.createElement(Slider, __assign({}, settings), results && results.map(function (item) {
                        return React.createElement("a", { className: styles.arquivoContent, onClick: function (e) { return openModal(item); } },
                            React.createElement("div", { className: styles.img },
                                React.createElement("img", { src: item.capa.Url }),
                                React.createElement("div", { className: styles.categoria },
                                    React.createElement("h4", null, item.assunto))),
                            React.createElement("div", { className: styles.titulo },
                                React.createElement("strong", null, item.Title),
                                React.createElement("br", null),
                                "20/05/2021"));
                    }))))),
        modal &&
            React.createElement(MyModal, { closeModal: function () { return closeModal(); }, arquivo: arquivoSelecionado })));
};
export default WebpartTeste;
//# sourceMappingURL=WebpartTeste.js.map