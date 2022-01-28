
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('clicking the draw button displays the div with id "choices"', async () => {

  await driver.findElement(By.css('#draw')).click();

  const displayed = await driver.findElement(By.id('choices')).isDisplayed()

  expect(displayed).toBe(true)
})

test('Check that clicking an “Add to Duo” button displays the div with id = “player-id”', async () => {

  await driver.sleep(3000);

  await driver.findElement(By.css('#draw')).click();

  await driver.sleep(3000);

  await driver.findElement(By.xpath('(//button[text()="Add to Duo"])')).click()

  await driver.sleep(3000);
//could not find an id of player id but did find one of plyer duo
  const displayed = await driver.findElement(By.id('player-duo')).isDisplayed()

  expect(displayed).toBe(true)
})
