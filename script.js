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
 // スタイルは描画前に指定
// 塗りつぶしの色を指定
context.fillStyle = '#429955';
// 正方形を描く
// fillRect(x, y, w, h) ... xyが座標、whは幅と高さ
context.fillRect(50, 50, 100, 100);