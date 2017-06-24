import { Ng4TrainingPage } from './app.po';

describe('ng4-training App', () => {
  let page: Ng4TrainingPage;

  beforeEach(() => {
    page = new Ng4TrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
