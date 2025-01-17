import { Protect } from '@clerk/clerk-expo'
import { Text } from 'react-native'

export default function Screen() {
  return (
    <Protect 
      permission="org:billing"
      fallback={<Text>Only a member of the Billing department can access this content.</Text>}>
      <Text>
        This content is only accessible to members of the Billing department.
      </Text>
    </Protect>
  )
}