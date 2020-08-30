import React, {useContext} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import {Context} from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';


const ShowBlog = (props) => {
    const id = props.navigation.getParam('id');
    const {state} = useContext(Context);

    const blogPost = state.find( (blogPost) => blogPost.id === id)

    return (
    <View style={styles.mainView}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
    </View>
    );
};

ShowBlog.navigationOptions = ({navigation}) => {
    return {
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('EditBlog',{id: navigation.getParam('id')})}>
            <FontAwesome style={styles.EditIcon} name="edit" size={35} color="black" />
        </TouchableOpacity>
    ),
    };
};

const styles = StyleSheet.create({
    mainView : {
        padding: 30
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",

    },
    content: {
        fontSize: 20
    },
    EditIcon: {
        margin: 5
    }
});

export default ShowBlog;