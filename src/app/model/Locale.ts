export class Locale {

  private _country: string;
  private _city: string;

  constructor(country: string, city: string) {
    this._country = country;
    this._city = city;
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
