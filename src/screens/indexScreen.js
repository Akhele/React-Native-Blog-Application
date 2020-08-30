import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import {Context,Provider} from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


const indexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <FlatList
            scrollEnabled
                data={state}
                keyExtractor={ (data) => data.id.toString() }
                renderItem={
                    ({item}) => {
                        return (
                                <TouchableOpacity onPress={() => navigation.navigate('ShowBlog',{id: item.id})}>
                                    <View style={styles.mainView}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}} >
                                        <Entypo style={styles.TrashIcon} name="trash" size={24} color="black" />
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

    indexScreen.navigationOptions = ({navigation}) => {
        return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CreateBlog')}>
                <AntDesign style={styles.addIcon} name="pluscircleo" size={35} color="black" />
            </TouchableOpacity>
        ),
        };
    }

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
    addIcon: {
        margin:5
    }

});

export default indexScreen;