import { View, Text,TextInput, StyleSheet} from 'react-native'
import styles from './Input.style'
const Input=({title,placeHolder,onChange})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.input_container}>
                <TextInput placeholder={placeHolder} style={styles.input} onChangeText={onChange} />
            </View>
        </View>
    )
}
export default Input;