import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    switch (action.type)
    {
        case 'add_blogPost' :
            return [...state, {title : `Blog Post #${state.length + 1}`}];
            default :
                return state;
    }
};
const addBlogPost = (dispatch) => {
    // setBlogPosts([...blogPosts, {title : `Blog Post #${blogPosts.length + 1}`}]);
    return () => {
        dispatch({type : 'add_blogPost'});
    }
}

export const {Context, Provider} = createDataContext(
        blogReducer,
        {addBlogPost},
        []
);

