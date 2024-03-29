import { expect } from "detox";

const DEVELOPER_MENU_TEXT =
  "This is the developer menu. It gives you access to useful tools in your development builds.";

describe("Notes", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: false });

    await device.openURL({
      url: `exp+AwesomeProject://expo-development-client/?url=${encodeURIComponent(
        `http://localhost:8081`,
      )}`,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();

    // workaround to dismiss dev menu -- can alternatively uninstall expo-dev-client
    const devmenu = await expect(element(by.text(DEVELOPER_MENU_TEXT)))
      .toExist()
      .then(() => true)
      .catch(() => false);
    if (devmenu) {
      await device.shake();
    }
  });

  it("can add a note", async () => {
    await expect(element(by.text(button("Notes")))).toBeVisible();
    await element(by.text(button("Notes"))).tap();

    await expect(element(by.text(button("Add Note")))).toBeVisible();
    await element(by.text(button("Add Note"))).tap();
    await element(by.text("enter note...")).tap();

    await element(by.text("enter note...")).replaceText("this is my note");
    await element(by.text("first note")).tap();

    await expect(element(by.text("this is my note"))).toExist();
  });
});

function button(label: string): string {
  return device.getPlatform() === "android" ? label.toLocaleUpperCase() : label;
}
