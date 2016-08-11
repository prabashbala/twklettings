import { TwklettingsPage } from './app.po';

describe('twklettings App', function() {
  let page: TwklettingsPage;

  beforeEach(() => {
    page = new TwklettingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
