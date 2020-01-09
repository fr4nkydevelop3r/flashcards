import React from 'react';
import { View, Text, Button } from 'react-native';

class Deck extends React.Component {

    addCard = () => {
        console.log('Add card!');
    }

    render() {

        const {navigation} = this.props;
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('questions').length} cards</Text>
                <Button
                    title="Add Card"
                    onPress={this.addCard}
                />
        
            </View>
        )   
    }
}

export default Deck;