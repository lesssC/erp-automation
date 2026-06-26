import { obtenerOTPNuevo } from "./otpRepository";


export async function esperarOTP(
    correo:string,
    codigoAnterior:string | null
){


    const intentos = 40;


    for(let i=0;i<intentos;i++){


        try{

            return await obtenerOTPNuevo(
                correo,
                codigoAnterior
            );


        }catch(error){

             if(
            error instanceof Error &&
            error.message !== "No se encontro OTP nuevo"
            ){
                throw error;
            }

            await new Promise(
                resolve => setTimeout(resolve,500)
            );

        }

    }


    throw new Error(
        "Tiempo agotado esperando OTP"
    );

}
