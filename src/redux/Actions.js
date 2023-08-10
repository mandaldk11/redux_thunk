export const PENDING = 'pending';
export const FULFILL = 'fulfill';
export const ERROR = 'error';



export const fetchNewsPending = () => {
    return {
        type: PENDING
    }
}


export const fetchNewsSuccess = (product) => {
    return {
        type: FULFILL,
        payload:product
    }
}



export const fetchNewsError = (error) => {
    return {
        type: ERROR,
        payload:error
    }
}


export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsPending());
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                const product = data.map((elem) => {
                    return {
                        title: elem.title,
                        price: elem.price,
                        description: elem.description,
                        image:elem.image
                    }
                })

                dispatch(fetchNewsSuccess(product))
                console.log('>>>>',product)
            })

            .catch(error=>{
                dispatch(fetchNewsError(error.message))
            })
    }
}