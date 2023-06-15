function validateSignUp(){

    const listInput=document.querySelectorAll('.body_form-signUp-input input');
    const btnSignUp=document.querySelector('.confirm-sign-up');

    function showError(input, text){
        const parent=input.parentElement;
        const error=parent.querySelector('.error');
        const line=parent.querySelector('.line');
        error.innerHTML = text;
        line.classList.add('active');   
    }

    function showSuccess(input){
        const parent=input.parentElement;
        const error=parent.querySelector('.error');
        const line=parent.querySelector('.line');
        error.innerHTML = '';
        line.classList.remove('active');
    }

    function checkFill(input){
        if(input.value.trim()==""){
            showError(input, 'Không được để trống!');
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }

    function checkLength(input, min, max){
        if(input.value.trim().length<min){
            showError(input, `Ít nhất ${min} ký tự!`);
            return false;
        }else if(input.value.trim().length>max){
            showError(input, `Tối đa ${max} ký tự!`);
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }

    function checkEmail(input){
        const regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!regex.test(input.value)){
            showError(input, 'Sai định dạng email!');
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }

    function checkPhoneNumber(input){
        const regex=/(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        if(!regex.test(input.value)){
            showError(input, 'Định dạng số điện thoại chưa đúng!');
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }

    function checkPassword(input_1, input_2){
        if(input_1.value.trim()!=input_2.value.trim()){
            showError(input_2, 'Mật khẩu không trùng khớp!');
            return false;
        }else{
            showSuccess(input_2);
            return true;
        }
    }

    listInput.forEach((items, index)=>{
        items.addEventListener('focusout', e=>{
            const check=checkFill(items);
            if(index==0 && check){
                checkLength(items, 6, 20);
            }
            if(index==1 && check){
                checkEmail(items);
            }
            if(index==2 && check){
                checkPhoneNumber(items);
            }
            if(index==4 && check){
                checkPassword(listInput[3], items);
            }
        })
    })



}

validateSignUp();