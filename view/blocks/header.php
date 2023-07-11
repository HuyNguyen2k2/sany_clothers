<?php
require_once 'head.php';
?>
    <!-- Header -->
    <header class="Header">
        
        <!-- Contact header -->
        <div class="header__contact">
            <ul class="header__contact-list">
                <li class="header__contact-item">
                    <a href="#" class="header__contact-item-link">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li class="header__contact-item">
                    <a href="#" class="header__contact-item-link">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li class="header__contact-item">
                    <a href="#" class="header__contact-item-link">
                        <i class="fa-brands fa-pinterest"></i>
                    </a>
                </li>
                <li class="header__contact-item">
                    <a href="#" class="header__contact-item-link">
                        <i class="fa-brands fa-google"></i>
                    </a>
                </li>
                <li class="header__contact-item">
                    <a href="#" class="header__contact-item-link">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li class="header__contact-item">
                    <span class="header__contact-icon">
                        <i class="fa-solid fa-phone"></i>
                    </span>
                    <span class="header__contact-numphone">
                        0812600873
                    </span>
                </li>
            </ul>
            <ul class="header__contact-list">
                <li class="header__contact-item text-black">hello</li>
            </ul>
        </div>

        <!-- Navbar header -->
        <nav class="header__navbar">
            <ul class="header__navbar-list">
                <li class="header__navbar-item">
                    <a class="header__navbar-item-link" href="index.php?page=home">trang chủ</a>
                </li>
                <li class="header__navbar-item">
                    <a class="header__navbar-item-link" href="#">sản phẩm <i class="fa-solid fa-caret-down"></i></a>
                    
                    <ul class="header__navbar-subnav">
                        <li class="header__navbar-level2">
                            Áo
                            <i class="fa-solid fa-caret-down"></i>
                            <ul class="header__navbar-level3">
                                <li class="header__navbar-level3-item"><a href="#">Áo Thun</a></li>
                                <li class="header__navbar-level3-item"><a href="#">Áo Polo</a></li>
                                <li class="header__navbar-level3-item"><a href="#">Áo Sơ Mi</a></li>
                            </ul>
                        </li>
                        <li class="header__navbar-level2">
                            Quần
                            <i class="fa-solid fa-caret-down"></i>
                            <ul class="header__navbar-level3">
                                <li class="header__navbar-level3-item"><a href="#">Quần Dài</a></li>
                                <li class="header__navbar-level3-item"><a href="#">Quần Ngắn</a></li>
                            </ul>
                        </li>
                        <li class="header__navbar-level2">
                            Áo Khoác
                            <i class="fa-solid fa-caret-down"></i>
                            <ul class="header__navbar-level3">
                                <li class="header__navbar-level3-item"><a href="#">Hoodie</a></li>
                                <li class="header__navbar-level3-item"><a href="#">Cardigan</a></li>
                                <li class="header__navbar-level3-item"><a href="#">sweater</a></li>
                                <li class="header__navbar-level3-item"><a href="#">jacket</a></li>
                            </ul>
                        </li><a href="#"></a> 
                        <li class="header__navbar-level2">
                            Phụ Kiện
                            <i class="fa-solid fa-caret-down"></i>
                            <ul class="header__navbar-level3">
                                <li class="header__navbar-level3-item"><a href="#">Nón</a></li>
                                <li class="header__navbar-level3-item"><a href="#">Dép</a></li>
                                <li class="header__navbar-level3-item"><a href="#">Túi Xách</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="header__navbar-item">
                    <a class="header__navbar-item-link" href="#">bài viết</a>
                </li>
                <li class="header__navbar-item">
                    <a class="header__navbar-item-link" href="#">liên hệ</a>
                </li>
            </ul>
            <ul class="header__navbar-list">
                <a class="header__navbar-logo" href="#"><img class="header__navbar-img" src="./assets/imgs/logo.png" alt=""></a>
            </ul>
            <ul class="header__navbar-list">
                <li class="header__navbar-item-icon"><i class="fa-solid fa-magnifying-glass"></i></li>
                <a href="index.php?page=login">
                    <li class="header__navbar-item-icon"><i class="fa-regular fa-user"></i></li>
                </a>
                <a href="index.php?page=info_user">
                    <li class="header__navbar-item-icon"><i class="fa-regular fa-heart"></i></li>
                </a>
                <li class="header__navbar-item-icon icon-cart">
                    <div class="quantity-cart"><span>0</span></div>
                    <i class="fa-solid fa-cart-shopping"></i>
                </li>
            </ul>
        </nav>
    </header>
    <div class="body-cart">
        <div class="space-block"></div>
        <div class="main-body-cart">
            <div class="headline-cart">
                <div class="title">
                    <span class="cart-title">giỏ hàng</span>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
                <div class="total-price">
                    <div class="total">
                        <span>Tổng tiền: </span>
                        <span class="total-price-cart-js">0</span>
                        <span>VND</span>
                    </div>
                </div>
            </div>
            <ul class="list-product-cart">
                <!-- <li class="cart-item">
                    <div class="cart-item-left">
                        <img src="./assets/imgs/cartProduct/sp-1-1.jpg" alt="">
                    </div>
                    <div class="cart-item-right">
                        <div class="top">
                            <div class="name-product">sản phẩm 1</div>
                            <div class="close"><ion-icon name="close-outline"></ion-icon></div>
                        </div>
                        <div class="center">
                            <p>Size: </p>
                            <select name="size" id="">
                                <option value="S">S</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div class="bottom">
                            <div class="add-cart form-quantity">
                                <div class="quantity">
                                    <div class="input">
                                        <p>Quantity: </p>
                                        <input class="number quantity-item" type="number" value="1" min="0">
                                    </div>
                                </div>
                            </div>
                            <div class="price">
                                <p>500,000</p>
                                <span>VND</span>
                            </div>
                        </div>
                    </div>
                    <input class="check-confirm" type="checkbox">
                </li> -->
            </ul>
            <div class="checkout">
                <a href="#">Thanh toán</a>
            </div>
        </div>
    </div>