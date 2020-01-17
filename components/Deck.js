import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation-stack';


class Deck extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('title'),
          headerLeft: () => 
          
          <HeaderBackButton  
            onPress={_ => navigation.navigate("DeckList")}
            label='Decks'
            tintColor = '#fe346e' 

            />,
            headerTintColor: '#fe346e'
        };
      };
    

    addCard = () => {
        const { navigation } = this.props;
        const title = navigation.getParam('title');
        navigation.navigate('NewCard', {title});
        
    }

    render() {

        const {cards, title, navigation} = this.props;
        return (

        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text> 
            <Text style={styles.cards}>{cards.length} cards</Text> 
            <TouchableOpacity
                onPress={this.addCard}
                style={styles.btn}
            >
                <Text style={{color: '#fff'}}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Quiz', {title}) }
                style={styles.btn}
            >
                <Text style={{color: '#fff'}}>Start Quiz</Text>
            </TouchableOpacity>
        </View>


        )   
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
        fontSize: 20,
        color: '#111d5e',
        marginBottom: 8
    },
    cards: {
        color: '#111d5e',
        marginBottom: 8

    },
    btn: {
        padding: 10,
        backgroundColor: '#111d5e',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    }
    
  });


function mapStateToProps(decks, ownProps){

    const { navigation } = ownProps
    const key = navigation.getParam('title');


    const cards = decks[key]['questions'];
    return{
        cards,
        title: key
    }
}

export default connect(mapStateToProps, null)(Deck);