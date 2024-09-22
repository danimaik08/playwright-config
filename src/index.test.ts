import playwright from 'playwright';
import sleep from '~/sleep';

it('open page', async () => {
  for (const browserType of [playwright.webkit, playwright.firefox, playwright.chromium]) {
    const browser = await browserType.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://danimaik08.github.io/game/');

    await sleep(1000);

    await page.screenshot({
      path: `./screenshots/screenshot-${browserType.name()}.png`,
    });
    await browser.close();
    console.log('success: ' + browserType.name());
  }
}, 40000);
