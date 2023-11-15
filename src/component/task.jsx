import {Text, View,StyleSheet} from 'react-native';
import react, {useState} from "react"
import CheckBox from "expo-checkbox";
import Swipeoute from 'react-native-swipeout';


export default function Task(props) {
    const handleToggle = () => {
        props.handleComplete()
    }
    let swipeoutBtns = [
        {
            text: 'delete',
            onPress: () => {props.handleDelete()},
            color : 'white',
            backgroundColor: 'red'

        }
    ]
    const styles = StyleSheet.create({
        task: {
            display: 'flex',
            backgroundColor: '#d1caca',
            flexDirection: 'row',
            width: '100%',
            borderRadius: 10,
        },
        hiddentask: {
            display: 'flex',
            backgroundColor: '#928d8d',
            flexDirection: 'row',
            width: '100%',
            borderRadius: 10,
        },
        container:{
            display: 'flex',
            padding: 10,
            marginLeft: 5,
            marginRight: 10,
            borderRadius: 10,

        },
        content: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: 10,
            width: '100%',
        },
    });
    if (props.filter === "hide" && props.completed || props.filter === "active" && !props.completed || props.filter === "all") {
        return (
            <View className="task" style={styles.container}>
                <Swipeoute left={swipeoutBtns} right={swipeoutBtns}
                           style={props.completed ? styles.hiddentask : styles.task}>
                    <View style={styles.content}>
                        <Text>{props.title}</Text>
                        <CheckBox value={props.completed} onTouchEnd={handleToggle}></CheckBox>
                    </View>
                </Swipeoute>
            </View>
        )
    }
}

