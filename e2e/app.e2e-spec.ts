import { CoreProjectPage } from './app.po';

describe('core-project App', function() {
  let page: CoreProjectPage;

  beforeEach(() => {
    page = new CoreProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
