export default class Friend {

  private _id: number;
  private _fName: string;
  private _lName: string;
  private _phone: string;
  private _email: string;
  private _country: string;
  private _city:string;
  private _isSaved: boolean;



  constructor(fName: string, lName: string, phone: string, email: string, country: string, city: string) {
    this._fName = fName;
    this._lName = lName;
    this._phone = phone;
    this._email = email;
    this._country = country;
    this._city = city;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get isSaved(): boolean {
    return this._isSaved;
  }

  set isSaved(value: boolean) {
    this._isSaved = value;
  }

  get fName(): string {
    return this._fName;
  }

  set fName(value: string) {
    this._fName = value;
  }

  get lName(): string {
    return this._lName;
  }

  set lName(value: string) {
    this._lName = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
}
