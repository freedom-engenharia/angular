import { Injectable } from "@angular/core";
import { UsuarioModelo } from "../modelos/user.modelo";

@Injectable()
export class UsuarioServico {
    usuarios: UsuarioModelo[];

    constructor() {

        this.usuarios = [
            {
                email: "samuel4rodrigues@gmail.com",
                senha: "samuel",
                id: "01"
            },
            {
                email: "carlos.lcor@gmail.com",
                senha: "carlos",
                id: "02"
            }
        ]

    }

    public getUsuarios() {
        return this.usuarios

    }
}
