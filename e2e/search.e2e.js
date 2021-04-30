describe('Search Screen Testing', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
    await element(by.id('searchTab')).tap();
  });

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('notFoundMessage'))).toBeVisible();
  // });

  // TC02
  it('should show search screen after tap', async () => {
    await expect(element(by.id('searchTab'))).toBeVisible();
    await expect(element(by.id('searchScreen'))).toExist();
  });

  // TC03
  it('should have default label', async () => {
    await expect(element(by.id('searchInput'))).toBeVisible();
    await expect(element(by.text('Type something into the search bar'))).toBeVisible();
  });

  // TC04: Search by singer
  it('should able to search by singer', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('Hoàng Dũng');
    await waitFor(element(by.text('Nàng Thơ'))).toBeVisible().withTimeout(5000);
  });

  // TC05: Search by song name
  it('should able to search by song name', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('Nàng thơ');
    await waitFor(element(by.text('Nàng Thơ'))).toBeVisible().withTimeout(5000);
  });

  // TC07: Search by random keyword
  it('should able to search by random keywords', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('ta');
    await waitFor(element(by.id('searchResult'))).toBeVisible().withTimeout(5000);
  });

  // TC08: Search by number
  it('should able to search by number', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('1');
    await waitFor(element(by.id('searchResult'))).toBeVisible().withTimeout(5000);
  });

  // TC10: Search by lower keywords
  it('should able to search by lower keyword', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('nàng thơ');
    await waitFor(element(by.text('Nàng Thơ'))).toBeVisible().withTimeout(5000);
  });

  // TC11: Search by upper keywords
  it('should able to search by upper keywords', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('NÀNG THƠ');
    await waitFor(element(by.text('Nàng Thơ'))).toBeVisible().withTimeout(5000);
  });

  // TC12: Search by special keywords
  it('should able to search by special keywords', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('$$$');
    await waitFor(element(by.id('searchResult'))).toBeVisible().withTimeout(5000);
  });

  // Abnormal case
  // TC13
  it('show default label', async () => {
    await device.reloadReactNative();
    await element(by.id('searchTab')).tap();
    await expect(element(by.text('Type something into the search bar'))).toBeVisible();
  });

  // TC14: Search by space
  it('should return empty search by space', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('        ');
    await waitFor(element(by.id('emptyResultList'))).toBeVisible().withTimeout(5000);
  });

  // TC15: Not show result for not found artist
  it('should not show result for not found artist', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('Chi Pu');
    await waitFor(element(by.id('emptyResultList'))).toBeVisible().withTimeout(5000);
  });

  // TC16: Not found song
  it('should return empty not found song', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText('Anh ơi ở lại');
    await waitFor(element(by.id('emptyResultList'))).toBeVisible().withTimeout(5000);
  });
  
  // TC18: Search by space
  it('not error sql injection', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).replaceText("user1' or '1'='1");
    await waitFor(element(by.id('emptyResultList'))).toBeVisible().withTimeout(5000);
  });
});
