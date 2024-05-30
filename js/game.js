/* global Phaser */

// Copyright (c) 2024 Calista.E ALL Rights reserved
//
// Created by: Calista.E,Manya
// Created on: Apr 2024
// This is the Phaser3 game configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScence from "./titleScene.js"
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"

// create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScence()
const menuScene = new MenuScene()
const gameScene =new GameScene()

/** 
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true, 
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// the start scene
game.scene.start("splashScene")
