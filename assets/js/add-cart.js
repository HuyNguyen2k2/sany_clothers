function handleAddCart(){

    const list_product=document.querySelectorAll('.body__product-item');

    const wrapProductCart=document.querySelector('.list-product-cart');

    const total=document.querySelector('.total-price .total span:nth-child(2)');
    
    let sum=0;

    list_product.forEach(items =>{
        const btn=items.querySelector('.btn-confirm');
        btn.addEventListener('click', function(){
            const getNameProduct=items.querySelector('.content-product .name-product').innerHTML;    //Lấy tên san phẩm
            const getPriceProduct=items.querySelector('.content-product .price-product span:nth-child(1)').innerHTML;    //Lấy giá sản phẩm
            const getListSizeProduct=items.querySelectorAll('.option-size input');      //Lấy size đồ 
            let valueSize='M';
            getListSizeProduct.forEach(input =>{
                if(input.checked){
                    valueSize=input.value;
                }
            })
            const getImgProduct=items.querySelector('.img-product-js').src
            const getQuantityProduct=items.querySelector('.quantity-add-cart').value;

            addCart(getNameProduct, getImgProduct, getPriceProduct, valueSize, getQuantityProduct);

            removeItemCart();
        })
    })

    function addCart(nameProduct, imgProduct, priceProduct, sizeProduct, quantityProduct) {
        const wrap=document.createElement('li');
        wrap.className='cart-item';

        const content=`
                    <div class="cart-item-left">
                        <img src="${imgProduct}" alt="">
                    </div>
                    <div class="cart-item-right">
                        <div class="top">
                            <div class="name-product">${nameProduct}</div>
                            <div class="close"><ion-icon name="close-outline"></ion-icon></div>
                        </div>
                        <div class="center">
                            <p>Size: </p>
                            <select name="size" id="">
                                <option value="S">${sizeProduct}</option>
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
                                        <input class="number quantity-item" type="number" value="${quantityProduct}" min="0">
                                    </div>
                                </div>
                            </div>
                            <div class="price">
                                <span>${priceProduct}</span>
                                <span>VND</span>
                            </div>
                        </div>
                    </div>
                    <input class="check-confirm" type="checkbox">
                    `;
        wrap.innerHTML=content;
        wrapProductCart.append(wrap);
        totalPriceProduct(priceProduct, quantityProduct);
    }

    function removeItemCart(){
        const listProductCart=document.querySelectorAll('.list-product-cart .cart-item');
        listProductCart.forEach(items =>{
            const btnRemove=items.querySelector('.list-product-cart .cart-item .cart-item-right .close ion-icon');
            btnRemove.addEventListener('click', function(){
                items.remove();
            })
        })
    }

    function totalPriceProduct(priceItem, quantityItem) {
        sum+=(Number(priceItem)*quantityItem);
        total.innerHTML=sum;
    }

}

handleAddCart();