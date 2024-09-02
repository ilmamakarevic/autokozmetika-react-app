import { useParams } from "react-router-dom";

const Product = ({products}) => {

    const params = useParams();

    let product =  products.find((prod) => prod.id === Number(params.id));

    return ( 
        <div className="product container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={`/${product.image}`} alt="product" className="img-fluid w-100"/>
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <h4 className="py-3">{product.price}</h4>
                    <p className="mb-4">Dostupna pakovanja: 1kg, 6kg, 23 kg <br/>AGENS ZA BEZKONTAKTNO PRANJE AUTOMOBILA <br/>
                        Koncentrovano sredstvo za bezkontaktno pranje putnickih vozila i kamiona. Lako uklanja prasinu, ulje, tragove insekata. Stvara izdrzljivu bogatu pjenu,
                        koja se lako ispira sa povrsine.
                    </p>
                    <a href="" className="btn btn-warning">Dodaj u korpu</a>
                </div>
            </div>
        </div>
    );
};

export default Product;