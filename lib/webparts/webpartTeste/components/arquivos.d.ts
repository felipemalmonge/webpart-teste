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
interface IMyFiles {
    contadorPagina: number;
    arquivos: IArquivo[];
}
declare const MyFiles: React.FC<IMyFiles>;
export default MyFiles;
//# sourceMappingURL=arquivos.d.ts.map