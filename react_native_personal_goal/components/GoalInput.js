import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
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
    <View style={styles.inputContainer}>
      <TextInput
        style={{ borderWidth: 0, flex: 1, marginRight: 8, padding: 10 }}
        placeholder="Type here your next goal"
        onChangeText={onGoalChangedHandler}
        value={currentGoal}
      ></TextInput>
      <Button title="Add goal" onPress={addNewGoalHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
});
