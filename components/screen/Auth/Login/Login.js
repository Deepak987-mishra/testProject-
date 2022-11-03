import React, { useState  } from "react";
import { View, SafeAreaView, TouchableOpacity,Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomTextInput from "../../../common/CustomTextInput/CustomTextInput";
import Colors from "../../../utils/color";

import { colors, wpx, hpx, mobileRegex, emailRegex, passwordRegex, nf, } from '../../../utils/constant';
import { LoginStyles } from "./LoginStyles";
import Snack from "../../../utils/snackbar";



const Login = ({ navigation }) => {

  const [mobileEmail, setMobileEmail] = useState("");
  const [validMobileEmail, setValidMobileEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = () => {
 
 if (!mobileEmail || !emailRegex.test(mobileEmail)) {
      Snack('Please enter your valid email id');
    }  
    else if (!password) {
      Snack('Please enter your password');
    }  else {
     navigation.navigate('Bottom')
   
    }
  };
  


  return (
    <SafeAreaView style={LoginStyles.mainContainer}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        style={LoginStyles.container}>
        <View style={{alignItems:'center'}}>
         <Text style={{marginTop:hpx(70),fontSize:nf(20),fontWeight:'bold',color:colors.black}}> Login</Text>
         <Text style={{color:Colors.black,fontSize:nf(16),fontWeight:'600'}}>Please Login via credentials </Text>
         
        </View>
        <View style={LoginStyles.formView}>
          <CustomTextInput
            placeholder="Email ID"
            onChangeText={e => setMobileEmail(e)}
            value={mobileEmail}
            maxLength={30}
           
          />
          <CustomTextInput
            setShowPassword={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
            type="password"
            placeholder="Password"
            onChangeText={e => setPassword(e)}
            value={password}
           
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")} style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' }}>
     <Text>Forgot Password</Text>
        </TouchableOpacity>


        <View style={{alignSelf:'center'}}>
<TouchableOpacity onPress={()=>handleLogin()} 
style={{height:hpx(50),width:wpx(250),marginVertical:hpx(50),borderRadius:wpx(10),
  backgroundColor:colors.blue,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:nf(20),fontWeight:'bold',color:colors.white}}>Login</Text>
</TouchableOpacity>
        </View>

        <View style={LoginStyles.alreadyRegister}>
          {/* <CustomText text="Don't have any account? " regular eh5 style={LoginStyles.continueText} /> */}
          <Text style={LoginStyles.continueText}>Don't have any account?</Text>
          <TouchableOpacity style={{marginTop:hpx(5)}} onPress={()=>navigation.navigate('Signup')}>
           <Text style={{textDecorationLine:'underline',color:colors.blue}}> Register Now </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;