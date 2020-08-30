import React, {useContext, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditBlog = (props) => {
    const {state} = useContext(Context);

    const blogPost = state.find( (blogPost) => blogPost.id === props.navigation.getParam('id'));



    return (
        <BlogPostForm/>
    );
};



const styles = StyleSheet.create({
   
});

export default EditBlog;