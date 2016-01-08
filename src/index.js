import PIXI from'pixi.js';
import SceneManager from './SceneManager';
import Scene from './Scene';

if(!PIXI.SceneManager){
  PIXI.SceneManager = SceneManager;
  PIXI.Scene = Scene;
}

export default {
  SceneManager : SceneManager,
  Scene : Scene
};
