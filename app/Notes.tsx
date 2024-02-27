import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  Text,
} from "react-native";
import { notes as notesSlice } from "../store/notes";
import { useAppDispatch, useAppSelector } from "./hooks";
import { styled } from "nativewind";

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
    <View
      className="flex-1 min-h-8 justify-center items-start"
      onTouchEnd={onTap}
    >
      {!edit ? (
        <Text className="text-biggish">{note}</Text>
      ) : (
        <TextInput
          className="text-biggish"
          value={note}
          onChangeText={(v) => onChange(v)}
        />
      )}
    </View>
  );
}

export function Notes() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(notesSlice.selectors.selectNotes);
  const [editing, setEditing] = useState(null as number | null);

  return (
    <View>
      <SafeAreaView>
        <Text className="text-underline text-xl font-bold">
          This is the top
        </Text>
        <FlatList
          data={notes}
          renderItem={(note) => (
            <Note
              note={note.item.value}
              edit={note.item.id === editing}
              onTap={() => setEditing(note.item.id)}
              onChange={(value) => {
                dispatch(
                  notesSlice.actions.updateNote({ id: note.item.id, value }),
                );
              }}
            />
          )}
        />
        <Button
          title="Add Note"
          onPress={() => dispatch(notesSlice.actions.newNote("enter note..."))}
        />
      </SafeAreaView>
    </View>
  );
}
