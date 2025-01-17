import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 10, padding: 10 }}>
      <Link href="/clerk-provider">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Clerk Provider Example</Text>
        </View>
      </Link>

      <Link href="/clerk-loaded">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Clerk Loaded Example</Text>
        </View>
      </Link>

      <Link href="/clerk-loading">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Clerk Loading Example</Text>
        </View>
      </Link>

      <Link href="/signed-in">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Signed In Example</Text>
        </View>
      </Link>

      <Link href="/signed-out">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Signed Out Example</Text>
        </View>
      </Link>

      <Link href="/render-content-by-permissions">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Render Content By Permissions</Text>
        </View>
      </Link>

      <Link href="/render-content-by-role">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Render Content By Role</Text>
        </View>
      </Link>

      <Link href="/render-content-conditionally/settings">
        <View style={{borderWidth: 2, borderRadius: 10, borderColor: 'black', borderStyle: "solid", padding: 4}}>
          <Text style={{ fontSize: 24 }}>Render Content Conditionally</Text>
        </View>
      </Link>
    </View>
  );
}

