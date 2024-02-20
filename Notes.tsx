import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import { slice as notesSlice } from "./store/notes";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 24, textDecorationLine: "underline" },
  note: { minHeight: 24, verticalAlign: "middle" },
  noteText: { fontSize: 18 },
});

function Note({ note }: { note: string }) {
  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  );
}

export function Notes() {
  const notes: string[] = useSelector(notesSlice.selectors.selectNotes);
  return (
    <View>
      <SafeAreaView>
        <Text style={styles.title}>This is the top</Text>
        <FlatList
          data={notes}
          renderItem={(note) => <Note note={note.item} />}
        />
      </SafeAreaView>
    </View>
  );
}
