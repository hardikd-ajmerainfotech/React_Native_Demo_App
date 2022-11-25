import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const AddTodo = ({submitHandler}: any) => {
  const [textdata, setTextData] = useState('');
  const chnageHandler = (val: any) => {
    setTextData(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new  todo..."
        onChangeText={chnageHandler}
      />
      <Button
        onPress={() => submitHandler(textdata)}
        title="add todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
export default AddTodo;
