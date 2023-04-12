import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, SetUserToken] = useState(null);

    const login = () => {
        setIsLoading(true);
        SetUserToken('jfismrker');
        AsyncStorage.setItem('userToken', 'jfismrker')
        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        SetUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken')
            SetUserToken(userToken);
            setIsLoading(false)
        } catch(e){
            console.log(`isLogged in error ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}  
        </AuthContext.Provider>
    )
}