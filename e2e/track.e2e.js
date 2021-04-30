describe('Playlists Screen Testing', () => {
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

  // Check rename track //
  // TC52, TC53, TC68, TC69
  it('should show rename options', async () => {
    await expect(element(by.id('trackOption0'))).toBeVisible();
    await element(by.id('trackOption0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.text('CANCEL'))).toBeVisible();
    await expect(element(by.text('RENAME'))).toBeVisible();

    // TC68
    await element(by.text('CANCEL')).tap();
    await expect(element(by.text('RENAME'))).not.toBeVisible();

    // TC69
    await element(by.text('Rename')).tap();
    await element(by.text('CANCEL')).multiTap(2);
    await expect(element(by.text('RENAME'))).not.toBeVisible();

    await device.pressBack();
  });

  // TC66, TC67
  it('should able to rename song', async () => {
    const songElement = element(
      by.label('Track Option').withAncestor(by.label('Laylalay')),
    );

    await expect(songElement).toBeVisible();
    await songElement.tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('Bai hat moi 123');
    await element(by.text('RENAME')).tap();
    await waitFor(element(by.text('Bai hat moi 123')))
      .toBeVisible()
      .withTimeout(5000);

    const newSongElement = element(
      by.label('Track Option').withAncestor(by.label('Bai hat moi 123')),
    );
    await expect(newSongElement).toBeVisible();
    await newSongElement.tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('Laylalay');
    await element(by.text('RENAME')).tap();
    await waitFor(element(by.text('Laylalay')))
      .toBeVisible()
      .withTimeout(5000);

    // should able to rename alphabet song
    const azElement = element(
      by.label('Track Option').withAncestor(by.label('Laylalay')),
    );
    await expect(azElement).toBeVisible();
    await azElement.tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('abcxyz');
    await element(by.text('RENAME')).tap();
    await waitFor(element(by.text('abcxyz')))
      .toBeVisible()
      .withTimeout(5000);

    // TC55 should able to rename number name song
    const numElement = element(by.label('Track Option').withAncestor(by.label('abcxyz')));
    await expect(numElement).toBeVisible();
    await numElement.tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('123456');
    await element(by.text('RENAME')).tap();
    await waitFor(element(by.text('123456')))
      .toBeVisible()
      .withTimeout(5000);

    // TC58 should able to rename lowercase name
    const lowerElement = element(
      by.label('Track Option').withAncestor(by.label('123456')),
    );
    await expect(lowerElement).toBeVisible();
    await lowerElement.tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('bai hat');
    await element(by.text('RENAME')).tap();
    await waitFor(element(by.text('bai hat')))
      .toBeVisible()
      .withTimeout(5000);

    // TC62 should able to rename uppercase name
    const upperElement = element(
      by.label('Track Option').withAncestor(by.label('bai hat')),
    );
    await expect(upperElement).toBeVisible();
    await upperElement.tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('BAI HAT UPPER');
    await element(by.text('RENAME')).tap();
    await waitFor(element(by.text('BAI HAT UPPER')))
      .toBeVisible()
      .withTimeout(5000);
  });

  // Check delete song //
  // TC 25, 26, 27, 28, 29
  it('should able to delete song ', async () => {
    await device.reloadReactNative();
    const songElement = element(
      by.label('Track Option').withAncestor(by.label('So Close')),
    );

    await expect(songElement).toBeVisible();
    await songElement.tap();

    await element(by.text('Delete')).tap();
    await expect(element(by.text('CANCEL'))).toBeVisible();
    await expect(element(by.text('DELETE'))).toBeVisible();

    await element(by.text('CANCEL')).tap();
    await expect(element(by.text('DELETE'))).not.toBeVisible();

    await element(by.text('Delete')).tap();
    await element(by.text('CANCEL')).multiTap(2);
    await expect(element(by.text('DELETE'))).not.toBeVisible();

    await element(by.text('Delete')).tap();
    await expect(element(by.text('DELETE'))).toBeVisible();
    await element(by.text('DELETE')).tap();
    await expect(element(by.text('Rename'))).not.toBeVisible();
    await expect(element(by.text('Delete'))).not.toBeVisible();
  });


});
