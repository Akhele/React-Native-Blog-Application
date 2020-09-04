import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditBlog = (props) => {
    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find( (blogPost) => blogPost.id === props.navigation.getParam('id'));



    return (
        <BlogPostForm
            onSubmit={(title, content)=> {
                editBlogPost(blogPost.id,title,content);
                    alert('Post Edited Successfully');
                    props.navigation.navigate('Index')
                
            }}
            values={{title: blogPost.title,content: blogPost.content}}
    />
    );
};



const styles = StyleSheet.create({
   
});

export default EditBlog;