import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';


const blogReducer = (state, action) => {
    switch (action.type)
    {
        
        case 'edit_blogPost' : {
            return state.map(blogPost => {
                    return blogPost.id === action.payload.id ? action.payload : blogPost;
                    })
            

        }
        // case 'add_blogPost' : {
        //     return [...state, {
        //         id : Math.floor(Math.random() * 99999),
        //         title : action.payload.title,
        //         content: action.payload.content}];
        //     }

        case 'delete_blogPost' : {
            return state.filter((blogPost) => blogPost.id !== action.payload);
        }

        case 'get_blogPosts' : {
            return action.payload;
        }


            default :
                return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
       const response = await jsonServer.get('/blogPosts');
       // response.data = [{}, {}...]
       dispatch({ type: 'get_blogPosts', payload: response.data });
    }
};

const addBlogPost = (dispatch) => {
    // setBlogPosts([...blogPosts, {title : `Blog Post #${blogPosts.length + 1}`}]);
    return async (title, content, callback) => {
        // dispatch({type : 'add_blogPost', payload: {title, content}});
        // callback();
        await jsonServer.post('/blogposts', {title,content})
        if(callback){
            callback();
        }

    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        //dispatch({type: 'delete_blogPost', payload: id});
    } 
};

const editBlogPost = (dispatch) => {
    return async (id,title,content,callback) => {

        await jsonServer.put(`/blogposts/${id}`,{title,content})

        // dispatch({type: 'edit_blogPost', payload: {id,title,content}});
        callback();
    } 
}

export const {Context, Provider} = createDataContext(
        blogReducer,
        {addBlogPost, deleteBlogPost,editBlogPost, getBlogPosts},
        []
);

