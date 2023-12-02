const { test, expect } = require("@playwright/test");

//browser is global fixture that works for each and every test should give in curly{} to recognise it as a playwright fixture
//we use browser when we use newcontext() to inject cookies etc 
//"function()" has no name so can be written like that "()=>"

test("Browser context-Validating Error login",async ({browser})=>  
{

const context=await browser.newContext()
const page=await context.newPage()

const userName=page.locator('#username')
const passWord=page.locator("[name='password']")
const signInBtn=page.locator("#signInBtn")
const cardTitles=page.locator(".card-body a")
//go to url and assert title
await page.goto("https://rahulshettyacademy.com/loginpagePractise")
console.log(await page.title())
//login with wrong credentials by using type method and verify error message
await userName.type("Adem Yildiz")
await passWord.type('12345')
await signInBtn.click()
console.log(await page.locator("[style*='block']").textContent()) //no need to put wait for seeing error text even text come after 2-3 sec
await expect(page.locator("[style*='block']")).toContainText("Incorrect")
//Login with correct credentials by using fill, fill method helps box to be deleted
await userName.fill("") 
await userName.fill("rahulshettyacademy")
await passWord.fill("learning")
await signInBtn.click()
//Get product's name when from multiple elements
//console.log(await cardTitles.first().textContent())
//console.log(await cardTitles.nth(1).textContent()) //second element
console.log(await cardTitles.allTextContents())

})

//use page as a fixture when we don't use any injection like cookies etc
test("page playwright test",async ({page})=>  
{
await page.goto("https://google.com")
console.log(await page.title())
await expect(page).toHaveTitle("Google")

})