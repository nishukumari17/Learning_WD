function act(){
    console.log('Page is clicked');
}
document.addEventListener('click',act);
// document.removeEventListener('click',act);

let data=document.querySelector('#wrapper');
data.addEventListener('click',function(event){
    console.log(event);
})