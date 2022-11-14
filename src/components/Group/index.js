import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';



const Group = props => {

    const post = props.post;

    const navigation = useNavigation(); 

    const onPress = () => {
        if (post.contact_id){
            // Add contact group screen is using me
            try {
                database.addContactGroups(post.contact_id, post.id);
            } catch (error) {
                console.log('Error adding contact group ' + error);
            }
            alert('Group added to Contact!');
            navigation.navigate('Go To Contacts!');
        } else {
            // Groups screen is using me
            console.log(post.title);
        }
        
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                <Text style={styles.description} numberOfLines={1}>{post.description}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Group;