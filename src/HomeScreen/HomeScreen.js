import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to User Data"
                onPress={() => navigation.navigate("UserData")}
            />
        </View>
    );
}

export default HomeScreen;