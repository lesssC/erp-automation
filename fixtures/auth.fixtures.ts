import {
test as base,
expect,
Page
} from "@playwright/test";


import { AuthService }
from "../services/AuthService";



type AuthFixtures = {

    authenticatedPage: Page;

};



export const test =
base.extend<AuthFixtures>({

authenticatedPage:
async(
    {page},
    use
)=>{


await page.goto(
    process.env.ERP_URL!
);


await use(page);


}

});


export {
    expect
};