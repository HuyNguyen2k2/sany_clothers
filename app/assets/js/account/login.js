function login(){
const data=JSON.parse(localStorage.getItem('sannyAccount'))
const listAccount=data?data:[]
const btnLogin=document.querySelector('.btn-login')
const listInput=document.querySelectorAll('.input-login')
const formLogin=document.querySelector('.from-login')
const rememberAccount=document.querySelector('.remember-account')

const accountLogin={
    name:'',
    password:''
}
const account_r= JSON.parse(localStorage.getItem('sannyAccount_r'))
if(account_r){
    listInput[0].value=account_r.name
    listInput[1].value=account_r.password
}

function checkAccount(input){
    const account=listAccount.filter(function(items){
        return items.name==input.value
    })

    if(account.length>0){
        showSuccess(input)
        accountLogin.name=account[0].name
        accountLogin.password=account[0].password
        return true
    }else{
        showErorr(input,'Tài khoản không tồn tại')
        return false
    }
}
function checkPassword(input){
    if(input.value!=accountLogin.password){
        showErorr(input,'sai mat khau')
        return false
    }else{
        showSuccess(input)
        return true
    }
}

btnLogin.addEventListener('click',e=>{
    let check={
        name:false,
        password:false
    }
    listInput.forEach((items,index)=>{
        if(index==0){
            check.name=checkFill(items)
            if(check.name){
              check.name=checkAccount(items)
            }
        }
        if(index==1){
            check.password=checkFill(items)
            if(check.password){
              check.password=checkPassword(items)
            }
        }
        if(check.name && check.password){
            if(rememberAccount.checked){
                localStorage.setItem('sannyAccount_r',JSON.stringify(accountLogin))
            }
            formLogin.onsubmit=function(){
                return true
            }
        }
    })
})
}
login()

