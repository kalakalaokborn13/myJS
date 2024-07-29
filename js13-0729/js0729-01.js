//取得元素的節點
//根據ID屬性
let myjs = document.getElementById('js');
console.log(typeof myjs);//發現屬性是object物件
console.log(myjs);//發現是null空值
console.log(myjs.textContent);

//根據html標籤
let myli = document.getElementsByTagName("li");
//取出css(單一的)
console.log(myli.item(1).textContent);
console.log(myli[1].textContent);

//顯示所有li
for (let i = 0; i < myli.length; i++) {
    console.log(myli.item(i).textContent);
    console.log(myli[i].textContent);
}
console.log('--------querySelector--------');
console.log(document.querySelector('h1'));
console.log('--------getElementsByTagName--------');
console.log(document.getElementsByTagName('h1'));

console.log('--------querySelector--------');
console.log(document.querySelector('h1').textContent);
console.log('--------getElementsByTagName--------');
console.log(document.getElementsByTagName('h1').item(0).textContent);
console.log(document.getElementsByTagName('h1')[0].textContent);

//使用類別名稱
let mySubject= document.getElementsByClassName('subject');
console.log(mySubject);
for(let i=0;i<mySubject.length;i++){
    console.log(mySubject.item(i).textContent);
    console.log(mySubject[i].textContent);
}
//顯示指定的內容(必須有id)
console.log(mySubject['html'].textContent);//[]裡面要id名稱
console.log(mySubject['css'].textContent);

//取得id#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

//取得li中的p
let myP=document.querySelector('p');
console.log(myP);
//取得li中的子元素有p標籤的
let myDivp=document.querySelectorAll('li>div>p');
console.log(myDivp);
console.log(myDivp[0],textContent0);

