import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input'
import Button from '../components/Button'

const MemberSign=({navigation})=>{
    const [name,setName]=useState(null);
    const [surname,setSurname]=useState(null);
    const [number,setNumber]=useState(null);
    const [department,setDepartment]=useState(null);
    const [score,setScore]=useState(null);

    function handleSubmit(){
        if(!name || !surname || !number || !department || !score){
            Alert.alert("Bilgiler boş bırakılamaz");
            return;
        }
         const student={
            name,surname,number,department,score
        }
        navigation.navigate('MemberInfoScreen',{student})

    }
    return(
        <SafeAreaView>
            <Input title={'Ad'} placeHolder={'Adınızı giriniz...'} onChange={setName}/>
            <Input title={'Soyad'} placeHolder={'Soyadınızı giriniz...'} onChange={setSurname}/>
            <Input title={'Okul Numarası'} placeHolder={'Okul numaranızı giriniz...'} onChange={setNumber}/>
            <Input title={'Bölümü'} placeHolder={'Bölümünüzü giriniz...'} onChange={setDepartment}/>
            <Input title={'Diploma Puanı'} placeHolder={'Puanınızı giriniz...'} onChange={setScore}/>
            <View style={styles.container}>
                <Button title={'Kayıt Yap'} onPress={handleSubmit}/>
            </View>
        </SafeAreaView>
    )
}
export default MemberSign;

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    }
})