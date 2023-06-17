function login(){

    const btnLogin=document.querySelector('.body_formLogin-confirm input');
    const listInput=document.querySelectorAll('.body_formLogin-input input');
    const formLogin=document.querySelector('.form-login');

    const data=JSON.parse(localStorage.getItem('sannyAccount'));
    const listAcc=data?data:[];

    const accLogin={
        name:'',
        password:''
    }

    function checkAcc(input){
        const acc=listAcc.filter(function(items){
            return items.name==input.value;
        })

        if(acc.length>0){
            showSuccess(input);
            accLogin.name=acc[0].name;
            accLogin.password=acc[0].password;
            return true;
        }else{
            showError(input, 'Tài khoản không tồn tại!');
            return false;
        }
    }

    function checkPassword(input){
        if(input.value==accLogin.password){
            showSuccess(input);
            return true;
        }else{
            showError(input, 'Sai mật khẩu kìa má :)))');
            return false;
        }
    }

    btnLogin.addEventListener('click', e=>{
        let check={
            name:false,
            password:false
        };

        listInput.forEach((items, index)=>{
            
            if(index==0){
                check.name=checkFill(items);
                if(check.name){
                    check.name=checkAcc(items);
                }
            }

            if(index==1){
                check.password=checkFill(items);
                if(check.password){
                    check.password=checkPassword(items);
                }
            }

            if(check.name && check.password){
                alert('Đăng nhập thành công!');
                formLogin.onsubmit=function(){
                    return true;
                }
            }

        })
    })

}

login();