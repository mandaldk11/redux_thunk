import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from './Actions'
export default function ReduxThunk() {
    const { product, isLoading, error } = useSelector((state) => state.reducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])
    return (
        <div>
            {isLoading && <h2>Loading plz wait...</h2>}
            {error && <h4>{error}</h4>}
            {product &&
                <ul>
                    {
                        product.map((elem,index) => {
                            return (
                                <div key={index}>
                                    <img src={elem.image} height={'200px'} alt='product img...'></img>
                                    <li>{elem.title}</li>
                                    <li>{elem.price}</li>
                                    <li>{elem.description}</li>
                                    <hr/>
                                    <br/>
                                </div>
                            )

                        })
                    }
                </ul>
            }
        </div>
    )
}
