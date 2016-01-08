import PIXI from 'pixi.js';

export default class Scene extends PIXI.Container{
  constructor(name){
    super();
    this.name = name;
    this.manager = null;
  }
}
