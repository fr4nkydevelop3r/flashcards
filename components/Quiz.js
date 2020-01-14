import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import CardQuestion from './CardQuestion';
import CardAnswer from './CardAnswer';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

class Quiz extends React.Component{

    state = {
        showCard : 'question',
        totalQuestions: this.props.questions.length,
        currentQuestion: 0,
        totalCorrect: 0,
        totalIncorrect: 0
    }

   handleShow = (showResult) => {
    this.setState(({
        showCard: showResult
    }))
   }

   handleAnswer = (answer) => {

    const { totalIncorrect, totalCorrect, totalQuestions} = this.state;

    this.setState(({
        showCard: 'question'
    }))

    if(answer === 'correct'){
        this.setState(({
            totalCorrect: this.state.totalCorrect + 1
        }))
    } else {
        this.setState(({
            totalIncorrect: this.state.totalIncorrect + 1
        }))
    }

    if((totalCorrect + totalIncorrect) === totalQuestions - 1){
        clearLocalNotification()
        .then(setLocalNotification)
    }


   }

   handleCurrent = () => {
       this.setState(({
           currentQuestion: this.state.currentQuestion + 1
       }))
   }

   handleResetQuiz = () => {
       this.setState(({
        showCard : 'question',
        totalQuestions: this.props.questions.length,
        currentQuestion: 0,
        totalCorrect: 0,
        totalIncorrect: 0  
       }))

   }
    

    render () {

        const {questions} = this.props;
        const { totalQuestions, 
                showCard, 
                currentQuestion, 
                totalCorrect,
                totalIncorrect
            } = this.state;

 

        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                {totalQuestions === 0 ?
                    <Text>Sorry, you can't take quiz because there aren't cards in
                        the deck.
                    </Text>  :


                    currentQuestion === totalQuestions ? 

                    <View>
                        <Text>You got {totalCorrect} correct answers!</Text>
                        <Text>You got {totalIncorrect} incorrect answers!</Text>
                        <Button
                            title="Reset Quiz"
                            onPress={() => this.handleResetQuiz() }
                        />

                    </View> :

                     showCard === 'question' ?
                        <CardQuestion 
                            question = {questions[currentQuestion]['question']}
                            handleShow={this.handleShow}
                            handleCurrent={this.handleCurrent}
                            handleAnswer={this.handleAnswer}
                            currentQuestion={currentQuestion + 1}
                            totalQuestions={totalQuestions}
                        /> :
                        <CardAnswer 
                            answer = {questions[currentQuestion]['answer']}
                            handleShow={this.handleShow}
                            handleCurrent={this.handleCurrent}
                            handleAnswer={this.handleAnswer}
                            currentQuestion={currentQuestion + 1}
                            totalQuestions={totalQuestions}
                        />
                }
            </View>
        )
    }
}


function mapStateToProps(decks, ownProps){
    const { navigation } = ownProps;
    const title = navigation.getParam('title')
    const questions = decks[title]['questions'];
    return {
        title,
        questions
    }

}

export default connect(mapStateToProps, null)(Quiz);