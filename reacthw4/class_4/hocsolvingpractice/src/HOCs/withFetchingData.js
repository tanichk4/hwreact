const { useState, useEffect } = require("react")

const withFetchingData = (WrappedComponent) => {
    return(props) => {
        const [data, setData] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState(null)

        useEffect(() => {
            fetch(props.url)
            .then( res => res.json())
            .then(json => setData(json))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
        }, [])
    

        return <WrappedComponent {...props} data={data} isLoading={isLoading} error={error}/>
    }
}

export default withFetchingData