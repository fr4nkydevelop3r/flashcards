import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, AsyncStorage} from 'react-native';
import {getDecks} from '../utils/api';
import { connect } from 'react-redux';
const DECKS_STORAGE_KEY = 'Decks';




function Item({ title, questions, navigation }) {

    onPress = () => {
      navigation.navigate('Deck', {title, questions});
    }

    return (

      <TouchableOpacity
      style={styles.button}
      onPress={this.onPress}
    > 
     <View>
        <Text >{title}</Text>
        <Text>{questions.length} cards</Text>
      </View>
    </TouchableOpacity>


     
    );
  }

  

class DeckList extends React.Component {

    componentDidMount(){
        /*getDecks()
            then((decks) => {
                if(decks){
                }
            }) */

            AsyncStorage.removeItem(DECKS_STORAGE_KEY);

    }

    render() {

        const {decks, navigation} = this.props;
        //console.log(decks);
        const listDecks = Object.values(decks);
        //console.log(listDecks);

        return (

            Object.keys(listDecks).length > 0 
            
            ?   <SafeAreaView style={styles.container}>
                    <FlatList 
                        data={listDecks}
                        renderItem={({ item }) => <Item title={item.title} questions={item.questions} navigation={navigation} />}
                        keyExtractor={item => item.title}

                        
                    />
                </SafeAreaView> 
            : <View style={styles.container}><Text>You don't have decks yet!</Text></View>
       
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
  });
  

function mapStateToProps(decks){
    return{
        decks
    }
}

export default connect(mapStateToProps,null)(DeckList);