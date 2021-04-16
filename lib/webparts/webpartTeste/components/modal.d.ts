import * as React from 'react';
interface IArquivo {
    Title: string;
    capa: {
        Description: string;
        Url: string;
    };
    assunto: string;
    autor: string;
    tipoDocumento: string;
    editora: string;
    status: string;
    sinopse: string;
    idiomas: [];
}
interface IMyModalProps {
    closeModal: any;
    arquivo: IArquivo;
}
declare const MyModal: React.FC<IMyModalProps>;
export default MyModal;
//# sourceMappingURL=modal.d.ts.map