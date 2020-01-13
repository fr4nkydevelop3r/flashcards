import React from 'react';
import {View, Text, Button} from 'react-native';

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
            <View>
                <Text>{currentQuestion}/{totalQuestions}</Text>
                <Text>{answer}</Text>
                <Button
                    title="Question"
                    onPress={() => this.props.handleShow('question') }
                />

                <Button
                    title="Correct"
                    onPress={() => this.handleAnswer('correct') }
                />
                <Button
                    title="Incorrect"
                    onPress={() => this.handleAnswer('incorrect') }
                />

            </View>
        )
    }
}

export default CardAnswer;