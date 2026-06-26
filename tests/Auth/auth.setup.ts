import { test } from "@playwright/test";
import { AuthService } from "../../services/AuthService";

test("Autenticar usuario", async ({ page }) => {

    const auth = new AuthService(page);

    await auth.login();

});