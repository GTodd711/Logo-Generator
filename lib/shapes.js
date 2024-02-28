 const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
svg.setAttribute("version", "1.1"); svg.setAttribute("width", "300"); svg.setAttribute("height", "200"); 
const square = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
square.setAttribute("x", "10"); 
square.setAttribute("y", "10"); 
square.setAttribute("width", "50"); 
square.setAttribute("height", "50"); 
square.setAttribute("fill", colorInput); 

const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon"); 
triangle.setAttribute("points", "100,150 50,50 150,50"); 
triangle.setAttribute("fill", colorInput); 

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); 
circle.setAttribute("cx", "150"); 
circle.setAttribute("cy", "100"); 
circle.setAttribute("r", "80"); 
circle.setAttribute("fill", colorInput); 

svg.appendChild(square); 
svg.appendChild(triangle); 
svg.appendChild(circle); 

return svg; 
module.exports = createSVG

