export class Canvas {
  baseCanvas: HTMLCanvasElement;
  renderingContext: CanvasRenderingContext2D;

  constructor(fontOptions: string) {
    this.baseCanvas = document.createElement("canvas");
    this.renderingContext = this._generateCanvas(fontOptions);
  }

  _generateCanvas = fontOptions => {
    const renderingContext = this.baseCanvas.getContext("2d");
    renderingContext.font = fontOptions;

    return renderingContext;
  };

  _destroyCanvas = () => {
    document.removeChild(this.baseCanvas);
  };

  textWidth = (text: string) => {
    return this.renderingContext.measureText(text).width;
  };
}
