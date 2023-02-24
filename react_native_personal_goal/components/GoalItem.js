import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
