import React, { useEffect } from "react";
import ProductsItem from "../productItem";
import { getProducts } from "../services/Api";

const Home = () => {
    const [products, setProducts] = React.useState([])
    useEffect(() => {
        getProducts({
            params: {
                limit: 8
            }
        }).then(({ data }) => {
            return setProducts(data.data.docs)
        })
    }, [])
    return (
        <>

            <div className="main-products">
                <div className="container">
                    <div className="row">
                        <h3 className="title col-12">sản phẩm bán chạy</h3>
                        <div className="products">
                            <div className="row">
                                {
                                    products.map((value, index) => {
                                        return (
                                            <ProductsItem item={value} />
                                        )
                                    })
                                }
                                <div className="more-products">
                                    <button><a href>xem thêm <span className="more">+</span></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Home