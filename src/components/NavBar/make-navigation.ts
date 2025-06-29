import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";

export function makeNavigation() {
    type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Category'>;
    const navigation = useNavigation<NavigationProp>();

    return navigation
}