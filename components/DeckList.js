import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

function Item({ navigation, title, questions }) {
  const onPress = () => {
    navigation.navigate('Deck', { title });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.totalCars}>{questions.length} cards</Text>
    </TouchableOpacity>
  );
}

function DeckList({ decks, navigation }) {
  //console.log(decks);
  const listDecks = Object.values(decks);
  //console.log(listDecks);
  return Object.keys(listDecks).length > 0 ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listDecks}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            questions={item.questions}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.title}
        contentContainerStyle={{ justifyContent: 'center' }}
        style={styles.listCards}
      />
    </SafeAreaView>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={styles.noCards}>You don't have decks yet! 🗂️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listCards: {
    marginTop: 50,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fe346e',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderWidth: 2,
    borderBottomRightRadius: 20,
    borderRadius: 5,
    borderColor: '#fe346e',
  },
  title: {
    fontSize: 32,
    color: '#fff',
  },
  totalCars: {
    fontSize: 20,
    color: '#fff',
  },
  noCards: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fe346e',
  },
});

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps, null)(DeckList);
