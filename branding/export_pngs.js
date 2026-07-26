const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.svg'))) {
    const svg = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
    const w = +m[1], h = +m[2];
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    await page.setContent(`<body style="margin:0">${svg}</body>`);
    await page.screenshot({ path: path.join(dir, 'png', f.replace('.svg', '.png')), omitBackground: true });
    await page.close();
    console.log('exported', f, `${w*2}x${h*2}`);
  }
  await browser.close();
})();
