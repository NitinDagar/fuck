const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = window.innerWidth - 5;
let height = window.innerHeight - 5;

let x;
let y;

let a = {};
let b = {};
let c = {};

let arr = [a, b, c];

function drawPoint(x, y) {
  ctx.fillRect(x, y, 1, 1);
}

function init() {
  canvas.width = width;
  canvas.height = height;
  side = Math.round((2 * height) / Math.sqrt(3));
  a.x = Math.round(width / 2);
  a.y = 0;
  b.x = Math.round(width / 2 + side / 2);
  b.y = height - 1;
  c.x = Math.round(width / 2 - side / 2);
  c.y = height - 1;
  drawPoint(a.x, a.y);
  drawPoint(b.x, b.y);
  drawPoint(c.x, c.y);
}

function drawFirstPoint() {
  x = Math.round(width / 2 - 15);
  y = height - 200;
  drawPoint(x, y);
}

function drawNextPoint() {
  const rndInt = Math.floor(Math.random() * 3);
  x = Math.round((x + arr[rndInt].x) / 2);
  y = Math.round((y + arr[rndInt].y) / 2);
  console.log(rndInt, x, y);
  drawPoint(x, y);
}

function main() {
  init();
  drawFirstPoint();
  setInterval(() => {
    for (let i = 0; i < 100; i++) {
      // change the range to speed up or slow down render
      drawNextPoint();
    }
  }, 0);
}

main();
