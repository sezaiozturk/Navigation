import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const MemberInfo=({route})=>{
    const {student}=route.params;
    return(
        <SafeAreaView>
            <Text style={styles.title}>{"Kayıt Tamamlandı!"}</Text>
            <Text style={styles.text}>{student.name}</Text>
            <Text style={styles.text}>{student.surname}</Text>
            <Text style={styles.text}>{student.number}</Text>
            <Text style={styles.text}>{student.department}</Text>
            <Text style={styles.text}>{student.score}</Text>
        </SafeAreaView>
    )
}
export default MemberInfo;

const styles=StyleSheet.create({
    text:{
        fontSize:25,
        marginLeft:25,
        marginBottom:10
    },
    title:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:50
    }
})