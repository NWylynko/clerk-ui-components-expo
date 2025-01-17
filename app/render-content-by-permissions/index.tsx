import { Protect } from '@clerk/clerk-expo'
import { Text } from 'react-native'

export default function Screen() {
  return (
    <Protect 
      permission='org:invoices:create' 
      fallback={<Text>You do not have the permissions to create an invoice.</Text>}>
      <Text>
        You have the permissions to create an invoice.
      </Text>
    </Protect>
  )
}