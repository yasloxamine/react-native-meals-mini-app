import { Text,View, StyleSheet } from "react-native";

function List({data}){
return(
data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
    <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  )));
}

export default List;

const styles = StyleSheet.create({
listItem:{
    borderRadius:6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginVertical:4,
    marginHorizontal:12,
    backgroundColor:"#3F72AF"
},
itemText:{
    color:"white",
    textAlign:"center"
}
});