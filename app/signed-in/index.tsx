import { SignedIn } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'

export default function Screen() {
  return (
    <View>
      <SignedIn>
        <Text>You are signed in!</Text>
      </SignedIn>
      <Text>Always visible</Text>
    </View>
  )
}