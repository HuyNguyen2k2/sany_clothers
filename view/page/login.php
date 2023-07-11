<!-- Login -->
    <div class="container_login banner">
        <div class="container_login-body">
            <h2 class="container_login-body-title">đăng nhập</h2>
            <form class="form-login" method="post" action="handle/account/login.php" onsubmit="return true">
                <div class="container_login-body-signUp">
                    <span>Bạn chưa có tài khoản?</span>
                    <a href="index.php?page=sign_up">Đăng kí</a>
                </div>
                <div class="container_login-body-formLogin">
                    <div class="body_formLogin-input">
                        <input class="user-name input-email" type="text" placeholder="Tên đăng nhập" name="userName">
                        <span class="error"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_formLogin-input">
                        <input class="user-name input-password" type="password" placeholder="Mật khẩu" name="password">
                        <span class="error"></span>
                        <div class="line"></div>
                    </div>
                    <div class="body_formLogin-remember">
                        <input class="remember-acc" type="checkbox">
                        <span>Ghi nhớ tài khoản</span>
                    </div>
                    <div class="body_formLogin-confirm">
                        <a href="#" class="forget">Quên mật khẩu?</a>
                        <input type="submit" value="Đăng nhập" name="confirm">
                    </div>
                </div>
            </form>
        </div>
    </div>