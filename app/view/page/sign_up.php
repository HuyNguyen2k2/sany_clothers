  <!-- Sign up -->
  <div class="container_signUp banner">
        <div class="container_signUp-body">
            <h2 class="container_signUp-body-title">đăng ký tài khoản</h2>

            <form class="form-sign-up" method="post" action="handle/account/sign_up.php"  onsubmit="return true">

                <div class="container_signUp-body_form-signUp">
                    <div class="body_form-signUp-input">
                         <span class="erorr "></span>
                         <div class="line"></div>    
                        <input type="text" name="user" placeholder="Tài khoản">
                    </div>
                    <div class="body_form-signUp-input">
                         <span class="erorr "></span>
                         <div class="line "></div>    
                        <input type="mail" name="mail" placeholder="Email">
                    </div>
                    <div class="body_form-signUp-input">
                         <span class="erorr"></span>
                         <div class="line"></div>    
                        <input type="text" name="phone" placeholder="Số điện thoại">
                    </div>
                    <div class="body_form-signUp-input">
                         <span class="erorr"></span>
                         <div class="line"></div>    
                        <input type="password" name="password" placeholder="Mật khẩu">
                    </div>
                    <div class="body_form-signUp-input">
                         <span class="erorr"></span>
                         <div class="line"></div>    
                        <input type="password" name="passwordConfirm" placeholder="Nhập lại mật khẩu">
                    </div>
                    <div class="body_form-signUp-remember">
                        <input type="checkbox">
                        <span>Tôi đồng ý với các điều khoản và điều kiện, chính sách bảo mật và chính sách cookie</span>
                    </div>
                    <div class="body_form-signUp-confirm">
                        <input type="submit" class="confirm-sign-up" name="confirmSignUp" value="Đăng ký">
                    </div>
                </div>
            </form>
        </div>
    </div>