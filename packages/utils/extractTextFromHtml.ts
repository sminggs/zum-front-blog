import * as cheerio from 'cheerio';

export const extractTextFromHTMLClient = (htmlString: string) => {
  const $ = cheerio.load(htmlString);
  return $('body').text().trim();
};

export const extractTextFromHTMLServer = (htmlString: string) => {
  const $ = cheerio.load(htmlString);
  return $('html *')
    .get()
    .map((e) => $(e).text().trim())
    .join(' ');
};
