import React, {useContext, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const CreateBlog = (props) => {
    
    const {addBlogPost} = useContext(Context);

    return (
           <BlogPostForm onSubmit={(title, content)=> {
                addBlogPost(title,content, () => {props.navigation.navigate('Index')});
                alert('Post Added Successfully');
              
            }}
           />
    );
}
const styles = StyleSheet.create({
   
});

export default CreateBlog;