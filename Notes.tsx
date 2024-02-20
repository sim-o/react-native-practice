import React from "react";
import { FlatList, View, Text } from "react-native";
import { slice as notesSlice } from './store/notes';
import { useSelector } from "react-redux";

function Note({ note }: { note: string }) {
  return (
    <View><Text>{note}</Text></View>
  )
}

export function Notes() {
  const notes: string[] = useSelector(notesSlice.selectors.selectNotes)
  return (
    <View>
      <Text>This is the top</Text>
      <FlatList data={notes} renderItem={(note) => <Note note={note.item} />} />
    </View>
  )
}
