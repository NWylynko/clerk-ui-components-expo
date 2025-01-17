import { SignedOut } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'

export default function Screen() {
  return (
    <View>
      <SignedOut>
        <Text>You are signed out</Text>
      </SignedOut>
    </View>
  )
}