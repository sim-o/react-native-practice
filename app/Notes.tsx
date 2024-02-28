import React  from "react";
import {
  Button,
  SafeAreaView,
  TextInput,
  View,
  Text,
} from "react-native";
import { notes as notesSlice } from "../store/notes";
import { useAppDispatch, useAppSelector } from "./hooks";
import { FlashList } from "@shopify/flash-list";

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
          className="text-biggish text-blue-800"
          value={note}
          autoFocus
          onChangeText={(v) => onChange(v)}
        />
      )}
    </View>
  );
}

export function Notes() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(notesSlice.selectors.selectNotes);
  const editing = useAppSelector(notesSlice.selectors.editing);

  return (
    <View>
      <SafeAreaView>
        <Text className="text-underline text-xl font-bold">
          This is the top
        </Text>
        <FlashList
          data={notes}
          estimatedItemSize={41}
          extraData={{ editing }}
          renderItem={({ item, extraData: { editing } }) => (
            <Note
              note={item.value}
              edit={item.id === editing}
              onTap={() => dispatch(notesSlice.actions.edit(item.id))}
              onChange={(value) => {
                dispatch(notesSlice.actions.updateNote({ id: item.id, value }));
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
