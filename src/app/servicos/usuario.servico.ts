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
                id: "01",
                empresaId: "3606c707-3382-4ced-93ab-b46b3b9acf08"
            },
            {
                email: "carlos.lcor@gmail.com",
                senha: "carlos",
                id: "02",
                empresaId: "3606c707-3382-4ced-93ab-b46b3b9acf08"
            }
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
