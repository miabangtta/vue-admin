const articles = {
    state : {
        data: []
    },
    mutations: {
        addNewArticle(state, article) {
            state.data.push(article);
        }
    },
    actions: {
        fetchBlog({state}) {
        return fetch("/src/blog.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
           state.data = data
            });  
        } 
    }
}

export default articles