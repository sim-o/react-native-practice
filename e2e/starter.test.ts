import { expect } from 'detox';

describe('Notes', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('can add a note', async () => {
    await expect(element(by.text('Add Note'))).toBeVisible();
    await element(by.text('Add Note')).tap();
    await element(by.text('enter note...')).tap();

    await element(by.text('enter note...')).replaceText('this is my note');
    await element(by.text('first note')).tap();

    await expect(element(by.text('this is my note'))).toExist();
  });
});
