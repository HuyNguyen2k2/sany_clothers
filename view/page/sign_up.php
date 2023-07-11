<!-- Sign up -->
<div class="container_signUp banner">
        <div class="container_signUp-body">
            <h2 class="container_signUp-body-title">đăng ký tài khoản</h2>

            <form class="from-sign-up" action="handle/account/sign_up.php" onsubmit="return true">

                <div class="container_signUp-body_form-signUp">
                    <div class="body_form-signUp-input">
                        <input type="text" name="username" placeholder="Tên tài khoản">
                        <span class="error"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_form-signUp-input">
                        <input type="mail" name="mail" placeholder="Email">
                        <span class="error"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_form-signUp-input">
                        <input type="text" name="phone" placeholder="Số điện thoại">
                        <span class="error"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_form-signUp-input">
                        <input type="password" name="password" placeholder="Mật khẩu">
                        <span class="error"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_form-signUp-input">
                        <input type="password" name="password" placeholder="Nhập lại mật khẩu">
                        <span class="error"></span>
                        <div class="line"></div>
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