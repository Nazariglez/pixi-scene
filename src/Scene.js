import PIXI from 'pixi.js';

export default class Scene extends PIXI.Container{
  constructor(name){
    super();
    this.name = name;
    this.manager = null;
    this.initialized = false;
  }

  init(){
    //When the scene is renderer for the first time
  }

  _initialize(){
    if(this.initialized)return;
    this.init();
  }
}
