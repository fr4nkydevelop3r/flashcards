import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {getDecks,createDeck} from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';


class NewCard extends React.Component {

    state = {
        question: '',
        answer: ''
    }

    addCard = (cards, title) => {

        getDecks()
        .then((decks) => {
            //console.log(JSON.parse(decks));
        })


         const { navigation } = this.props;

         const { question, answer } = this.state;
         const deck = {
            [title]: {
                title: title,
                questions: [...cards,{question,answer}]
            }
         } 


         this.props.dispatch(addCard({title,question,answer }))


        createDeck(deck)
         .then(() => {
             //this.props.dispatch(addCard({title: title }))
    
             navigation.navigate('Deck',{title});
         })
         .catch(() => {
             console.log('Something went wrong');
         })





         //console.log(questions);  
        /**
         * const deck = {
            [title]: {
                title,
                questions: []
            }
        }
         */


    }
    
    render() {

        const { cards, title }  = this.props;

        //console.log(cards);

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Question"
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                  <TextInput
                    style={{height: 40}}
                    placeholder="Answer"
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <Button
                    title="Submit"
                    onPress={() => {this.addCard(cards, title)}}
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

export default connect(mapStateToProps)(NewCard);