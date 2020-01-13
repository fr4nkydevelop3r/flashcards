import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {getDecks,createDeck} from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';


class NewCard extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Add Card'
         };
      };
    

    state = {
        question: '',
        validateQuestion: '',
        answer: '',
        validateAnswer: ''
    }

    addCard = (cards, title) => {



         const { navigation } = this.props;

         const { question, answer } = this.state;
         const deck = {
            [title]: {
                title: title,
                questions: [...cards,{question,answer}]
            }
         } 



        if(answer && question){
            
            this.props.dispatch(addCard({title,question,answer }))
            this.setState(({
                question: '',
                answer:''
            }))

            createDeck(deck)
            .then(() => {        
                navigation.navigate('Deck',{title});
            })
            .catch(() => {
                console.log('Something went wrong');
            })

        } else{
           if(!answer){
               this.setState(({
                   validateAnswer: 'Please write an answer'
               }))
           }
           if(!question){
            this.setState(({
                validateQuestion: 'Please write a question'
            }))
        }

        }


    }

    
    render() {

        const { cards, title }  = this.props;
        const {validateQuestion, validateAnswer} = this.state;


        //console.log(cards);

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    style={{ padding:10, width: 150, borderColor: 'gray', borderWidth: 1 }}                    
                    placeholder="Question"
                    onChangeText={(question) => this.setState({question, validateQuestion: ''})}
                    value={this.state.question}
                />
                {validateQuestion.length > 0 && <Text>{validateQuestion}</Text>}
                
                  <TextInput
                    style={{ padding:10, width: 150, borderColor: 'gray', borderWidth: 1 }}                    
                    placeholder="Answer"
                    onChangeText={(answer) => this.setState({answer, validateAnswer: ''})}
                    value={this.state.answer}
                />

                {validateAnswer.length > 0 && <Text>{validateAnswer}</Text>}
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