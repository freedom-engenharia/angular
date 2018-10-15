
export class UsuarioModelo {
    id: string;
    email: string;
    senha: string;
    empresaId: string;

    constructor(entity?: UsuarioModelo){
        this.empresaId ? this.empresaId: '';
        this.id ? this.id: '';
        this.email ? this.email: '';
        this.senha ? this.senha: '';
    }
}