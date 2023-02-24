import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    color: "white",
  },
  goalItemContainer: {
    backgroundColor: "#FF751A",
    borderRadius: 10,
    margin: 5,
    padding: 8,
  },
});
