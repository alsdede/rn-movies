import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorTokens.dark.blue.blue7,
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Movies',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
      <Stack.Screen
        name="movie/[id]"
        options={{
          title: 'movie/[id]',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
    </Stack>
  );
};
export default Layout;
