import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    //Styles for the InitialScreen page

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },

    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    welcomeMessage: {
        textAlign: 'center',
        marginBottom: 20,
    },

    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    signInButton: {
        backgroundColor: 'blue',
        width: '100%',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    signInButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    registrationMessage: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 20,
    },

    companyName: {
        position: 'absolute',
        bottom: 10,
        color: '#888',
    },  

    // Styles for the client registration page
        clientRegistrationContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
        },
        clientRegistrationInput: {
            width: '100%',
            height: 40,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 10,
        },
        clientRegistrationButton: {
            backgroundColor: 'blue',
            width: '100%',
            height: 40,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
        },
        clientRegistrationButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
    });
    
    // Add styles as needed