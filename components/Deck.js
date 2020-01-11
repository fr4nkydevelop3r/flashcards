import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'

class Deck extends React.Component {

    addCard = () => {
        const { navigation } = this.props;
        const title = navigation.getParam('title');
        navigation.navigate('NewCard', {title});
        
    }

    render() {

        const {cards, title} = this.props;
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{title}</Text>
                <Text>{cards.length} cards</Text>
                <Button
                    title="Add Card"
                    onPress={this.addCard}
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