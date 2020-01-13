import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import {createDeck} from '../utils/api';
import { addDeck } from '../actions/index';
import { connect } from 'react-redux';

class NewDeck extends React.Component {

    state = {
        title : '',
        titleValidate: ''

    }

    handleChange = (title) => {
        this.setState({title, titleValidate:''})
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


        if(title){
            createDeck(deck)
            .then(() => {
                this.props.dispatch(addDeck(deck));
                navigation.navigate('Deck', {title});
            })
            
            .catch(() => {
                console.log('Ups, error saving the deck title');
            })

            this.setState(({
                title: ''
            }))

        } else{
            this.setState(({
                titleValidate: 'Please write a title'
            }))
        }

       

 


    
    }

    render() {

        const {titleValidate} = this.state;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>What is the title of your new Deck?</Text>
                <TextInput
                    style={{ padding:10, width: 150, borderColor: 'gray', borderWidth: 1 }}                    
                    placeholder="Deck Title"
                    onChangeText={this.handleChange}
                    value={this.state.title}
                />
                { titleValidate.length > 0 &&    
                    <Text> {titleValidate}
                </Text>}

                <Button
                    title="Submit"
                    onPress={this.handleCreate}
                />
            </View>
        )
    }
}

export default connect()(NewDeck);