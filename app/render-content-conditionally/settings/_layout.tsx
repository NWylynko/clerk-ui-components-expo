import { Slot } from 'expo-router'
import { Protect } from '@clerk/clerk-expo'
import { Text } from 'react-native'

export default function SettingsLayout() {
  return (
    <Protect
      condition={(has) => has({ role: 'org:admin' }) || has({ role: 'org:billing_manager' })}
      fallback={<Text>Only an Admin or Billing Manager can access this content.</Text>}
    >
      <Slot />
    </Protect>
  )
}