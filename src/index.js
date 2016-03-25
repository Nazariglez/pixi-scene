import PIXI from'pixi.js';
import SceneManager from './SceneManager';
import Scene from './Scene';

if(!(PIXI.tween&&PIXI.tween.TweenManager) || !(PIXI.timer&&PIXI.timer.TimerManager)){
  console.error("Warning: pixi-scene needs 'pixi-tween'(https://github.com/Nazariglez/pixi-tween) and 'pixi-timer'(https://github.com/Nazariglez/pixi-timer) to work! Install them before use this plugin.");
}

if(!PIXI.SceneManager){

  PIXI.Container.prototype.update = function update(delta){
    let len = this.children.length;
    for(let i = 0; i < len; i++)this.children[i].update(delta);
  };

  PIXI.SceneManager = SceneManager;
  PIXI.Scene = Scene;
}

export default {
  SceneManager : SceneManager,
  Scene : Scene
};
