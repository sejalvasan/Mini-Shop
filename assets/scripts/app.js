const productList ={
    products: [
        {
    title:'A Pillow',
    imageUrl :'https://user-images.githubusercontent.com/69964629/120317238-0072c200-c2fc-11eb-9f27-477762280b85.jpg',
    price: 19.99,
    description:'A Soft Pillow!'
 },
 {
    title:'A Carpet',
    imageUrl :'https://user-images.githubusercontent.com/69964629/120320253-99570c80-c2ff-11eb-8f5e-39245b474d06.jpg',
    price: 65.99,
    description:'A Pebble Print Carpet!'
 }
],
render(){
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className='product-list';
    for(const prod of this.products){
        const prodEl = document.createElement('li');
        prodEl.className='product-item';
        prodEl.innerHTML=`
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add To Cart</button>
        </div>
        </div
        `;
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
}
};

productList.render();