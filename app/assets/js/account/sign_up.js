function validateSignUp(){
    const listInput=document.querySelectorAll('.body_form-signUp-input input')
    const btnSignUp=document.querySelector('.confirm-sign-up')
    const formSignUp=document.querySelector('.form-sign-up')

    const data=JSON.parse(localStorage.getItem('sannyAccount'))

    const listAccount=data?data:[]

    const checkSignUp={
        name:false,
        mail:false,
        phone:false,
        password:false
    }

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
    listInput.forEach((items,index)=>{
        items.addEventListener('focusout',e=>{
            const check = checkFill(items)
            if(index==0 && check){
              checkSignUp.name=checkLength(items,3,15)
            }
            if(index==1 && check){
               checkSignUp.mail=checkEmail(items)
            }
            if(index==2 && check){
               checkSignUp.phone= checkPhone(items)
            }
            if(index==3 && check){
               checkSignUp.password= checkLength(items,4,15)
            }
            if(index==4 && check){
               checkSignUp.password=checkPassword(listInput[3],items)
            }
        })

    })

    function checkEmail(input){
        const regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!regex.test(input.value)){
            showErorr(input,'Sai định dạng mail !')
            return false
        }else{
            showSuccess(input)
            return true
        }
    }
    function checkPhone(input){
        const regex=/(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        if(!regex.test(input.value)){
            showErorr(input,'Sai định dạng số điện thoại')
            return false
        }else{
            showSuccess(input)
            return true 
        }
    }

    function checkLength(input,min,max){
        if(input.value.trim().length<min){
            showErorr(input,`Ít nhất ${min} ký tự !`)
            return false
        }else if(input.value.trim().length>max){
            showErorr(input,`nhiều nhất ${max} ký tự !`)
            return false
        }else{
            showSuccess(input)
            return true
        }
    }


    function checkPassword(input_1,input_2){
        if(input_1.value.trim()!= input_2.value.trim()){
            showErorr(input_2,'Mật khẩu không trùng khớp')
            return false
        }else{
            showSuccess(input_2)
            return true 
        }
    }

    btnSignUp.addEventListener('click',e=>{
        listInput.forEach(items=>{
            checkFill(items)
        })
        if(checkSignUp.name && checkSignUp.phone && checkSignUp.mail && checkSignUp.password){

            const account={
                name:listInput[0].value,
                mail:listInput[1].value,
                phone:listInput[2].value,
                password:listInput[3].value
            }
            listAccount.push(account)
            localStorage.setItem('sannyAccount',JSON.stringify(listAccount))

            formSignUp.onsubmit=function(){
                return true
            }
        }
    })
   
}
validateSignUp()