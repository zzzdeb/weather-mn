import { WeatherMnPage } from './app.po';

describe('weather-mn App', () => {
  let page: WeatherMnPage;

  beforeEach(() => {
    page = new WeatherMnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
