import { View, Text,SafeAreaView, StyleSheet,Image, Dimensions} from 'react-native'
import React from 'react'
import Button from '../components/Button';


const Welcome=({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../img/logo.png')} style={styles.image}/>
            </View>
            <View style={styles.inner_container}>
                <Text style={styles.header}>KONYA TEKNİK ÜNİVERSİTESİ</Text>
                <Button title={"Öğrenci Kaydı Oluştur"} onPress={()=>navigation.navigate('MemberSignScreen')}/>
            </View>
        </SafeAreaView>
    )
}
export default Welcome;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        fontSize:25,
        fontWeight:'bold',
        marginBottom:10,
        marginTop:100

    },
    image:{
        width:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width/1.5,
    },
    logo_container:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    inner_container:{
        flex:3,
        alignItems:'center',
        justifyContent:'flex-start',
    }

})