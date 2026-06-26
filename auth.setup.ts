import { test as setup } from "@playwright/test";

import { AuthService }
from "./services/AuthService";


const authFile =
"storage/auth.json";


setup(
"authentication",
async({page})=>{


const auth =
new AuthService(page);



await auth.login();



await page.context()
.storageState({
    path:authFile
});


});