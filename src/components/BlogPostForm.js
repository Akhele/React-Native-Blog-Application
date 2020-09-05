import React, {useState} from 'react';
import { View, StyleSheet,Text,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const BlogPostForm = (props) => {

    const [title, setTitle] = useState(props.values.title);
    const [content, setContent] = useState(props.values.content);

    return (
    <View style={styles.mainView}>
            <Text style={styles.label} >Title :</Text>
            <TextInput value={title} onChangeText={ text => setTitle(text) } style={styles.input}/>
            
            <Text style={styles.label}>Content :</Text>
            <TextInput value={content}  onChangeText={ text => setContent(text) } style={styles.input} />

            <Button title="Save" onPress={() => { props.onSubmit(title,content)}}/>
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