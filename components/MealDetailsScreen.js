import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from 'react';

import { MEALS } from "../data/dummy-data";
import MealDetails from "./MealDetails";
import Subtitle from "./MealDetail/Subtitle";
import List from "./MealDetail/List";
import IconButton from "./IconButton";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

function HeaderButtonPressHandler(){
    console.log("pressed");
}

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () => {
            return <IconButton icon="star" color="white" onPress={HeaderButtonPressHandler} />
        }
    });
  },[navigation,HeaderButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} /> 
      </View>
      </View>
      
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer:{
    width:'80%'
  },
  listOuterContainer:{
    alignItems:'center',
  }
});
