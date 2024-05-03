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
  await page.locator('span').filter({ hasText: 'Usado' }).first().click()
  await page.waitForTimeout(100)
  const values = await page.locator(`.${CLASS_ELEMENT}`).allInnerTexts()
  await page.waitForTimeout(100)
  await browser.close()
  const transformValues = values.map(e => e.replace('.', ''))
  const transformValues2 = transformValues.map(e => Number(e.replace('.', '')))
  const sortValues = transformValues2.sort((a, b) => a - b)
  const filterValues = sortValues.slice(sortValues.length / 2, sortValues.length)
  const readValues = filterValues.map(e => '$' + e + '\n')
  fs.writeFile('./results.txt', readValues)
}

agent()