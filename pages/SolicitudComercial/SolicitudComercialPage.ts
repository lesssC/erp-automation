import { expect, Page } from "@playwright/test";

export class SolicitudComercialPage {

    constructor(
        private page: Page
    ) {}

    async crearSolicitudComercial() {

        await this.page
            .getByRole("button", {
                name: "Crear"
            })
            .click();

        await this.page
            .getByRole("menuitem", {
                name: "Solicitud comercial"
            })
            .click();

    }

    async validarModal() {

        await expect(

            this.page.getByText(
                "Seleccione una empresa"
            )

        ).toBeVisible();

    }

}