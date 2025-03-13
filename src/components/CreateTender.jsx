import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTender} from '../redux/actions/tenderAction';

const CreateTender = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    description: '',
    closeDate: '',
    amount: '',
  });

  const handleChange = (key, value) => {
    setForm(prevForm => ({...prevForm, [key]: value}));
  };

  const handleSubmit = () => {
    if (!form.name || !form.description || !form.closeDate || !form.amount) {
      alert('fill all data!');
      return;
    }

    const newTender = {
      id: Date.now(),
      ...form,
    };

    dispatch(addTender(newTender));
    alert('Tender Created Successfully!');

    setForm({name: '', description: '', CloseDate: '', Amount: ''});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Tender</Text>
      <TextInput
        style={styles.input}
        placeholder="Tender Name"
        onChangeText={text => handleChange('name', text)}
        value={form.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Tender Description"
        onChangeText={text => handleChange('description', text)}
        value={form.description}
      />
      <TextInput
        style={styles.input}
        placeholder="Close Date"
        onChangeText={text => handleChange('closeDate', text)}
        value={form.closeDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        onChangeText={text => handleChange('amount', text)}
        value={form.amount}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Tender</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#4c41',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
});

export default CreateTender;
