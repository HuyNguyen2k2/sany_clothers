function showErorr(input,text){
    const parent=input.parentElement
    const erorr=parent.querySelector('.erorr')
    const line=parent.querySelector('.line')
    erorr.innerHTML = text
    line.classList.add('active')
 }
 
 function showSuccess(input){
     const parent=input.parentElement
    const erorr=parent.querySelector('.erorr')
    const line=parent.querySelector('.line')
    erorr.innerHTML = ''
    line.classList.remove('active')
 }

 function checkFill(input){
     if(input.value.trim()==""){
         showErorr(input,'không được để trống !')
         return false
     }else{
         showSuccess(input)
         return true
     }
 }
 