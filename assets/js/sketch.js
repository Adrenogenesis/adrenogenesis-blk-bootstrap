const ROWS = 40;
const COLS = 40;
const LENGTH = 20;
let board, quadrille;
let col, row;
let animate = true;
let al;

function preload() {
  al = loadImage('s1.jpg');
}

function setup() {
  var canvas = createCanvas(COLS * LENGTH, ROWS * LENGTH);
  board = createQuadrille(COLS, ROWS);
  quadrille = active(int(random(14)));
  col = int(random(0, COLS - 4));
  row = int(random(0, ROWS - 4));
  canvas.parent('sketch-holder');
}

let img;

function preload() {
  // Load the image in the preload function
  img = loadImage('omega.gif');  
}

function draw() {
  // Set the background to the image
  background(img);
  if ((frameCount % 15 === 0) && animate) {
    stick('u');
  }
  drawQuadrille(board, { cellLength: LENGTH, outline: 'rgba(217, 161, 63, 0.2)', board: true });
  drawQuadrille(quadrille, { col: col, row: row, cellLength: LENGTH, outline: '#1EB2A6', board: true });
}


function keyPressed() {
  if (key === 'c') {
    board.clear();
  }
  if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5') {
    quadrille = active(parseInt(key));
  }
  if (key === 'u' || key === 'x' || key === 'i' || key === 'd') {
    stick(key);
  }
  if (key === 'f') {
    quadrille.reflect();
  }
  if (key === 'r') {
    quadrille.rotate();
  }
  if (key === 't') {
    quadrille.transpose();
  }
  if (key === 'q') {
    animate = !animate;
  }
  row = key === 'w' ? row - 1 : key === 'z' ? row + 1 : row;
  col = key === 'a' ? col - 1 : key === 's' ? col + 1 : col;
}

function stick(key) {
  let clone = quadrille.clone();  
  clone.fill(color('rgba(107, 98, 82, 0.58)'));
  board = key === 'u' ? Quadrille.OR(board, clone, row, col) :
          key === 'x' ? Quadrille.XOR(board, clone, row, col) :
          key === 'i' ? Quadrille.AND(board, clone, row, col) :
                        Quadrille.DIFF(board, clone, row, col);
  quadrille = active(int(random(14)));
  col = int(random(0, COLS - 4));
  row = int(random(0, ROWS - 4));  
  cell = createQuadrille(5, 'Jenesis'); 
}

function active(value) {
  let c1 = color(random(255), random(255), random(255), 255);
  let c2 = color(random(255), random(255), random(255), 255);
  let c3 = color(random(255), random(255), random(255), 255);
  let e1 = 'Ω';
  let e2 = 'Ø';
  let e3 = '?';
  let e4 = 'µ';
  let e5 = '■';

  switch (value) {
    case 1:
      return createQuadrille([[c1, 's'],
                              [0,  'u', al],
                              [al, 'b'],
                              [e1, c2, c3],
                              [e4, e5, e2, e3]
                              ]);
    case 2:
      return createQuadrille(2, [c1, al, c3, e1, c2]);
    case 3:
      return createQuadrille(4, int(random(1, 1048576)), c2);
    case 4:
      return createQuadrille(5, 'Jenesis');
    case 5:
        let k = int(random(2, 6));
        let p = int(random(2, 6));
      return createQuadrille(k, p, color(random(255), random(255), random(255), 255));
    case 6 :
    return createQuadrille(6, 'Substratum');
    case 7 :
      return createQuadrille(2, [e3, e4, c3, e1, e2]);
    case 8 :
    return createQuadrille(5, 'Subspace');
    case 9 :
      return createQuadrille(10, 'An-reya reverse entropy');
    case 10:
      return createQuadrille(1, char(int(random(65, 91))));
    case 11 :
        return createQuadrille(8, 'Omega singularity');
    case 12:
      return createQuadrille(1, char(int(random(65, 91))));
      case 13:
      return createQuadrille(5, 'Beyond');
    default:
      let w = int(random(2, 6));
      let h = int(random(2, 6));
      return createQuadrille(w, h, int(random(1, w * h)), c3);
      
  }
}
