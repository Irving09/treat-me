export class TreatmePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('treatme-app h1')).getText();
  }
}
