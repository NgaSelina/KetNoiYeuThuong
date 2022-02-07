import {StyleSheet,StatusBar} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      alignItems: 'center',
    },
    title: {
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold',
      marginLeft: 20,
      flex: 0.9,
    },
    avatar: {
      height: 50,
      width: 50,
      borderRadius: 50,
      },
      viewHead:{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 18,
      },
      ArrowBack: {
          width: 16,
          height: 16,  
      },
      TranTrungGioi: {
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          flex: 1,
          textAlign: 'center',
      },
      // UnFollow: {
      //     fontSize: 14,
      //     color: 'black',
      //     padding: 5,
      //     borderWidth: 1,
      //     borderRadius: 20,
      //     borderColor: 'black',
      // },
      // Following: {
      //     fontSize: 14,
      //     color: 'white',
      //     padding: 5,
      //     borderWidth: 1,
      //     borderColor: 'green',
      //     borderRadius: 20,
      //     backgroundColor: 'green',
  
      //},
  });
  export default styles;