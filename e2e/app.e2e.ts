import { TreatmePage } from './app.po';

describe('treatme App', function() {
  let page: TreatmePage;

  beforeEach(() => {
    page = new TreatmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('treatme works!');
  });
});
