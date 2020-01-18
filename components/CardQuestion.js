import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CardQuestion({
  question,
  currentQuestion,
  totalQuestions,
  handleShow,
  handleCurrent,
  handleAnswer,
}) {
  const handleAnswers = answer => {
    handleCurrent();
    if (answer === 'correct') handleAnswer('correct');
    else handleAnswer('incorrect');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.currentQuestion}>
        {currentQuestion}/{totalQuestions}
      </Text>
      <View style={styles.questionsOptions}>
        <Text style={styles.question}>{question}</Text>
        <TouchableOpacity
          onPress={() => handleShow('answer')}
          style={styles.answerBtn}>
          <Text style={{ color: '#fff' }}>Answer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleAnswers('correct')}
          style={styles.correctBtn}>
          <Text style={{ color: '#fff' }}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAnswers('incorrect')}
          style={styles.incorrectBtn}>
          <Text style={{ color: '#fff' }}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
  },
  questionsOptions: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 96,
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
    marginBottom: 24,
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
    marginBottom: 12,
  },
  incorrectBtn: {
    padding: 10,
    backgroundColor: '#f0134d',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardQuestion;
