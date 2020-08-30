import React, {useContext, useState} from 'react';
import { View, StyleSheet,Text,Button } from 'react-native';
import {Context} from '../context/BlogContext'
import { TextInput } from 'react-native-gesture-handler';

const BlogPostForm = ({onSubmit, values}) => {

    const [title, setTitle] = useState(values.title);
    const [content, setContent] = useState(values.content);


    return (
    <View style={styles.mainView}>
            <Text style={styles.label} >Title :</Text>
            <TextInput value={title} onChangeText={(text) => {setTitle(text)}} style={styles.input} autoCorrect={false}/>
            
            <Text style={styles.label}>Content :</Text>
            <TextInput value={content} onChangeText={(text) => {setContent(text)}} style={styles.input} autoCorrect={false} />

            <Button title="Save" onPress={() => {
                        onSubmit(title,content)
                        
                    }}/>
    </View>
    );
};

BlogPostForm.defaultProps = {
    values : {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    mainView : {
        padding : 30
    },
    input: {
        fontSize: 18,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10
    },
    label: {
        fontSize: 25,
        marginBottom: 5
    }
});

export default BlogPostForm;