export const fetchBlogs = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_BLOG' });

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.blogger.com/blog/posts/7154752201469865972?bpli=1&pli=1"

        fetch(proxy + url)
        .then(respJSON => dispatch({ type: 'ADD_BLOG', blog: respJSON}))
        .catch(() => alert("Sorry, not available at this time. Try unblocking from Browser"))
    }
}