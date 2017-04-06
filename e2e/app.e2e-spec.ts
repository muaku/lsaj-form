import { LsajFormPage } from './app.po';

describe('lsaj-form App', () => {
  let page: LsajFormPage;

  beforeEach(() => {
    page = new LsajFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
