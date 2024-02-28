class shapes {
    constructor(text, textColor, shape, color) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.color = color;
    }

    generateSVG() {
        return `<svg width="300" height="200">
        <text x="50" y="80" fill="${this.textColor}" font-size="26" text-anchor="middle">${this.text}</text>
        </svg>`;
}
}

class triangle extends shapes {
    constructor(text, textColor, color){
    super(text, textColor, 'triangle', color)
    }

    generateSVG() {
        return `<svg width="300" height="200">
        <polygon points="50,0 0,100 100,100" fill="${this.color}" />
        <text x="50" y="80" fill="${this.textColor}" font-size="26" text-anchor="middle">${this.text}</text>
        </svg>`;
}
};

class square extends shapes {
    constructor(text, textColor, color){
    super(text, textColor, 'square', color)
    }
    generateSVG(){
        return `<svg width="250" height="250"> <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
        <text x="50" y="60" fill="${this.textColor}" 
        font-size="30" text-anchor="middle">${this.text}</text>
        </svg>`;
}
};


class circle extends shapes {
    constructor(text, textColor, color){
    super(text, textColor, 'circle', color)
}
    generateSVG(){
        return`<svg width="250" height="250"> <circle cx="50" cy="50" r="40" fill="${this.color}" />
        <text x="50" y="60" fill="${this.textColor}" 
        font-size="30" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
};

module.exports = { shapes, triangle, square, circle};