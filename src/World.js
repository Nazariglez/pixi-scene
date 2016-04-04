import PIXI from 'pixi.js';

export default class World extends PIXI.Container{
  _resolutionX = null;
  _resolutionY = null;

  constructor(scene){
    super();
    this._dirtyResolution = false;
    this.scene = scene;
  }

  update(delta){
    super.update(delta);
    this.checkResolution();
  }

  checkResolution(){
    if(this._dirtyResolution){
      this._dirtyResolution = false;
      if(this._resolutionX&&this._resolutionY){
        let renderer = this.scene.manager.renderer;
        this.scale.set(Math.min(renderer.width/this.resolutionX, renderer.height/this.resolutionY));
      }else{
        this.scale.set(1);
      }
    }
  }

  get resolutionX(){ return this._resolutionX; }
  get resolutionY(){ return this._resolutionY; }

  set resolutionX(value){
    if(value !== this._resolutionX){
      this._resolutionX = value;
      this._dirtyResolution = true;
    }
  }
  set resolutionY(value){
    if(value !== this._resolutionY){
      this._resolutionY = value;
      this._dirtyResolution = true;
    }
  }
}
