import React, {useContext, useState} from 'react';
import { View, StyleSheet,Text,Button } from 'react-native';
import {Context} from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

const EditBlog = (props) => {
    const id = props.navigation.getParam('id');
    const {state} = useContext(Context);


    const blogPost = state.find( (blogPost) => blogPost.id === id)
    const [blogtitle, setBlogTitle] = useState(blogPost.title);
    const [blogContent, setBlogContent] = useState(blogPost.content);

    return (
    <View style={styles.mainView}>
        <Text style={styles.title}>Title :</Text>
        <TextInput value={blogtitle} onChangeText={(text) => { setBlogTitle(text); }} style={styles.input} autoCorrect={false}/>

        <Text style={styles.title}>Content :</Text>
        <TextInput value={blogContent} style={styles.input} autoCorrect={false}/>

        <Button title="Save" onPress={() => {
                        editBlogPost(title,content, () => {
                            alert('Post Edited Successfully')
                            props.navigation.navigate('ShowBlog',{id: props.navigation.getParam('id')})
                        })
                        
                    }}/>

    </View>
    );
};



const styles = StyleSheet.create({
    mainView : {
        padding: 30
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 5

    },
    content: {
        fontSize: 20
    },
    EditIcon: {
        margin: 5
    },
    input: {
        fontSize: 18,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10
    },
});

export default EditBlog;