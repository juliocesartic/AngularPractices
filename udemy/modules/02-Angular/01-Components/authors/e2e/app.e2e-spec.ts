import { AuthorsPage } from './app.po';

describe('authors App', () => {
  let page: AuthorsPage;

  beforeEach(() => {
    page = new AuthorsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
