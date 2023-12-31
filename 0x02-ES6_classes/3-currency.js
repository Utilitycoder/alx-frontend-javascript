export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Code
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Display
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
