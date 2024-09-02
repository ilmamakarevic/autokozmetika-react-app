import { Link } from "react-router-dom";

const Products =({products}) => {

    return (
        <div className="shop py">
        <div className="container">
            <h2 className="mb-5 text-center">Prodavnica</h2>
            <div className="row">
                    {products.map((item, index) => {
                        return (
                            <div key={index} className="col-md-4 text-center">
                                <img className="img-fluid" src={`/${item.image}`} alt="" />
                                <h4>{item.title} </h4>
                                <p>{item.price} </p>
                                <Link to={`/product/${item.id}`}className="btn btn-warning">Dodaj u korpu</Link>
                            </div>
                        );
                    })};
                
            </div>
            <div className="text-center mt-5">
                <a href="">Pogledajte ostale proizvode <i className="bi bi-chevron-right"></i></a>
            </div>
        </div>
    </div>

    );
};

export default Products;