export const fetchBlogPosts = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_BLOG' });

        const api = process.env.REACT_APP_API_KEY;
        const url = "https://www.googleapis.com/blogger/v3/blogs/7154752201469865972/posts?key=";

        fetch(url + api, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
            body: JSON.stringify()
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data.items)
            dispatch({type: 'ADD_BLOG', blogPosts: data.items})
        })
        .catch(() => alert("Sorry, not available at this time. Try unblocking from Browser"))
    }
}