// ColorToggle.ts
class ColorToggle {
  private _state: boolean;

  constructor() {
    this._state = false;
  }

  toggle() {
    this._state = !this._state;
  }

  get state() {
    return this._state;
  }
}

const colorToggle = new ColorToggle();
export default colorToggle;
