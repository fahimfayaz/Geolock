import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import {firebase} from './config';

const GfGApp = () => {
	const header = ['Name', 'Address', 'Date & Time']
	const data = [
		['fayaz', 'gfg1', 'gfg2'],
		['fayaz', 'gfg4', 'gfg5'],
		['fayaz', 'gfg7', 'gfg8']
	]

  const [users, setUsers] = useState([]);
  const locRef = firebase.firestore().collection('location');

  useEffect(async () => {
    locRef
    .onSnapShot(
        querySnapShot => {
          const users = [];
          querySnapShot.foreach((doc) => {
            const {text} = doc.data()
            users.push({
              //id: doc.id,
              //head,
              text,
            })
          })
          setUsers(users)
        }
      )
  }, [])

	return (
		<View style={ styles.container }>
			<Text style={{ fontSize: 18 }}>
				Location Callback</Text>
			<Table style={styles.head} textStyle={styles.text}>
				<Row data={header} />
        </Table>
{/*         <Table borderStyle={{ borderWidth: 1,
				borderColor: '#000000' }}>
				<Rows data={users} />
			</Table> */}
      <FlatList 
        renderItem={({item}) => (
            <Pressable>
              <View>
                <Text>{item.users}</Text>
              </View>
            </Pressable>
          )}
      />
		</View>
	);
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#ffffff' 
  },
  head: { 
    height: 30, 
    backgroundColor: '#6F7BD0',
    borderColor: '#000000',
    marginTop: 5,
  },
  text: { 
    textAlign: 'center', 
    fontWeight: '200', 
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' 
  }
});

export default GfGApp;
