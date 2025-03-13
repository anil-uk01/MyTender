import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const UserScreen = () => {
  const tenders = useSelector(state => state.tender.tenders);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tender List</Text>

      {tenders.length === 0 ? (
        <Text style={styles.noData}>No tenders available!</Text>
      ) : (
        <FlatList
          data={tenders}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.listContainer}>{item.name}</Text>
              <Text style={styles.listItem}>{item.description}</Text>
              <Text style={styles.listItem}>Close Date: {item.closeDate}</Text>
              <Text style={styles.listItem}>Amount: {item.amount}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Accept Tender</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 30, backgroundColor: 'lightgray'},
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  noData: {textAlign: 'center', fontSize: 18, color: 'gray', marginTop: 20},
  card: {
    backgroundColor: '#F6F0F0',
    borderRadius: 20,
    marginBottom: 30,
    borderBottomColor: 'black',
  },
  button: {
    width: '100%',
    height: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#28a745',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
  listContainer: {
    marginLeft: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    paddingVertical: 12,
    width: '100%',
  },
  listItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    marginLeft: 10,
    textAlign: 'left',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default UserScreen;
