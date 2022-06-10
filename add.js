// アルバムデータの作成
let album = [
    { src: 'img/1.jpg', msg: '- 草野資料館 -'},
    { src: 'img/2.jpg', msg: '- 北九州市漫画ミュージアム -'},
    { src: 'img/3.jpg', msg: '- 久留米世界のつばき館 -'},
    { src: 'img/4.jpg', msg: '- 西南学院大学博物館 -'},
    { src: 'img/5.jpg', msg: '- 久留米絣資料館 -'},
    { src: 'img/6.jpg', msg: '- 久留米鳥類センター -'},
    { src: 'img/7.jpg', msg: '- 古賀政男記念館・生家 -'},
    { src: 'img/8.jpg', msg: '- 九州国立博物館 -'},
    { src: 'img/9.jpg', msg: '- 博多の食と文化の博物館 ハクハク -'},
    { src: 'img/10.jpg', msg: '- 中富記念くすり博物館 -'}
];
  
// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);
  
let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;
  
let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);
  
// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}
  
// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});
  
