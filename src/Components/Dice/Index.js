import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Dice1 from './images/dice1.png'
import Dice2 from './images/dice2.png'
import Dice3 from './images/dice3.png'
import Dice4 from './images/dice4.png'
import Dice5 from './images/dice5.png'
import Dice6 from './images/dice6.png'

export default () => {
    const[img1 , setImg1] = useState(Dice1);
    const[img2 , setImg2] = useState(Dice1);
    const[score1 , setScore1] = useState(0);
    const[score2 , setScore2] = useState(0);
    const onRollClick = (player) => {
        const randomNo = Math.floor((Math.random() * 6) + 1);
        switch (randomNo) {
            case 1:
                saveScore(player, 1, Dice1);
                break;
            case 2:
                saveScore(player, 2, Dice2);
                break;
            case 3:
                saveScore(player, 3, Dice3);
                break;
            case 4:
                saveScore(player, 4, Dice4);
                break;
            case 5:
                saveScore(player, 5, Dice5);
                break;
            case 6:
                saveScore(player, 6, Dice6);
                break;
            default:
                break;
        }
    }

    const saveScore = (player, point, image) => {
        if(player === 1) {
            setScore1(score1 + point);
            setImg1(image);
        } else {
            setScore2(score2 + point);
            setImg2(image);
        }
        
    }
    return <View style={styles.container}>
        <View style={styles.playerArea}>
            <Text style={styles.scoreText}>Score : {score1}</Text>
            <Image style={styles.imageStyle} source={img1} />
            <TouchableOpacity onPress={() => onRollClick(1)}>
                <Text style={styles.button}>Roll</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.playerArea}>
            <Text style={styles.scoreText}>Score : {score2}</Text>
            <Image style={styles.imageStyle} source={img2} />
            <TouchableOpacity onPress={() => onRollClick(2)}>
                <Text style={styles.button}>Roll</Text>
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
        flexDirection: 'row'
    },
    playerArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },  
    imageStyle : {
        height: 150,
        width: 150
    },  
    button: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        fontSize: 22,
        backgroundColor: '#418ef3',
        marginTop: 20,
        color: 'white',
        borderRadius: 10,
        fontWeight: 'bold',
        borderWidth: 3,
        borderColor: '#0a4cfc',
    }
})