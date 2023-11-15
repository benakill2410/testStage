import Task from "./task";
import {Button, StyleSheet, Text, View} from "react-native";
import Dialog from "react-native-dialog";
import {useState} from "react";

export const Tasks = (props) => {
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState("all");
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "title 1",
            completed: false,
        },
        {
            id: 2,
            title: "title 2",
            completed: true,

        },
        {
            id: 3,
            title: "title 3",
            completed: false,

        },
        {
            id: 4,
            title: "title 4",
            completed: false,

        },
    ]);
    const showDialog = () => {
        setVisible(true);
    };
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const handleConfirm = () => {
        setVisible(false);
    };
    const handleComplete = (id) => {
        console.log("complete")
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        }))
    }
    const handleInput = (inputText) => {
        setInputText(inputText)
    }
    const handleSubmit = () => {
        let newTask = {
            id: tasks.length + 1,
            title: inputText,
            completed: false,
        }
        setTasks([...tasks, newTask]);
        setVisible(false);
    }
    const handleCancel = () => {
        setVisible(false);
    };
    const handleFilter = (filter) => {
        setFilter(filter)
    }
    const styles = StyleSheet.create({
        tasks: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin : 5,
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            margin : 5,
        }
    });

        return (
        <View className="tasks" style={styles.tasks}>
            <View style={styles.buttons}>
                <Button title={"all"} onPress={()=> handleFilter("all")} />
                <Button title={"hide"} onPress={()=> handleFilter("hide")} />
                <Button title={"active"} onPress={()=> handleFilter("active")} />
            </View>
            {tasks.map(task => <Task title={task.title} key={task.id} completed={task.completed} handleDelete={()=>handleDelete(task.id)} handleComplete={()=>handleComplete(task.id)} filter={filter} />)}
            <Button title="Add task" onPress={showDialog}/>
                <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
                    <Dialog.Description>
                        <Text>type the name of the task</Text>
                    </Dialog.Description>
                    <Dialog.Input onChangeText={ (inputText) => {handleInput(inputText)} } />
                    <Dialog.Button label="Cancel" onPress={handleCancel}/>
                    <Dialog.Button label="Submit" onPress={handleSubmit}/>
                </Dialog.Container>
        </View>
    )
}