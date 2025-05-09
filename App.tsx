import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./navigation/AppNavigator";
import { SelectionProvider } from "./context/SelectionContext";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SelectionProvider>
        <AppNavigator />
      </SelectionProvider>
    </GestureHandlerRootView>
  );
}
