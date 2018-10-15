
export class UsuarioModelo {
    nome: string;
    id: string;
    email: string;
    senha: string;
    empresaId: string;

    constructor(entity?: UsuarioModelo){
        this.nome ? this.nome: '';
        this.empresaId ? this.empresaId: '';
        this.id ? this.id: '';
        this.email ? this.email: '';
        this.senha ? this.senha: '';
    }
}