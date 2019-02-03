export class Canvas {
  baseCanvas: CanvasRenderingContext2D;

  constructor(fontOptions: string) {
    this.baseCanvas = this._generateCanvas(fontOptions);
  }

  _generateCanvas = fontOptions => {
    const base = document.createElement("canvas");
    base.hidden = true;
    const renderingContext = base.getContext("2d");
    renderingContext.font = fontOptions;

    return renderingContext;
  };

  textWidth = (text: string) => {
    return this.baseCanvas.measureText(text).width;
  };
}
