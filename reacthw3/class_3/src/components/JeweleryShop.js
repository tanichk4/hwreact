import ShopInfo from "./ShopInfo"
import ProductsList from "./ProductsList"
import { useCallback, useEffect, useMemo, useState } from "react"
import '../App.css';

const expensiveCalculation = (num) => {
    let amount = 0

    for(let i=0; i < 100000000; i++) {
        amount += 1
    }

    console.log('expensiveCalculation')

    return num + amount
}

// memo, useMemo, useCallBack
const JeweleryShop = () => {
    const [products, setProducts] = useState([])
    const [likeToggle, setlikeToggle] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => setProducts(json))
    }, [])

    const sortedProducts = useMemo(() => {
        return [...products].sort((productA, productB) => {
            return productA.price - productB.price
        })
    }, [products])

    // const sortedProducts = [...products].sort((productA, productB) => {
    //     return productA.price - productB.price
    // })

    // const sum = useMemo(() => {
    //     return expensiveCalculation(products.length)
    // }, [products]) 
    const sum = useCallback(() => {
        return expensiveCalculation(products.length)
    }, [products]) 

    return(
        <div className="shop">
            <ShopInfo />
            <div className="row">
                <p>Money: {sum()}</p>
                <button
                    onClick={() => setlikeToggle(prev => !prev)}
                    className={likeToggle ? 'liked' : 'unliked'}>
                    like toggler
                </button>
            </div>
            <ProductsList products={products} title='without sorting' />
            <ProductsList products={sortedProducts} title='with sorting' />
        </div>
    )
}

export default JeweleryShop