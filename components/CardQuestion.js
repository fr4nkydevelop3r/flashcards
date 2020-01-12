import React from 'react';
import {View, Text, Button} from 'react-native';

class CardQuestion extends React.Component {

    handleAnswer = (answer) => {
        this.props.handleCurrent();
        if(answer === 'correct')
            this.props.handleAnswer('correct');
        else
            this.props.handleAnswer('incorrect');
    }


    render () {

        const {question} = this.props;

        return (
            <View>
                <Text>{question}</Text>
                <Button
                    title="Answer"
                    onPress={() => this.props.handleShow('answer') }
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

export default CardQuestion;