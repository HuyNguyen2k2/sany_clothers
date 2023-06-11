function handleAddCart(){

    const list_product=document.querySelectorAll('.body__product-item');
    const wrapProductCart=document.querySelector('.list-product-cart');

    
    const dataCart=JSON.parse(localStorage.getItem('dataCart'));
    
    let dataProduct=dataCart ? dataCart :[];
    
    const total=document.querySelector('.total-price .total span:nth-child(2)');
    let sum=0;

    function getValueProduct(wrap){
        const listSize=wrap.querySelectorAll('.option-size input');
        let currentSize='S';
        listSize.forEach(input=>{
            if(input.checked){
                currentSize=input.value;
            }
        })
        const valueProduct={
            name:wrap.querySelector('.content-product .name-product').innerHTML,
            price:wrap.querySelector('.content-product .price-product span:nth-child(1)').innerHTML,
            size:currentSize,
            img:wrap.querySelector('.img-product-js').src,
            quantity:wrap.querySelector('.quantity-add-cart').value,
            id:wrap.querySelector('.id-product').value
        }
        return valueProduct;
    }

    function handleDatabase(){
        const cartItem=document.querySelectorAll('.list-product-cart .cart-item');
        cartItem.forEach(items=>{
            items.remove();
        })
        dataProduct.forEach(items=>{
            renderCartItem(items);
        })
        hanldeCartItems();
    }

    handleDatabase();

    function addCart(){
        list_product.forEach(item => {
            const btn=item.querySelector('.btn-confirm');
            btn.addEventListener('click', e=>{
                const valueProduct=getValueProduct(item);
                dataProduct.push(valueProduct);
                localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                handleDatabase();
            })
        })
    }

    addCart();

    function renderCartItem(value) {
        const wrap=document.createElement('li');
        wrap.className='cart-item';

        const content=`
                    <div class="cart-item-left">
                        <img src="${value.img}" alt="">
                    </div>
                    <div class="cart-item-right">
                        <div class="top">
                            <div class="name-product">${value.name}</div>
                            <div class="close"><ion-icon name="close-outline"></ion-icon></div>
                        </div>
                        <div class="center">
                            <p>Size: </p>
                            <select name="size" id="">
                                <option value="S">${value.size}</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div class="bottom">
                            <div class="add-cart form-quantity">
                                <div class="quantity">
                                    <div class="input">
                                        <p>Số lượng: </p>
                                        <input class="number quantity-item" type="number" value="${value.quantity}" min="0">
                                    </div>
                                </div>
                            </div>
                            <div class="price">
                                <span>${value.price}</span>
                                <span>VND</span>
                            </div>
                        </div>
                    </div>
                    <input class="check-confirm" type="checkbox">
                    <input type="hidden" value="${value.id}" class="id-product-cart" >
                    `;
        wrap.innerHTML=content;
        wrapProductCart.append(wrap);
        // totalPriceProduct(value.price, value.quantity);
    }

    function removeItemCart(id){
        //filter: có chức năng lọc mảng
        
        const arrValue=dataProduct.filter(items=>{
            return items.id!=id;
        })
        return arrValue;
    }

    function hanldeCartItems(){
        const listProductCart=document.querySelectorAll('.list-product-cart .cart-item');
        listProductCart.forEach(item=>{
            const close=item.querySelector('.list-product-cart .cart-item .cart-item-right .close ion-icon');
            close.addEventListener('click', e=>{
                const idCart=item.querySelector('.id-product-cart').value;
                dataProduct=removeItemCart(idCart);
                localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                handleDatabase();
            })
        })
    }

    hanldeCartItems();
    
    function totalPriceProduct(priceItem, quantityItem) {
        sum+=(Number(priceItem)*quantityItem);
        total.innerHTML=sum;
    }

}

handleAddCart();
