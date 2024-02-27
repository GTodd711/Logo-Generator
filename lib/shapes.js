const colorInput = require('./index.js');

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "100");
svg.setAttribute("height", "100");

const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
square.setAttribute("x", "10");
square.setAttribute("y", "10");
square.setAttribute("width","50");
square.setAttribute("height", "50");
square.setAttribute("fill", colorInput);

const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
triangle.setAttribute

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");