function categoryItems(){
    const btn=document.querySelector('.add-category-items')
    const body=document.querySelector('.category-list')
    btn.addEventListener('click',e=>{
        const wrap=document.createElement('div')
        const content=`
        <input class="input-category-items"  placeholder="nhap vao ten danh muc" />
        <div class="action">
        <button class="btn-category-items" >Thêm danh mục</button>
        </div>
        `
        wrap.className='category-items'
        wrap.innerHTML=content
        body.appendChild(wrap)
        btn.style.display="none";
        const btnAdd=document.querySelector('.btn-category-items')
        const inputAdd=document.querySelector('.input-category-items')

        btnAdd.addEventListener('click',e=>{
            if(inputAdd.value.trim()==""){
                alert('Nhap ten danh muc !')
                inputAdd.focus();
            }else{
                document.querySelector('.post-data-categoty').onsubmit=function(){
                    return true
                }
            }
        })
    })

}
categoryItems()