import React, {useContext, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const CreateBlog = (props) => {
    
    const {addBlogPost} = useContext(Context);

    return (
           <BlogPostForm/>
    );
}
const styles = StyleSheet.create({
   
});

export default CreateBlog;