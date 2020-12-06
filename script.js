const targetElement = document.querySelectorAll(".animationTarget");  //animationTargetがついた要素を取得
console.log("画面の高さ",window.innerHeight);
document.addEventListener("scroll", function() {  //スクロールした時に実行
  for(let i = 0; i < targetElement.length; i++) {  //要素の数だけ実行
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;  //要素の半分ぐらいまでの距離
    //getBoundingClientReact().top: ブラウザの表示領域の一番上から要素の上までの距離

    // console.log(getElementDistance);

    if(window.innerHeight > getElementDistance) {  //もし半分見えたらshowクラスをつける
      targetElement[i].classList.add('show');
    }
  }
});
