import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { slice as notesSlice } from "./store/notes";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 24, textDecorationLine: "underline" },
  note: { minHeight: 24, verticalAlign: "middle" },
  noteText: { fontSize: 18 },
});

function Note({
  note,
  edit,
  onTap,
  onChange,
}: {
  note: string;
  edit: boolean;
  onTap: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <View style={styles.note} onTouchEnd={onTap}>
      {!edit ? (
        <Text style={styles.noteText}>{note}</Text>
      ) : (
        <TextInput value={note} onChangeText={(v) => onChange(v)} />
      )}
    </View>
  );
}

export function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector(notesSlice.selectors.selectNotes);
  const [editing, setEditing] = useState(-1);

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.title}>This is the top</Text>
        <FlatList
          data={notes}
          renderItem={(note) => (
            <Note
              note={note.item.value}
              edit={note.item.id === editing}
              onTap={() => {
                setEditing(note.item.id);
              }}
              onChange={(value) => {
                dispatch(notesSlice.actions.updateNote({ id: note.item.id, value }))
              }}
            />
          )}
        />
        <Button title="Add Note" onPress={() => dispatch(notesSlice.actions.newNote('enter note...'))}/>
      </SafeAreaView>
    </View>
  );
}
