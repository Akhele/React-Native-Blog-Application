import React, {useContext} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import {Context} from '../context/BlogContext'

const ShowBlog = (props) => {
    const id = props.navigation.getParam('id');
    const {state} = useContext(Context);

    const blogPost = state.find( (blogPost) => blogPost.id == id)

    return (
    <View>
        <Text>{blogPost.title}</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    mainView : {

    }
});

export default ShowBlog;