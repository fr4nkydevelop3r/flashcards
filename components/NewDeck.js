import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <Text style={styles.deckTitle}>What is the title of your new Deck?</Text>
                <TextInput
                    style={styles.textInput}                    
                    placeholder="Deck Title"
                    onChangeText={this.handleChange}
                    value={this.state.title}
                />
                { titleValidate.length > 0 &&    
                    <Text> {titleValidate}
                </Text>}

                <TouchableOpacity
                    onPress={this.handleCreate}
                    style={styles.submitBtn}
                >
                    <Text style={{color: '#fff'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    deckTitle: {
        padding:10,
        fontSize: 16,
        color: '#fe34e6'
        
    },
    textInput: {
        padding: 10,
        width: 150,
        borderColor: '#111d5e',
        borderWidth:1,
        color: '#fe34e6',
        marginTop: 8,
        marginBottom: 16
         
    },
    submitBtn: {
        padding: 10,
        backgroundColor: '#111d5e',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect()(NewDeck);