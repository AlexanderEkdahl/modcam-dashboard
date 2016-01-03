import React, { Component } from 'react';
import { linear } from 'd3-scale';
import Dimensions from 'react-dimensions';

class Renderer {
  constructor(width, height, dimensionX, dimensionY, canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.data = [];
    this.xScale = linear();
    this.yScale = linear();
    this.resize(width, height, dimensionX, dimensionY);
  }

  add(point) {
    this.data.push(point);
  }

  clear() {
    this.data = [];
  }

  resize(width, height, dimensionX, dimensionY) {
    this.width = width;
    this.height = height;
    this.xScale.domain([0, dimensionX]).range([0, this.width]);
    this.yScale.domain([0, dimensionY]).range([0, this.height]);
  }

  radius(r = 25, blur = r * 2) {
    let circle = this.circle = document.createElement('canvas'),
        ctx = circle.getContext('2d'),
        r2 = this.r = r + blur;

    circle.width = circle.height = r2 * 2;

    ctx.shadowOffsetX = ctx.shadowOffsetY = r2 * 2;
    ctx.shadowBlur = blur;
    ctx.shadowColor = 'black';

    ctx.beginPath();
    ctx.arc(-r2, -r2, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    return this;
  }

  gradient() {
    this.grad = new Array(256*3);

    let scale = linear()
      .domain([0, 140, 160, 190, 240, 255 ])
      .range(["blue", "cyan", "lime", "yellow", "red"]);

    for (var i = 0; i < 256; i++) {
      var bigint = parseInt(scale(i).substr(1), 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;

      this.grad[i*3 + 0] = r;
      this.grad[i*3 + 1] = g;
      this.grad[i*3 + 2] = b;
    }
  }

  draw() {
    if (!this.circle) this.radius(10, 20);
    if (!this.grad) this.gradient();

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (var i = 0, len = this.data.length, p; i < len; i++) {
      p = this.data[i];
      this.ctx.drawImage(this.circle, this.xScale(p[0]) - this.r, this.yScale(p[1]) - this.r);
    }

    var colored = this.ctx.getImageData(0, 0, this.width, this.height);
    this.colorize(colored.data, this.grad);
    this.ctx.putImageData(colored, 0, 0);
  }

  colorize(pixels, gradient) {
    for (var i = 0, len = pixels.length, j; i < len; i += 4) {
      j = pixels[i + 3] * 3;

      if (j) {
          pixels[i + 0] = gradient[j + 0];
          pixels[i + 1] = gradient[j + 1];
          pixels[i + 2] = gradient[j + 2];
      }
    }
  }
}

class Heatmap extends Component {
  componentDidMount() {
    // console.log("componentDidMount");
    this.heat = new Renderer(
      this.props.containerWidth,
      this.props.containerWidth * this.ratio(),
      this.props.dimensionX,
      this.props.dimensionY,
      this.refs.canvas);
    this.heat.data = this.props.data;

    // console.time('Heatmap draw');
    this.heat.draw();
    // console.timeEnd('Heatmap draw');
  }

  shouldComponentUpdate() {
    // Currently the canvas is redrawn on every interaction
    // should only redraw if sizes or data has changed
    return true;
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
    this.heat.resize(
      this.props.containerWidth,
      this.props.containerWidth * this.ratio(),
      this.props.dimensionX,
      this.props.dimensionY
    )

    // console.time('Heatmap');
    this.heat.draw();
    // console.timeEnd('Heatmap');
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    this.heat = null;
    delete this.heat;
  }

  ratio(){
    return this.props.dimensionY / this.props.dimensionX;
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <img src={this.props.image} style={{width: '100%', display: 'block'}}/>
        <canvas
          ref="canvas"
          width={this.props.containerWidth}
          height={this.props.containerWidth * this.ratio()}
          style={{position: 'absolute', top: 0}}></canvas>
      </div>
    );
  }
}

export default Dimensions()(Heatmap)
