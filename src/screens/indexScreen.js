import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import {Context,Provider} from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 


const indexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <Button title='Add Blog Post' onPress={addBlogPost} />

            <FlatList
            scrollEnabled
                data={state}
                keyExtractor={ (data) => data.title }
                renderItem={
                    ({item}) => {
                        return (
                                <TouchableOpacity onPress={() => navigation.navigate('ShowBlog',{id: item.id})}>
                                    <View style={styles.mainView}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}} >
                                            <Entypo style={styles.icon} name="trash" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 5
         
        
    },
    title: {
        fontSize: 18
    },
    icon: {

    }

});

export default indexScreen;