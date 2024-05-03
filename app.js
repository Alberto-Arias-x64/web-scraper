// @ts-check

import playwright from 'playwright'
import fs from 'fs/promises'

const data = (await fs.readFile('./scraper.conf')).toString()
const PAGE = new RegExp(/PAGE=(.*)/gm).exec(data)?.[1] ?? ''
const ITEM = new RegExp(/ITEM=(.*)/gm).exec(data)?.[1] ?? ''
const CLASS_ELEMENT = new RegExp(/CLASS_ELEMENT=(.*)/gm).exec(data)?.[1] ?? ''

async function agent() {
  const browser = await playwright.chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto(PAGE + ITEM)
  const values = await page.textContent(`[class="${CLASS_ELEMENT}"]`)
  await page.waitForTimeout(1000)
  await browser.close()
  console.log(values)
}

agent()