export class TreatMePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('treat-me h1')).getText();
  }
}
