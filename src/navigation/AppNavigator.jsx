import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "../screens/MapScreen";
import CalendarScreen from "../screens/CalendarScreen";
import FilePickerScreen from "../screens/FilePickerScreen";
import FileSystemScreen from "../screens/FileSystemScreen";
import LocalizationScreen from "../screens/LocalizationScreen";


export default function AppNavigator() {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name={t("Map")}
          component={MapScreen} />
        <Stack.Screen
         name={t("Calendar")}
          component={CalendarScreen} />
        <Stack.Screen
          name={t("Document Picker")}
          component={FilePickerScreen}
        />
        <Stack.Screen 
        name={t("File System")}
         component={FileSystemScreen} />
        <Stack.Screen 
        name={t("Localization")}
         component={LocalizationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

