import { ClerkLoaded } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'

export default function Screen() {
  return (
    <View>
      <ClerkLoaded>
        <Text>Clerk is loaded</Text>
        <Text>{window.Clerk?.version}</Text>
      </ClerkLoaded>
    </View>
  )
}