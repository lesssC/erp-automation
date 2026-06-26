import {Page, expect} from "@playwright/test";


export class DashboardPage{


constructor(
 private page:Page
){}


async validarCarga(){

 await expect(this.page)
 .toHaveURL(
 /erp-web-stg/
 );


}


async validarLogo(){

 await expect(
 this.page.getByRole(
  "img",
  {
   name:"EMUSA"
  }
 )
 )
 .toBeVisible();

}


}