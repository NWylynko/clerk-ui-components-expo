import { ClerkLoading } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'

export default function Screen() {
  return (
    <View>
      <ClerkLoading>
        <Text>Clerk is loading</Text>
      </ClerkLoading>
    </View>
  )
}