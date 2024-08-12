//建立一個存放選取變數的結果
let result="";
//取得送出按鈕
let myBtn=document.querySelector('#btn');
//監聽按鈕是否左鍵一下
//↓ add by coffeeteacher on 2024.07.31
myBtn.addEventListener('click',function(){
//取得下拉式方塊
let myCity=document.querySelector('#city');
//使用迴圈，逐一檢查是否被選取=>selected
for(let i=0;i,myCity.length;i++){
    if(myCity[i].selected){
        if(myCity[i].value==""){
            result='尚未選取縣市';
        }else{
            result=myCity[i].value;
        }
        break;
    }
}
console.log('縣市'+result);
});
//↑ add by coffeeteacher  on 2024.07.31