import { StatusBar } from "expo-status-bar";
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

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([
    { text: "Inject react native into the Android", id: 1 },
    { text: "Inject react native into the iOS", id: 2 },
  ]);

  const [isAddNewGoalVisibale, setIsAddNewGoalVisibale] = useState(false);

  function addNewGoalHandler(currentGoal) {
    setGoals((allGoals) => [
      ...allGoals,
      { text: currentGoal, id: Math.random().toString() },
    ]);
  }

  function onDeleteHandler(id) {
    setGoals((allGoals) => {
      return allGoals.filter((item) => item.id !== id);
    });
  }

  function onCloseAddNewGoalHandler() {
    setIsAddNewGoalVisibale(false);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={{ marginBottom: 30 }}>Door to React Native</Text>
      <View style={{ justifyContent: "center", borderWidth: 0 }}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            fontSize: 20,
          }}
        >
          My Goals:
        </Text>
      </View>
      <GoalInput
        isVisible={isAddNewGoalVisibale}
        onPress={addNewGoalHandler}
        onClose={onCloseAddNewGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDelete={onDeleteHandler}
            />
          )}
          keyExtractor={(item, index) => item.id}
        ></FlatList>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={styles.addNewGoalContainer}>
          <Button
            color="#222660"
            title="Add new goal."
            onPress={() => setIsAddNewGoalVisibale(true)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
  addNewGoalContainer: {
    marginVertical: 20,
    width: "50%",
  },
});
