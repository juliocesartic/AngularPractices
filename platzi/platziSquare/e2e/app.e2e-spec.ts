import { PlatziSquarePage } from './app.po';

describe('platzi-square App', () => {
  let page: PlatziSquarePage;

  beforeEach(() => {
    page = new PlatziSquarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
