import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";

import { store } from "../store";

export default function Layout() {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <Stack />
      </RootSiblingParent>
    </Provider>
  );
}
