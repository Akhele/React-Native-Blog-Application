import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import {Context,Provider} from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

const indexScreen = () => {
    const {state, addBlogPost} = useContext(Context)
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title='Add Blog Post' onPress={addBlogPost} />

            <FlatList
            scrollEnabled
                data={state}
                keyExtractor={ (data) => data.title }
                renderItem={
                    ({item}) => {
                    return <Text>{item.title}</Text>
                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default indexScreen;