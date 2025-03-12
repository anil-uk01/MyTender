import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeTender} from '../redux/actions/tenderAction';

const TenderList = () => {
  const tenders = useSelector(state => state.tender.tenders);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Tenders</Text>

      {tenders.length === 0 ? (
        <Text style={styles.noData}>No tenders available!</Text>
      ) : (
        <FlatList
          data={tenders}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Start: {item.startTime}</Text>
              <Text>End: {item.endTime}</Text>

              <TouchableOpacity
                onPress={() => dispatch(removeTender(item.id))}
                style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f5f5f5'},
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  noData: {textAlign: 'center', fontSize: 18, color: 'gray', marginTop: 20},
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  deleteButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteText: {color: '#fff', fontWeight: 'bold'},
});

export default TenderList;
