// test side menu links
// use playwright to test the side menu links

import { expect, createTest } from '@ngx-playwright/test';

import { MainScreen } from '../screens/main-screen.js';

const test = createTest(MainScreen);

// menu button
test.describe('the menu button', () => {
  test('it should have a menu button', ({ $: { menuButton } }) => {
    expect(menuButton).toBeTruthy();
  });
});
