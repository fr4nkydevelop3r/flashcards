import React from 'react';
import { View, Text, Button } from 'react-native';
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
                    title="Quiz"
                    onPress={() =>  navigation.navigate('Quiz', {title}) }
                />
        
            </View>
        )   
    }
}


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