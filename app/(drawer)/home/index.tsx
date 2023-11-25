import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>home</Text>
      <Link href="/(drawer)/home/movie/1" asChild>
        <Text>MOVIE PAGE</Text>
      </Link>
    </View>
  );
};
export default Page;
