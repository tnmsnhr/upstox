const fetchData = () => {
    return fetch("https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/")
        .then(res => res.json())
        .then(res => res?.data?.userHolding)
}

export default fetchData