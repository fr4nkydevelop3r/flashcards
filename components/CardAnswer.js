import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class CardAnswer extends React.Component {

    handleAnswer = (answer) => {
        this.props.handleCurrent();
        if(answer === 'correct')
            this.props.handleAnswer('correct');
        else
            this.props.handleAnswer('incorrect');
    }


    render () {

        const {answer, currentQuestion, totalQuestions} = this.props;

        return (
            <View style={styles.container}>
            <Text style={styles.currentQuestion}>{currentQuestion}/{totalQuestions}</Text>
        <View style={styles.questionsOptions}>
            <Text style={styles.question}>{answer}</Text>
            <TouchableOpacity
                onPress={() => this.props.handleShow('question') }   
                style={styles.answerBtn}                     
            > 
                <Text style={{color:'#fff'}}>Question</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => this.handleAnswer('correct') }
                style={styles.correctBtn}
            > 
                <Text style={{color:'#fff'}}>Correct</Text> 
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.handleAnswer('incorrect') }
                style={styles.incorrectBtn}
            >                
                <Text style={{color:'#fff'}}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    </View>
        )
    }
}


const styles = StyleSheet.create({

    container : {
        flex: 1,
        width: 300,
    },
    questionsOptions: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 96
    },
    currentQuestion: {
        marginTop: 64,
        marginLeft: 32,
        fontSize: 20,
        color: '#fe346e',
    },  
    question: {
        fontSize: 20,
        color: '#fe346e',
        textAlign: 'center',
        padding: 10,
        marginBottom: 24
    },
    answerBtn: {
        padding: 10,
        backgroundColor: '#fe34e6',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    correctBtn: {
        padding: 10,
        backgroundColor: '#7fcd91',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12

    },
    incorrectBtn: {
        padding: 10,
        backgroundColor: '#f0134d',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center' 
    }

   
})

export default CardAnswer;