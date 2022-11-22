import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    form: {
        margin: 30,
        marginTop: 20
    },
    label: {
        fontSize: 28,
        marginBottom: 1,
        textAlign: 'center'
        
    },

    label2: {
        fontSize: 18,
        marginBottom: 1,
        textAlign: 'center',
        fontWeight: "bold"
    },

    label3: {
        fontSize: 18,
        marginBottom: 1,
        textAlign: 'left',
        fontWeight: "bold"
    },
    buttonContainer: {
      paddingVertical: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '10%',
      width: '80%',
      paddingBottom: 40,
      borderRadius: 10
    },
    button: {
        marginBottom: '10%',
        width: '40%',
        paddingBottom: 40,
        borderRadius: 10
    }, 
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },    
    space2: {
        width: 120, // or whatever size you need
        height: 120,
    }, 
    
    textInput: {
        borderColor: 'black',
        borderWidth: 1
    }
});