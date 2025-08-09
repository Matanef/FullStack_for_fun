import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';

export default function App() {
  const [boardSize, setBoardSize] = useState(3);
  const [boardSizeInput, setBoardSizeInput] = useState('3');
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [moleIndex, setMoleIndex] = useState(null);
  const [gameRunning, setGameRunning] = useState(false);

  const scoreRef = useRef(0);

  const windowWidth = Dimensions.get('window').width;
  const boardWidth = Math.min(windowWidth * 0.9, 320);
  const holeSize = boardWidth / boardSize - 4; // -4 for spacing

  useEffect(() => {
    if (gameRunning) {
      const moleInterval = setInterval(() => {
        const newIndex = Math.floor(Math.random() * boardSize * boardSize);
        setMoleIndex(newIndex);
      }, 1000);

      const timerInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(moleInterval);
            clearInterval(timerInterval);
            setGameRunning(false);
            if (scoreRef.current > topScore) {
              setTopScore(scoreRef.current);
            }
            Alert.alert('Game Over', `Final Score: ${scoreRef.current}`);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(moleInterval);
        clearInterval(timerInterval);
      };
    }
  }, [gameRunning]);

  const createGrid = () => {
    const tempGrid = Array(boardSize * boardSize).fill(0);
    setGrid(tempGrid);
  };

  const startGame = () => {
  const parsedSize = parseInt(boardSizeInput);
  const size = isNaN(parsedSize) ? 3 : Math.max(1, Math.min(10, parsedSize));
  setBoardSize(size);
  createGrid(size);
  setScore(0);
  scoreRef.current = 0;
  setTimeLeft(30);
  setGameRunning(true);
  };

  const handlePress = (index) => {
    if (!gameRunning) return;

    if (index === moleIndex) {
      scoreRef.current += 1;
      setScore(scoreRef.current);
      setMoleIndex(null);
    } else {
      scoreRef.current -= 1;
      setScore(scoreRef.current);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Whac-A-Mole</Text>

      <View style={styles.controls}>
        <Text>Board Size:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={boardSizeInput}
          onChangeText={(text) => setBoardSizeInput(text)

          }
        />
        <TouchableOpacity style={styles.button} onPress={startGame}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scoreRow}>
        <Text>Score: {score}</Text>
        <Text>Top Score: {topScore}</Text>
        <Text>Time: {timeLeft}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: boardWidth,
        }}
      >
        {grid.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              {
                width: holeSize,
                height: holeSize,
              },
              styles.hole,
              moleIndex === index && styles.mole,
            ]}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  controls: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    width: 100,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1abc9c',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 20,
  },
  hole: {
    backgroundColor: '#a67c52',
    margin: 2,
    borderRadius: 50,
  },
  mole: {
    backgroundColor: 'brown',
  },
});
