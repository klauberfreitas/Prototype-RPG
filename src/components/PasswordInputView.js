import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableHighlight ,StyleSheet} from 'react-native';
import TextInput from 'react-native-material-textinput';

 
 
export default class PasswordInputView extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            icEye: 'visibility-off', // default icon to show that password is currently hidden
            password: '', // actual value of password entered by the u\ser
            showPassword: true // boolean to show/hide the password 
 
        }
    }
 
    changePwdType = () => {
        let newState;
        if (this.state.showPassword) {
            newState = {
                icEye: 'visibility',
                showPassword: false,
                password: this.state.password
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                showPassword: true,
                password: this.state.password
            }
        }
        // set new state value
        this.setState(newState)
    };
    handlePassword = (password) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            password: password
        }
        this.setState(newState);
        this.props.callback(password); // used to return the value of the password to the caller class, skip this if you are creating this view in the caller class itself
    };
 
 
 
    render() {
        return (
            <TouchableHighlight>
                <View style={styles.passwordViewContainer}>
                    <TextInput          
                        label={this.props.label}
                        value={this.state.password}
                        onChangeText={this.handlePassword}
                        secureTextEntry={this.state.showPassword}
                        width={250}
                        height={40}
                        labelActiveColor={componentColors.password_icon_color}
                        labelColor={componentColors.password_icon_color}
                        placeholderColor={componentColors.password_icon_color}
                        underlineColor={componentColors.password_icon_color}
                        underlineActiveColor={componentColors.password_icon_color}
                        underlineActiveHeight={2}
                        underlineHeight={1}
                        color={"#fff"}
                    >
                    </TextInput>
                    <Icon style={styles.icon}
                        name={this.state.icEye}
                        size={30}
                        color={componentColors.password_icon_color}
                        onPress={this.changePwdType}
                    />
                </View>
            </TouchableHighlight>
        );
    }
}
 
export const styles = StyleSheet.create({
    passwordViewContainer: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        top: 20,
        right: 0
    },

});
export const componentColors = {
    password_icon_color:'#9E9E9E',
};