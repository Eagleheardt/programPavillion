export class SquareInfo extends HTMLButtonElement{
  private _HasShip: boolean = false;
  private _IsHit: boolean = false;

  public readonly _RightPath: string = "assets/challenges/battleship/battleshipIcon.png";
  public readonly _WrongPath: string = "assets/challenges/battleship/wrong.png";

  public HasShip(): boolean{
    return this._HasShip;
  }

  public setHasShip(doesItHaveAShip: boolean){
    this._HasShip = doesItHaveAShip;
  }

  public IsHit(): boolean{
    return this._IsHit;
  }

  public setIsHit(hasItBeenHit: boolean){
    this._IsHit = hasItBeenHit;
  }

  constructor() {
    super();
  }
}
