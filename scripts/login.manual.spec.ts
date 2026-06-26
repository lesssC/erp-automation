import {test} from "@playwright/test";

import {LoginPage} from "../pages/LoginPage";

import {esperarOTP} from "../database/OTPWaiter";

import {obtenerUltimoOTP} from "../database/otpRepository";

import { tomarCaptura} from "../utils/Screenshot";



test(
"Login ERP con OTP",
async({page})=>{


try{


const login =
new LoginPage(page);


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


await tomarCaptura(
page,
"login-exitoso"
);



}
catch(error){


await tomarCaptura(
page,
"login-error"
);


throw error;


}


});