import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import {createDeck} from '../utils/api';
import { addDeck } from '../actions/index';
import { connect } from 'react-redux';

class NewDeck extends React.Component {

    state = {
        title : ''
    }

    handleChange = (title) => {
        this.setState({title})
    }

    handleCreate = () => {

        const {title} = this.state;
        const { navigation } = this.props;

        const deck = {
            [title]: {
                title,
                questions: []
            }
        }


        createDeck(deck)
        .then(() => {
            this.props.dispatch(addDeck(deck));
            navigation.navigate('Deck', {title});
        })
        
        .catch(() => {
            console.log('Ups, error saving the deck title');
        })


    
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>What is the title of your new Deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Deck Title"
                    onChangeText={this.handleChange}
                    value={this.state.title}
                />
                <Button
                    title="Submit"
                    onPress={this.handleCreate}
                />
            </View>
        )
    }
}

export default connect()(NewDeck);