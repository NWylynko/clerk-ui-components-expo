import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="clerk-provider" options={{ title: "Clerk Provider" }} />
      <Stack.Screen name="clerk-loaded" options={{ title: "Clerk Loaded" }} />
      <Stack.Screen name="clerk-loading" options={{ title: "Clerk Loading" }} />
      <Stack.Screen name="signed-in" options={{ title: "Signed In" }} />
      <Stack.Screen name="signed-out" options={{ title: "Signed Out" }} />
      <Stack.Screen name="render-content-by-permissions" options={{ title: "Render Content By Permissions" }} />
      <Stack.Screen name="render-content-by-role" options={{ title: "Render Content By Role" }} />
      <Stack.Screen name="render-content-conditionally/settings" options={{ title: "Render Content Conditionally" }} />
      </Stack>
  );
}
