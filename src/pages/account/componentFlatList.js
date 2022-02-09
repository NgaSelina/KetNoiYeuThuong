import React, {useEffect, useState} from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import dataFollow from "./dataFollow";


const Component = ({id ,name, avatar, isFollow, fromList}) => {
    const [textFollowed, setTextFollowed] = useState('');
    const [IsFollowStatus, setIsFollowStatus] = useState(isFollow);
    useEffect(() => {
        if(isFollow === true){
            setTextFollowed('Theo dõi');
            setIsFollowStatus(isFollow);
        }
        else{
            setTextFollowed('Bỏ Theo dõi');
            setIsFollowStatus(isFollow);

        }
    }, []);
    const changeStatus = () => {
        if(IsFollowStatus === true){
            setTextFollowed('Bỏ theo dõi');
            setIsFollowStatus(false);
            dataFollow.push({id: id, name: name, avatar: avatar, isFollow: isFollow});
        }
        else {
            for( let i = 0; i < dataFollow.length; i++){ 
                if ( dataFollow[i].id == id) { 
                    dataFollow.splice(i, 1); 
                }
            }
            // console.log('dataFollowNew', dataDelete);
            // dataFollow.splice(dataDelete,1);
            setTextFollowed('Theo dõi');
            setIsFollowStatus(true);
        }
    }
    return (
        <View style={styles.bodyList}>
            <Image source={{ uri: avatar}} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
           {fromList?(
            <TouchableOpacity style={IsFollowStatus ? styles.Following : styles.UnFollow} onPress={changeStatus}>
                    <Text style={styles.status}>{textFollowed}</Text>
            </TouchableOpacity>
            ) : ( <View/>) }
        </View>
    )
}
const styles = StyleSheet.create({
   bodyList: {padding: 20, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey', alignItems: 'center',},
   avatar: {height: 50, width: 50, borderRadius: 50},
   name:{fontSize: 14, color: 'black', fontWeight: 'bold', flex: 0.9, marginLeft: 20,},
   status: {fontSize: 14, color: 'white',padding: 6,},
   UnFollow: {fontSize: 14, backgroundColor: 'grey', borderWidth: 1, borderRadius: 15, borderColor:'grey'},
   Following: {fontSize: 14, backgroundColor: 'green', borderWidth: 1, borderRadius: 15, borderColor: 'green'},
});
export default Component;