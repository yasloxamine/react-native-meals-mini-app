import { View,Text, StyleSheet } from 'react-native';

function Subtitle({children}){
return(
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
      </View>
)
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
      },
      subtitleContainer:{
        borderBottomWidth:2,
        borderBottomColor:'black',
        marginHorizontal:12,
        marginVertical:4,
        padding:6,
      }
});