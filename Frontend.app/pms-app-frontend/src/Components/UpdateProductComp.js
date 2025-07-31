import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../Services/ProductService";

export default function UpdateProductComp(){
        const [product_name,SetProduct_name]=useState(' ');
        const [product_cost,SetProduct_cost]=useState(' ');
        const [product_qty,SetProduct_qty]=useState(' ');
        const [product_category,SetProduct_category]=useState(' ');

        const {id}=useParams();
        useEffect(()=>{
            if(id){
                getProductById(id)
                .then((response)=>{
                    const p=response.data;
                    console.log(p);
                    SetProduct_name(p.product_name);
                    SetProduct_cost(p.product_cost);
                    SetProduct_qty(p.product_qty);
                    SetProduct_category(p.product_category);
                }).catch((error)=>{
                    console.log(error);
                })
        }
    },[id]);

    const nav=useNavigate();
    const editProduct=(event)=>{
        event.preventDefault();
        const product ={product_name,product_cost,product_qty,product_category};
        console.log(product);

        updateProduct(id,product)
        .then((response)=>{
            console.log(response.data);
            nav('/products');
        })
    }

    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Update Product</h2>
                    <div class="card-body">
                        <form>
                            <div className="form-group mb-2">
                            <label className="form-label">Product Name</label>
                            <input type="text" placeholder="Enter the Name" name="Name" value={product_name} className="form-control" onChange={(event)=>{SetProduct_name(event.target.value)}}></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Cost</label>
                                <input type="text" placeholder="Enter the cost" name="Cost" value={product_cost} className="form-control" onChange={(event)=>{SetProduct_cost(event.target.value)}}></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Quantity</label>
                                <input type="text" placeholder="Enter the quantity" name="Quantity" value={product_qty} className="form-control" onChange={(event)=>{SetProduct_qty(event.target.value)}}></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Category</label>
                                <input type="text" placeholder="Enter the category" name="Category" value={product_category} className="form-control" onChange={(event)=>{SetProduct_category(event.target.value)}}></input>
                            </div>

                            <button className="btn btn-success" onClick={editProduct}>Update Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )


    
}