import { GithubProfileDashboardPage } from './app.po';

describe('github-profile-dashboard App', () => {
  let page: GithubProfileDashboardPage;

  beforeEach(() => {
    page = new GithubProfileDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
