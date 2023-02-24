import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";

export default function GoalInput(props) {
  const [currentGoal, setCurrentGoal] = useState("");

  function onGoalChangedHandler(text) {
    setCurrentGoal(text);
  }

  function addNewGoalHandler() {
    props.onPress(currentGoal);
    setCurrentGoal("");
  }

  return (
    <Modal visible={props.isVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Type here your next goal"
          onChangeText={onGoalChangedHandler}
          value={currentGoal}
        ></TextInput>
        <View style={styles.buttonOkCencelBlockStyle}>
          <View style={styles.bottonStyle}>
            <Button
              color="#222660"
              title="Add goal"
              onPress={addNewGoalHandler}
            ></Button>
          </View>
          <View style={styles.bottonStyle}>
            <Button color="#222660" title="Cancel" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  textInputStyle: {
    // borderWidth: 1,
    color: "#222660",
    width: "100%",
    padding: 8,
    marginBottom: 10,
  },
  buttonOkCencelBlockStyle: {
    flexDirection: "row",
  },
  bottonStyle: {
    width: "25%",
    marginHorizontal: 10,
  },
});
