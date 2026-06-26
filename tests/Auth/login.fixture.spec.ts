import {test, expect} from "../../fixtures/auth.fixtures";



test(
"Acceso ERP con sesión autenticada",
async({
authenticatedPage
})=>{

await expect(
authenticatedPage
)
.toHaveURL(
/erp-web-stg/
);


});