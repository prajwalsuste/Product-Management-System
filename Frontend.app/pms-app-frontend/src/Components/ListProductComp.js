import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct,listProducts, updateProduct } from "../Services/ProductService";
export default function ListProductComp(){
    const [products,setProducts]=useState([
        {
            "product_id":1,"product_name":"NewP","product_cost":4999,"product_qty":25,"product_category":"digi"
        }
    ]);
    useEffect(()=>{
        getAllProducts();
    },[]);
    const getAllProducts=()=>{
        listProducts()
        .then((response)=>{
            console.log(response.data);
            setProducts(response.data);
        })
        .catch(error=>{
            console.log(error)
        });
    };

    const nav=useNavigate();
    const addNewProduct=()=>{
        nav('/add-product')
    }

    const updateProduct=(id)=>{
        nav(`/edit-product/${id}`);
    }

    const removeProduct=(id)=>{
        console.log(id);
        deleteProduct(id)
        .then(()=>{
            getAllProducts();
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2>List of all Products</h2>
            <button className="btn btn-primary mb-2" onClick={addNewProduct}>Add Product </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID </th>
                        <th>Name </th>
                        <th>Cost </th>
                        <th>Quantity </th>
                        <th>Category </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(p=>
                            <tr key={p.product_id}>
                                <td>{p.product_id}</td>
                                <td>{p.product_name}</td>
                                <td>{p.product_cost}</td>
                                <td>{p.product_qty}</td>
                                <td>{p.product_category}</td>

                                <td>
                                    <button className="btn btn-info" onClick={()=>updateProduct(p.product_id)}>Update</button>
                                    <button className="btn btn-danger" onClick={()=>removeProduct(p.product_id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
    
}