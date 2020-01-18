import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CardQuestion from './CardQuestion';
import CardAnswer from './CardAnswer';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

class Quiz extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz',
      headerTintColor: '#fe346e',
    };
  };

  state = {
    showCard: 'question',
    totalQuestions: this.props.questions.length,
    currentQuestion: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
  };

  handleShow = showResult => {
    this.setState({
      showCard: showResult,
    });
  };

  handleAnswer = answer => {
    const { totalIncorrect, totalCorrect, totalQuestions } = this.state;

    this.setState({
      showCard: 'question',
    });

    if (answer === 'correct') {
      this.setState({
        totalCorrect: this.state.totalCorrect + 1,
      });
    } else {
      this.setState({
        totalIncorrect: this.state.totalIncorrect + 1,
      });
    }

    if (totalCorrect + totalIncorrect === totalQuestions - 1) {
      clearLocalNotification().then(setLocalNotification);
    }
  };

  handleCurrent = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  handleResetQuiz = () => {
    this.setState({
      showCard: 'question',
      totalQuestions: this.props.questions.length,
      currentQuestion: 0,
      totalCorrect: 0,
      totalIncorrect: 0,
    });
  };

  render() {
    const { questions } = this.props;
    const {
      totalQuestions,
      showCard,
      currentQuestion,
      totalCorrect,
      totalIncorrect,
    } = this.state;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        {totalQuestions === 0 ? (
          <View style={{ width: 300 }}>
            <Text
              style={{ color: '#fe34e6', fontSize: 20, textAlign: 'center' }}>
              Sorry, you can't take quiz because there aren't cards in the deck.
            </Text>
          </View>
        ) : currentQuestion === totalQuestions ? (
          <View style={styles.container}>
            <Text style={styles.totalText}>
              You got {totalCorrect} correct answers!
            </Text>
            <Text style={styles.totalText}>
              You got {totalIncorrect} incorrect answers!
            </Text>
            <TouchableOpacity
              onPress={() => this.handleResetQuiz()}
              style={styles.resetBtn}>
              <Text style={{ color: '#fff' }}>Reset Quiz</Text>
            </TouchableOpacity>
          </View>
        ) : showCard === 'question' ? (
          <CardQuestion
            question={questions[currentQuestion]['question']}
            handleShow={this.handleShow}
            handleCurrent={this.handleCurrent}
            handleAnswer={this.handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={totalQuestions}
          />
        ) : (
          <CardAnswer
            answer={questions[currentQuestion]['answer']}
            handleShow={this.handleShow}
            handleCurrent={this.handleCurrent}
            handleAnswer={this.handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={totalQuestions}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtn: {
    padding: 10,
    backgroundColor: '#fe34e6',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    padding: 12,
    marginBottom: 16,
    color: '#fe34e6',
    fontSize: 18,
  },
});

function mapStateToProps(decks, ownProps) {
  const { navigation } = ownProps;
  const title = navigation.getParam('title');
  const questions = decks[title]['questions'];
  return {
    title,
    questions,
  };
}

export default connect(mapStateToProps, null)(Quiz);
