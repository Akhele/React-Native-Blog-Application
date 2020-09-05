import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    switch (action.type)
    {
        case 'edit_blogPost' : {
            return state.map(blogPost => {
                    return blogPost.id === action.payload.id ? action.payload : blogPost;
                    })
            

        }
        case 'add_blogPost' : {
            return [...state, {
                id : Math.floor(Math.random() * 99999),
                title : action.payload.title,
                content: action.payload.content}];
            }

        case 'delete_blogPost' : {
            return state.filter((blogPost) => blogPost.id !== action.payload);
        }


            default :
                return state;
    }
};
const addBlogPost = (dispatch) => {
    // setBlogPosts([...blogPosts, {title : `Blog Post #${blogPosts.length + 1}`}]);
    return (title, content, callback) => {
        dispatch({type : 'add_blogPost', payload: {title, content}});
        callback();
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogPost', payload: id});
    } 
};

const editBlogPost = (dispatch) => {
    return (id,title,content,callback) => {
        dispatch({type: 'edit_blogPost', payload: {id,title,content}});
        callback();
    } 
}

export const {Context, Provider} = createDataContext(
        blogReducer,
        {addBlogPost, deleteBlogPost,editBlogPost},
        [{id: 0, title: 'Test Title', content: 'Bla bla bla bla bla bla bla bla'}]
);

