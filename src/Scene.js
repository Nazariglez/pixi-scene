import PIXI from 'pixi.js';

export default class Scene extends PIXI.Container{
  constructor(name){
    super();
    this.name = name;
    this.manager = null;
    this.initialized = false;

    this.tweenManager = new PIXI.tween.TweenManager();
    this.timerManager = new PIXI.timer.TimerManager();
  }

  init(){
    //When the scene is renderer for the first time
  }

  update(delta){
    this.tweenManager.update(delta);
    this.timerManager.update(delta);
    super.update(delta);
  }

  _initialize(){
    if(this.initialized)return;
    this.initialized = true;
    this.init();
  }
}
