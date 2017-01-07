import { TreatMePage } from './app.po';

describe('treat-me App', function() {
  let page: TreatMePage;

  beforeEach(() => {
    page = new TreatMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
