import PIXI from 'pixi.js';
import Scene from './Scene';

export default class SceneManager extends PIXI.Container{
  _scene = null;

  constructor(renderer){
    super();
    this.renderer = renderer;
    this.scenes = [];

    this._fixedWidth = 0;
    this._fixedHeight = 0;

    this.scene = new Scene('initial');
  }

  addScene(scene){
    if(this.scenes.indexOf(scene) !== -1)return this;
    scene.manager = this;
    this.scenes.push(scene);
    return this;
  }

  getSceneByName(name){
    let scene;
    for(let i = 0; i < this.scenes.length; i++){
      if(this.scenes[i].name === name){
        scene = this.scenes[i];
        break;
      }
    }
    return scene;
  }

  goTo(name){
    this.scene = this.getSceneByName(name);
    return this;
  }

  createScene(name){
    let scene = new Scene(name);
    this.addScene(scene);
    return scene;
  }

  resizeScenes(){
    if(this.fixedWidth || this.fixedHeight){
      let scale = Math.min(this.renderer.width/this.fixedWidth, this.renderer.height/this.fixedHeight);
      for(let i = 0; i < this.scenes.length; i++)this._resizeScene(this.scenes[i], scale);
    }
  }

  _resizeScene(scene, scale){
    scene.scale.set(scale);
  }

  get scene(){
    return this._scene;
  }

  set scene(value){
    if(this._scene === value)return;
    this._scene = value;
    this._scene.manager = this;
    this._scene.position.set(this.renderer.width/2, this.renderer.height/2);
    this.addScene(this._scene);
    this.scene._initialize();

    this.resizeScenes();

    this.children.length = 0;
    this.addChildAt(this._scene, 0);
  }

  get fixedHeight(){return this._fixedHeight}
  get fixedWidth(){return this._fixedWidth}

  set fixedWidth(value){
    if(value === this._fixedWidth)return;
    this._fixedWidth = value;
    this.resizeScenes();
  }

  set fixedHeight(value){
    if(value === this._fixedHeight)return;
    this._fixedHeight = value;
    this.resizeScenes();
  }
}
