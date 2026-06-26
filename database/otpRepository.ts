import { pool } from "./connection";


async function obtenerUltimoCodigo(
    correo:string
):Promise<string | null>{


    const conn = await pool.getConnection();


    try {

        const rows:any = await conn.query(
        `
        SELECT codigo
        FROM codigo_validacion
        WHERE correo = ?
          AND tipo = 'LOGIN'
        ORDER BY fecha_actualización DESC
        LIMIT 1
        `,
        [
            correo
        ]);


        if(rows.length === 0){
            return null;
        }


        return String(rows[0].codigo).trim();


    } finally {

        conn.release();

    }

}


export async function obtenerUltimoOTP(
    correo:string
):Promise<string | null>{

    return obtenerUltimoCodigo(correo);

}


export async function obtenerOTPNuevo(
    correo:string,
    codigoAnterior:string | null
):Promise<string>{


    const codigo =
    await obtenerUltimoCodigo(correo);


    if(
        codigo === null ||
        codigo === codigoAnterior
    ){
        throw new Error(
            "No se encontro OTP nuevo"
        );
    }


    return codigo;

}
