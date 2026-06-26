import { Page, expect } from "@playwright/test";

export class LoginPage{

    

constructor(
    private page:Page
){}



async abrir(){

    await this.page.goto(
        process.env.ERP_URL!
    );

}



async ingresarCorreo(
    correo:string
){

    const input =
    this.page
    .locator("form input:visible")
    .first();


    await input.click();

    await input.fill(correo);

    await input.press("Tab");

}



async continuar(){

    const boton =
    this.page.getByRole(
        "button",
        {
            name:"Continuar"
        }
    );


    await expect(boton)
    .toBeEnabled({
        timeout:10000
    });


    await boton.click();

}



async ingresarCodigo(
    codigo:string
){

    const codigoOTP =
    codigo.trim();


    await expect(
        this.page.getByRole(
            "heading",
            {
                name:/Verificaci/i
            }
        )
    )
    .toBeVisible({
        timeout:10000
    });


    const input =
    this.page
    .locator("form input:visible")
    .last();


    await input.click();

    await input.fill("");

    await input.pressSequentially(
        codigoOTP,
        {
            delay:50
        }
    );


    await expect(input)
    .toHaveValue(codigoOTP);

}



async continuarOTP(){

    const respuestaVerificacion =
    this.page.waitForResponse(
        response =>
            response.url().includes("/api/v1/oauth/verify-code") &&
            response.request().method() === "POST",
        {
            timeout:15000
        }
    );

    await this.continuar();

    const response =
    await respuestaVerificacion;


    expect(
        response.status(),
        "La API rechazo el OTP enviado"
    ).toBeLessThan(400);

}



async validarDashboard(){

    await expect(this.page)
    .toHaveURL(
        /erp-web-stg\.apps\.emusa\.dev/,
        {
            timeout:30000
        }
    );


    await expect(
        this.page.getByRole(
            "heading",
            {
                name:/Verificaci/i
            }
        )
    )
    .not
    .toBeVisible();

}


}
