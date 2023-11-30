const { test, expect } = require("@playwright/test");

//browser is global fixture that works for each and every test should give in curly{} to recognise it as a playwright fixture
//we use browser when we use newcontext() to inject cookies etc 
//"function()" has no name so can be written like that "()=>"

test.only("Browser context playwright test",async ({browser})=>  
{

const context=await browser.newContext()
const page=await context.newPage()

const userName=page.locator('#username')
const passWord=page.locator("[name='password']")
const signInBtn=page.locator("#signInBtn")
//go to url and assert title
await page.goto("https://rahulshettyacademy.com/loginpagePractise")
console.log(await page.title())
//using type
await userName.type("Adem Yildiz")
await passWord.type('12345')
await signInBtn.click()
console.log(await page.locator("[style*='block']").textContent()) //no need to put wait for seeing error text even text come after 2-3 sec
await expect(page.locator("[style*='block']")).toContainText("Incorrect")
//using fill, fill method helps box to be deleted
await userName.fill("") 
await userName.fill("rahulshettyacademy")
await passWord.fill("learning")
await signInBtn.click()

await page.pause()

})

//use page as a fixture when we don't use any injection like cookies etc
test("page playwright test",async ({page})=>  
{
await page.goto("https://google.com")
console.log(await page.title())
await expect(page).toHaveTitle("Google")

})