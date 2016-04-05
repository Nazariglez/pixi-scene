import PIXI from'pixi.js';
import SceneManager from './SceneManager';
import Scene from './Scene';
import World from './World';
import Transition from './Transition';

if(!(PIXI.tween&&PIXI.tween.TweenManager) || !(PIXI.timer&&PIXI.timer.TimerManager)){
  console.error("Warning: pixi-scene needs 'pixi-tween'(https://github.com/Nazariglez/pixi-tween) and 'pixi-timer'(https://github.com/Nazariglez/pixi-timer) to work! Install them before use this plugin.");
}

let scene = {
  SceneManager: SceneManager,
  Scene: Scene,
  World: World,
  Transition: Transition
};

if(!PIXI.scene){

  PIXI.Container.prototype.update = function update(delta){
    let len = this.children.length;
    for(let i = 0; i < len; i++)this.children[i].update(delta);
  };

  PIXI.scene = scene;
}

export default scene;
