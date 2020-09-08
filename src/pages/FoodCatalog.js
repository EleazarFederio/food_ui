import React from "react";

function FoodCatalog (foods){
    return(
        <div className={'col-md-4 product-grid'} >
            <div className={'image'}>
                <a>
                    <img src={'https://cdn.phonebooky.com/blog/wp-content/uploads/2019/05/21132504/Brown-Sugar.jpg'} className={'w-100'}/>
                    <div className={'overlay'}>
                        <div className={'detail'}>View Details</div>
                    </div>
                </a>
            </div>
            <h4 className={'text-center'}>{foods.name}</h4>
            <p className={'description-style'}><i>{foods.detail}</i></p>
            <h5 className={'text-center price-style'}>Price: ₱{foods.price}</h5>
            <div className={'row justify-content-around'}>
                <a href={'#'} className={'btn btn-sm btn-buy'}>Add to Cart</a>
                <a href={'#'} className={'btn btn-sm btn-cart'}>Buy Now</a>
            </div>
        </div>
    )
}

export default FoodCatalog;