import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
let oneDigit = require('./assets/one.wav');

const SoundDemo = () => {
    const playSound = () => {
        Sound.setCategory('Playback');
        const music = new Sound(oneDigit, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
        });
        music.play();
        music.release();
    }
    return <View style={styles.container}>
        <Text style={styles.title}>Press Any Button To Hear Spanish Digits Pronunciation</Text>
        <View style={styles.subContainer}>
            <TouchableOpacity onPress={playSound}>
                <Text style={styles.button}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button}>2</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
            <TouchableOpacity>
                <Text style={styles.button}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button}>4</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
            <TouchableOpacity>
                <Text style={styles.button}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button}>6</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
            <TouchableOpacity>
                <Text style={styles.button}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button}>8</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
            <TouchableOpacity>
                <Text style={styles.button}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button}>10</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdc0c0',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignContent: 'space-between',
        paddingVertical: 30,
    },
    title: {
        color: "white",
        fontSize: 20,
        textAlign: 'center'
    },  
    subContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        paddingVertical: 30,
        paddingHorizontal: 40,
        fontSize: 24,
        borderRadius: 10
    }
})

export default SoundDemo;
