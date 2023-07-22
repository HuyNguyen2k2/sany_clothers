function handleAddCart(){
    const btnShow=document.querySelector('.header__navbar-item-icon:nth-child(4)');
    const list_product=document.querySelectorAll('.body__product-item');

    const wrapProductCart=document.querySelector('.list-product-cart');
    
    const dataCart=JSON.parse(localStorage.getItem('dataCart'));
    
    let dataProduct=dataCart ? dataCart :[];
    

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
        showQuantityCart();
        btnShow.click()
    }

    handleDatabase();

    function addCart(){
        list_product.forEach(item => {
            const btn=item.querySelector('.btn-confirm');
            btn.addEventListener('click', e=>{
                const valueProduct=getValueProduct(item);
                const id=valueProduct.id;
                const same=checkSame(id)
                if(same){
                    dataProduct.push(valueProduct);
                    localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                }else{
                    // lay ra san pham dang trung hien tại
                    const newdata=dataProduct.filter(items=>items.id==id)
                    // xóa sản phẩm tại vị trí hiện tại
                    dataProduct=dataProduct.filter(items=>items.id!=id)
                    // tăng số lượng lên 1
                    newdata[0].quantity++
                    // thêm sản phẩm vào đầu mang
                    dataProduct.push(newdata[0])
                    // câp nhật lại csdl
                    localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                }
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
                                <span class='price-cart'>${value.price}</span>
                                <span>VND</span>
                            </div>
                        </div>
                    </div>
                    <input class="check-confirm" type="checkbox">
                    <input type="hidden" value="${value.id}" class="id-product-cart" >
                    `;
        wrap.innerHTML=content;
        wrapProductCart.prepend(wrap);
        // thay append bang prepend
        // totalPriceProduct(value.price, value.quantity);
    }

    function removeItemCart(id){        
        const arrValue=dataProduct.filter(items=>{
            return items.id!=id;
        })
        return arrValue;
    }

    let arrCheck=[]

    function hanldeCartItems(){ 
        const listProductCart=document.querySelectorAll('.list-product-cart .cart-item');
        listProductCart.forEach(item=>{
            const close=item.querySelector('.list-product-cart .cart-item .cart-item-right .close ion-icon');
            close.addEventListener('click', e=>{
                localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                const idCart=item.querySelector('.id-product-cart').value;
                dataProduct=removeItemCart(idCart);
                handleDatabase();
            })
        })
        const check=document.querySelectorAll('.check-confirm')
        check.forEach(items=>{
            items.addEventListener('change',e=>{
                const parent=items.parentElement
                if(items.checked){
                    parent.classList.add('active')

                    const value={
                        id:parent.querySelector('.id-product-cart').value,
                        price:parent.querySelector('.price-cart').innerHTML,
                        quantity:parent.querySelector('.quantity-item').value
                    }

                    arrCheck.push(value)
                    totalPriceProduct()
                    showCheckOut()

                }else{
                    const id=parent.querySelector('.id-product-cart').value
                    arrCheck=arrCheck.filter(function(items){
                        if(items.id!=id)
                        return items
                    })
                    totalPriceProduct()
                    showCheckOut()
                    parent.classList.remove('active')
                }             
            })
        })
    }

    function checkSame(id){
        const same=dataProduct.filter(function(items){
            if(items.id==id)
            return items
        })
        if(same.length>0){
            return false
        }else{
            return true
        }
    }

    function totalPriceProduct(){
        let total=0;
        arrCheck.forEach(value=>{
            total+=(value.price*value.quantity)
        })
        const totalcart=document.querySelector('.total-price-cart-js')
        totalcart.innerHTML=total.toLocaleString('en-US')
    }
    function showQuantityCart(){
        const quantity=document.querySelector('.quantity-cart')
        quantity.innerHTML=dataProduct.length
        if(dataProduct.length==0){
            quantity.style.display='none'
        }else{
            quantity.style.display='flex'
        }
    }
    showQuantityCart()
    function showCheckOut(){
        const checkOut=document.querySelector('.checkout')
        if(arrCheck.length>0){
            checkOut.classList.add('active')
        }else{
            checkOut.classList.remove('active')
        }
    }
}

handleAddCart();
