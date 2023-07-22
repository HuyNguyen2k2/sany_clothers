   <!-- Login -->
   <div class="container_login banner">
        <div class="container_login-body">
            <h2 class="container_login-body-title">đăng nhập</h2>
            <div class="container_login-body-signUp">
                <span>Bạn chưa có tài khoản?</span>
                <a href="index.php?page=sign_up">Đăng kí</a>
            </div>
            <form action="handle/account/login.php" method="post" class="from-login" onsubmit="return true">
                <div class="container_login-body-formLogin">
                    <div class="body_formLogin-input">
                        <input class="user-name input-login input-email"  type="text" placeholder="Email & số điện thoại" name="userName">
                        <span class="erorr"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_formLogin-input">
                        <input class="user-name input-login input-password"  type="password" placeholder="Mật khẩu" name="password">
                        <span class="erorr"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_formLogin-remember">
                        <input class="remember-account" type="checkbox" name="" id="">
                        <span>Ghi nhớ tài khoản</span>
                    </div>
                    <div class="body_formLogin-confirm">
                        <a href="#" class="forget">Quên mật khẩu?</a>
                        <input type="submit" class="btn-login" value="Đăng nhập" name="confirm" id="">
                    </div>
                </div>
            </form>
        </div>
    </div>