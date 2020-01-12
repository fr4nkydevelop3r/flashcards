import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import CardQuestion from './CardQuestion';
import CardAnswer from './CardAnswer';

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
   }

   handleCurrent = () => {
       this.setState(({
           currentQuestion: this.state.currentQuestion + 1
       }))
   }
    

    render () {

        const {title, questions} = this.props;
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
                    </View> :

                     showCard === 'question' ?
                        <CardQuestion 
                            question = {questions[currentQuestion]['question']}
                            handleShow={this.handleShow}
                            handleCurrent={this.handleCurrent}
                            handleAnswer={this.handleAnswer}
                        /> :
                        <CardAnswer 
                            answer = {questions[currentQuestion]['answer']}
                            handleShow={this.handleShow}
                            handleCurrent={this.handleCurrent}
                            handleAnswer={this.handleAnswer}
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