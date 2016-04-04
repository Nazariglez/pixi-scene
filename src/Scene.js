import PIXI from 'pixi.js';
import World from './World';

export default class Scene extends PIXI.Container{
  constructor(name){
    super();
    this.name = name;
    this.manager = null;
    this.world = null;
    this.initialized = false;

    this.tweenManager = new PIXI.tween.TweenManager();
    this.timerManager = new PIXI.timer.TimerManager();
  }

  createWorld(resolutionX, resolutionY){
    this.world = new World(this);
    this.addChild(this.world);
    if(resolutionX||resolutionY){
      this.world.resolutionX = resolutionX;
      this.world.resolutionY = resolutionY;
      this.world.checkResolution();
    }
    return this.world;
  }

  update(delta){
    this.tweenManager.update(delta);
    this.timerManager.update(delta);
    super.update(delta);
  }

  _initialize(){
    if(this.initialized)return;
    this.initialized = true;
    this.emit('init');
  }
}
