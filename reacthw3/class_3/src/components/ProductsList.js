import { memo } from "react"
const ProductsList = ({products, title}) => {
    return (
        <div className="row">
            <h3>{title}</h3>
            {products?.map((product) => (
                <p key={product.id}>{product.title} - Price: $ {product.price}</p>
            ))}
        </div>
    )
}

export default memo(ProductsList)