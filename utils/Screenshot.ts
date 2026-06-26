import {Page} from "@playwright/test";


export async function tomarCaptura(
    page:Page,
    nombre:string
){

    await page.screenshot({

        path:
        `screenshots/${nombre}.png`,

        fullPage:true

    });

}