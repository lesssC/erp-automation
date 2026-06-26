import { Page } from "@playwright/test";

import { LoginPage }
from "../pages/LoginPage";

import { obtenerUltimoOTP }
from "../database/otpRepository";

import { esperarOTP }
from "../database/OTPWaiter";


export class AuthService {


constructor(
    private page:Page
){}



async login(){


const login =
new LoginPage(
    this.page
);


await login.abrir();



const codigoAnterior =
await obtenerUltimoOTP(
    process.env.EMAIL!
);



await login.ingresarCorreo(
    process.env.EMAIL!
);



await login.continuar();



const codigo =
await esperarOTP(
    process.env.EMAIL!,
    codigoAnterior
);



await login.ingresarCodigo(
    codigo
);



await login.continuarOTP();



await login.validarDashboard();



await this.page.context()
.storageState({
    path:"storage/auth.json"
});


}

}