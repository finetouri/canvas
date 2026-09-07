    // Canvasに指定したidで要素を取得
var paper = document.getElementById('paper');
// idから要素を取得できなかったとき
if (typeof paper.getContext === 'undefined') {
return;
}
// コンテキストを取得
// 「2d」というのは、描画領域の種類のこと
var context = paper.getContext('2d');
// Canvasの幅と高さを指定
paper.width = 400;
paper.height = 200;
context.beginPath();
context.moveTo(200, 100);
context.arc(200, 150, 50, 0, Math.PI*2, false);
context.fillStyle = '#ff0000';
context.fill();