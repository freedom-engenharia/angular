import { Injectable } from "@angular/core";
import { UsuarioModelo } from "../modelos/user.modelo";

@Injectable()
export class UsuarioServico {
    usuarios: UsuarioModelo[];

    constructor() {

        this.usuarios = [
            {
                nome: 'Carlos Samuel',
                email: "samuel4rodrigues@gmail.com",
                senha: "samuel",
                id: "01",
                empresaId: "3606c707-3382-4ced-93ab-b46b3b9acf08"
            },
            {
                nome: 'Carlos Rodrigues',
                email: "carlos.lcor@gmail.com",
                senha: "carlos",
                id: "02",
                empresaId: "3606c707-3382-4ced-93ab-b46b3b9acf08"
            },
            {
                nome: 'Rafael Vieira',
                email: "rafael.989750000@gmail.com",
                senha: "123456",
                id: "03",
                empresaId: "afa9db09-bc23-4d5b-abac-cd00d3c4947e"
            },
        ]

    }

    public getUsuarios() {
        return this.usuarios
    }

    public getUsuarioPorId(id: string): UsuarioModelo {
        var filtro = this.usuarios.filter(function (item) {
            return item.id == id;
        })
        return filtro[0]
        
    }
}
