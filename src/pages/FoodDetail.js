import React, {useEffect, useState} from "react";
import {axios} from "../lib/axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FoodDetail({match}){

    useEffect(() => {
        getFoodDetails();
        // console.log("Match: " + match.params.id);
    }, []);

    const [foodDetails, setFoodDetails] = useState([]);

    // console.log("Foods: ", foodDetails)

    const getFoodDetails = async () => {
        const responce = await axios.get("/foods/"+match.params.id).catch((error) => console.log("Error: ", error));
        // console.log("Console log Foods: ", responce.data)
        if (responce && responce.data.data){
            setFoodDetails(responce.data.data);
        }
    }

    return(
      <div className={'container'}>
          <br/><br/><br/>
          <div className={'text-center'}>
              <h5>Food Details</h5>
          </div>
          <br/>
          <div className={'row'}>
              <div className={'col-md-5'}>
                <img src={'https://cdn.phonebooky.com/blog/wp-content/uploads/2019/05/21132504/Brown-Sugar.jpg'} alt={match.params.name} className={'w-100'}/>
              </div>
              <div className={'col-md-7 text-left'}>
                  <h2>{foodDetails.name}</h2>
                  <h6><span className="badge badge-info">{foodDetails.category}</span></h6>
                  <br/>
                  <h2>₱{foodDetails.price}</h2>
                  <br/>
                  <h6>Seller: <b>{foodDetails.seller}</b></h6>

                  <br/>
                  <h6>Details: </h6>
                  <p>{foodDetails.detail}</p>

              {/*    Add to cart and buy button*/}
                  <div className={'row justify-content-around'}>
                      <div className={'col-md-6 mb-3'}>
                          <a href={'#'} className={'btn btn btn-cart-details'}><FontAwesomeIcon icon={'shopping-cart'}/> Add to Cart</a>
                      </div>
                      <div className={'col-md-6'}>
                          <a href={'#'} className={'btn btn btn-buy-details'}>Buy Now</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default FoodDetail;