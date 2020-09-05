import React, {useContext} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditBlog = (props) => {
    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find( (blogPost) => blogPost.id === props.navigation.getParam('id'));



    return (
        <View>
        <BlogPostForm onSubmit={(title, content)=> {
                editBlogPost(blogPost.id,title,content,() => {props.navigation.navigate('Index'); alert('Post Edited Successfully');});
                    

                
                
            }}
            values={{title: blogPost.title,content: blogPost.content}}
    />
                </View>

    );
};



const styles = StyleSheet.create({
   
});

export default EditBlog;