import { test } from "../../fixtures/auth.fixtures";
import { SolicitudComercialPage } from "../../pages/SolicitudComercial/SolicitudComercialPage";

test(
    "Abrir modal de Solicitud Comercial",
    async ({ authenticatedPage }) => {

        const solicitud =
            new SolicitudComercialPage(authenticatedPage);

        await solicitud.crearSolicitudComercial();

        await solicitud.validarModal();

    }
);