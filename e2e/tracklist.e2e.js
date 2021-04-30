describe('Check play track', () => {
  beforeAll(async () => {
    await device.launchApp();
    await element(by.id('trackTab')).tap();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
    // await element(by.id('trackTab')).tap();
  });

  // TC03
  it('should show track screen after tap', async () => {
    await expect(element(by.id('trackScreen'))).toBeVisible();
  });

  // TC08, TC09
  it('should play track', async () => {
    const songElement = element(by.label('Nàng Thơ'));

    await expect(songElement).toBeVisible();
    await songElement.tap();

    await expect(element(by.id('playerFooter'))).toBeVisible();
    await expect(element(by.text('Nàng Thơ').withAncestor(by.id('playerFooter')))).toBeVisible()
    await expect(element(by.text('Hoàng Dũng').withAncestor(by.id('playerFooter')))).toBeVisible()

    // Mutil tap
    await device.reloadReactNative();
    await element(by.id('trackTab')).tap();
    await expect(songElement).toBeVisible();
    await songElement.multiTap(2);
    
    await expect(element(by.id('playerFooter'))).toBeVisible();
    await expect(element(by.text('Nàng Thơ').withAncestor(by.id('playerFooter')))).toBeVisible()
    await expect(element(by.text('Hoàng Dũng').withAncestor(by.id('playerFooter')))).toBeVisible()

  });

  // TC10, TC11, TC17, TC18
  it('should able to show track options', async () => {
    const songElement = element(by.label('Track Option').withAncestor(by.label('Nàng Thơ')));
    await expect(songElement).toBeVisible();
    await songElement.tap();

    await expect(element(by.text('Add to Playlist').withAncestor(by.id('optionsModal')))).toBeVisible()
    await expect(element(by.text('Share').withAncestor(by.id('optionsModal')))).toBeVisible()
    await expect(element(by.text('Rename').withAncestor(by.id('optionsModal')))).toBeVisible()
    await expect(element(by.text('Delete').withAncestor(by.id('optionsModal')))).toBeVisible()
    await device.pressBack();

    // Mutil tap
    await songElement.multiTap(2);
    await expect(element(by.text('Add to Playlist').withAncestor(by.id('optionsModal')))).toBeVisible()
    await expect(element(by.text('Share').withAncestor(by.id('optionsModal')))).toBeVisible()
    await expect(element(by.text('Rename').withAncestor(by.id('optionsModal')))).toBeVisible()
    await expect(element(by.text('Delete').withAncestor(by.id('optionsModal')))).toBeVisible()
    await device.pressBack();
  });

  // TC12, TC13, TC14, TC15
  it('should able to play and pause', async () => {
    await device.reloadReactNative();
    await element(by.id('trackTab')).tap();

    const songElement = element(by.label('Nàng Thơ'));
    await expect(songElement).toBeVisible();
    await songElement.tap();

    await expect(element(by.id('playerFooter'))).toBeVisible();
    await expect(element(by.id('playIcon').withAncestor(by.id('playerFooter')))).toBeVisible()

    await element(by.id('playIcon').withAncestor(by.id('playerFooter'))).tap();
    await expect(element(by.id('pauseIcon').withAncestor(by.id('playerFooter')))).toBeVisible();

    // Mutil tap
    await element(by.id('pauseIcon').withAncestor(by.id('playerFooter'))).multiTap(3);
    await expect(element(by.id('playIcon').withAncestor(by.id('playerFooter')))).toBeVisible();
  });

  // TC16
  it('should show full player', async () => {
    const songElement = element(by.label('Nàng Thơ'));

    await expect(songElement).toBeVisible();
    await songElement.tap();

    await expect(element(by.id('playerFooter'))).toBeVisible();
    await expect(element(by.text('Nàng Thơ').withAncestor(by.id('playerFooter')))).toBeVisible()
    await element(by.text('Nàng Thơ').withAncestor(by.id('playerFooter'))).tap();
    await expect(element(by.id('playerScreen'))).toBeVisible();
    await device.pressBack();
  });

  // TC19, TC20, TC21
  it('should able to add track to playlist', async () => {
    const songElement = element(by.label('Track Option').withAncestor(by.label('Nàng Thơ')));
    await expect(songElement).toBeVisible();
    await songElement.tap();

    await expect(element(by.text('Add to Playlist').withAncestor(by.id('optionsModal')))).toBeVisible()
    await element(by.text('Add to Playlist').withAncestor(by.id('optionsModal'))).tap();
    await expect(element(by.id('addToPlaylistScreen'))).toBeVisible();
    await expect(element(by.text('Favourites'))).toBeVisible();
    await element(by.text('Favourites')).tap();
    await expect(element(by.id('trackScreen'))).toBeVisible();

    // Add exist track
    await songElement.tap();
    await expect(element(by.text('Add to Playlist').withAncestor(by.id('optionsModal')))).toBeVisible()
    await element(by.text('Add to Playlist').withAncestor(by.id('optionsModal'))).tap();
    await expect(element(by.text('Favourites'))).toBeVisible();
    await element(by.text('Favourites')).tap();
    await expect(element(by.id('addToPlaylistScreen'))).toBeVisible();
  });
});
