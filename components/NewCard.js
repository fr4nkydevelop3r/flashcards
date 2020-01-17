import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {createDeck} from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';


class NewCard extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Add Card',
          headerTintColor: '#fe346e'

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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Question"
                    onChangeText={(question) => this.setState({question, validateQuestion: ''})}
                    value={this.state.question}
                />
                {validateQuestion.length > 0 && <Text>{validateQuestion}</Text>}
                
                  <TextInput
                    style={styles.textInput}
                    placeholder="Answer"
                    onChangeText={(answer) => this.setState({answer, validateAnswer: ''})}
                    value={this.state.answer}
                />

                {validateAnswer.length > 0 && <Text>{validateAnswer}</Text>}
                <TouchableOpacity
                    onPress={() => {this.addCard(cards, title)}}
                    style={styles.submitBtn}
                ><Text style={{color: '#fff'}}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

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
        backgroundColor: '#fe34e6',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

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