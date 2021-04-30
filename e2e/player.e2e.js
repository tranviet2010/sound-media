describe('Check player', () => {
  beforeAll(async () => {
    await device.launchApp();
    await element(by.id('trackTab')).tap();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    const songElement = element(by.label('Nàng Thơ'));
    await songElement.tap();
    await element(by.text('Nàng Thơ').withAncestor(by.id('playerFooter'))).tap();
  });

  // TC30, 31
  it('should show full player', async () => {
    await expect(element(by.id('playerScreen'))).toBeVisible();

    await expect(element(by.id('trackName').and(by.text('Nàng Thơ')))).toBeVisible();
    await expect(element(by.id('artistName').and(by.text('Hoàng Dũng')))).toBeVisible();
  });

  // TC37, 38
  it('should able to press next', async () => {
    await expect(element(by.id('nextIcon'))).toBeVisible();
    await element(by.id('nextIcon')).tap();
    await expect(element(by.id('playerScreen'))).toBeVisible();
    await expect(element(by.id('trackName').and(by.text('Nàng Thơ')))).not.toBeVisible();
    await expect(element(by.id('artistName').and(by.text('Hoàng Dũng')))).not.toBeVisible();
  });

  // TC35, 36
  it('should able to press prev', async () => {
    await expect(element(by.id('prevIcon'))).toBeVisible();
    await element(by.id('prevIcon')).tap();
    await expect(element(by.id('playerScreen'))).toBeVisible();
    await expect(element(by.id('trackName').and(by.text('Nàng Thơ')))).not.toBeVisible();
    await expect(element(by.id('artistName').and(by.text('Hoàng Dũng')))).not.toBeVisible();
  });

  // TC39, 40, 41
  it('should able to play and pause', async () => {
    
    await expect(element(by.id('pauseIcon'))).toBeVisible()
    await element(by.id('pauseIcon')).tap();

    await expect(element(by.id('playIcon'))).toBeVisible()
    await element(by.id('playIcon')).tap();
    await expect(element(by.id('pauseIcon'))).toBeVisible()

    // Mutil tap
    await element(by.id('pauseIcon')).multiTap(2);
    await expect(element(by.id('pauseIcon'))).toBeVisible()
  });

});
