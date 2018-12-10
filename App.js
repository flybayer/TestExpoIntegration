/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import { GLView } from "expo-gl"
import Expo2DContext from "expo-2d-context"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu",
})

type Props = {}
export default class App extends Component<Props> {
  onContextCreate = gl => {
    var ctx = new Expo2DContext(gl)
    ctx.translate(50, 200)
    ctx.scale(4, 4)
    ctx.fillStyle = "grey"
    ctx.fillRect(20, 40, 100, 100)
    ctx.fillStyle = "white"
    ctx.fillRect(30, 100, 20, 30)
    ctx.fillRect(60, 100, 20, 30)
    ctx.fillRect(90, 100, 20, 30)
    ctx.beginPath()
    ctx.arc(50, 70, 18, 0, 2 * Math.PI)
    ctx.arc(90, 70, 18, 0, 2 * Math.PI)
    ctx.fill()
    ctx.fillStyle = "grey"
    ctx.beginPath()
    ctx.arc(50, 70, 8, 0, 2 * Math.PI)
    ctx.arc(90, 70, 8, 0, 2 * Math.PI)
    ctx.fill()
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(70, 40)
    ctx.lineTo(70, 30)
    ctx.arc(70, 20, 10, 0.5 * Math.PI, 2.5 * Math.PI)
    ctx.stroke()
    ctx.flush()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <GLView
          style={{ flex: 1, borderWidth: 1, width: "100%" }}
          onContextCreate={this.onContextCreate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
})
