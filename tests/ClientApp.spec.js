const { test, expect } = require("@playwright/test");

test.only("@WC Client App login",async ({page})=>  
{

await page.goto("https://rahulshettyacademy.com/client")
await page.locator("#userEmail").fill("adem@38.com")
await page.locator("#userPassword").type("Madem1234")
await page.locator("[id='login']").click()
//Put the one of the following waits if serviced based app/with network calls after login
await page.waitForLoadState("networkidle") //way 1
await page.locator(".card-body b").first().waitFor() //way 2
const titles=await page.locator(".card-body b").allTextContents()
console.log(titles)

await page.pause()


})
