import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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

            />,
      
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
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{title}</Text>
                <Text>{cards.length} cards</Text>
                <Button
                    title="Add Card"
                    onPress={this.addCard}
                />
                <Button 
                    title="Start Quiz"
                    onPress={() =>  navigation.navigate('Quiz', {title}) }
                />
            </View>
        )   
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      alignItems: "center",
      justifyContent: "center"
    },
    item: {},
    btn: {
      backgroundColor: "#480032",
      width: 100,
      height: 40,
      padding: 3,
      justifyContent: "center",
      borderRadius: 6
    },
    text: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center"
    },
    item1: {
      backgroundColor: "red",
      padding: 20,
      width: 100,
      margin: 10
    },
  
    textBtn: {
      color: "#f4f4f4",
      fontWeight: "bold",
      textAlign: "center"
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