export class TreatMePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('treat-me-app h1')).getText();
  }
}
