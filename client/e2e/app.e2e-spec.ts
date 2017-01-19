import { ArminCallPage } from './app.po';

describe('armin-call App', function() {
  let page: ArminCallPage;

  beforeEach(() => {
    page = new ArminCallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
