import { AppConfigPage } from './app.po';

describe('app-config App', () => {
  let page: AppConfigPage;

  beforeEach(() => {
    page = new AppConfigPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
