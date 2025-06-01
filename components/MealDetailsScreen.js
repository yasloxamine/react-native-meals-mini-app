import { View, Text } from "react-native";



function MealDetailsScreen({route}){
    const mealId = route.params.mealId;

    return(

        <View>
            <Text>
         This is the meal details screen
         the id of the chosen meal is : {mealId}
            </Text>
        </View>
    );
}

export default MealDetailsScreen;