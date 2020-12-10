import * as cuid from 'cuid';

export class Todo {
  private _id: String;
  private _created: String;

  constructor(
    public description: String,
    public done: Boolean = false
  ) {
    this._id = cuid();
    this._created = new Date().toLocaleString(); //year/monday/day hours:minutes:secunds
  }

  public get id(): String {
    return this._id;
  }

  public get created(): String {
    return this._created;
  }

}