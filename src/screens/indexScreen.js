import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import BlogContext from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

const indexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext)
    return (
        <View>
            <Text>Index Screen</Text>

            <FlatList
                data={data}
                keyExtractor={ (data) => data.title }
                renderItem={
                    ({item}) => {
                    return <Text>{item.title}</Text>
                    }
                }
            />
            <Button title='Add Blog Post' onPress={addBlogPost} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default indexScreen;