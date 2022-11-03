import React, { useState  } from "react";
import { View, SafeAreaView, TouchableOpacity,Text,TextInput,Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomTextInput from "../../../common/CustomTextInput/CustomTextInput";
import { colors, wpx, hpx, mobileRegex, emailRegex, passwordRegex, nf, } from '../../../utils/constant';
import { SignupStyles } from "./SignupStyles";

import Snack from "../../../utils/snackbar";


const Signup = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");

 
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
const [address,setAddress] = useState("")
const [zipCode,setZipCode] = useState("")


const handleSignup = () => {
 

  if (!firstName) {
    Snack('Please enter your first  name');
  }else if(!lastName){
Snack('Please Enter your last name')
  }   else if (!email || !emailRegex.test(email)) {
    Snack('Please enter your valid email id');
  } 

  else if (!mobile || !mobileRegex.test(mobile)) {
    Snack('Please enter your valid mobile number');
  }else if (!address) {
    Snack('Please enter your address');
  }else if (!zipCode) {
    Snack('Please enter your zip code');
  }
  else if (!password) {
    Snack('Please enter your password');
  } else if (password != confirmPassword) {
    Snack('Password and confirm password should match');
  } else {
   navigation.navigate('Login')
    // console.log('GEEETTTTTTTING VALUEEE BODYYYY', body)
  }
};


  return (
    <SafeAreaView style={SignupStyles.mainContainer}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        contentContainerStyle={{flexGrow:1,paddingBottom:hpx(200)}}
        style={SignupStyles.container}>
        <View style={{alignItems:'center'}}>
         <Text style={{marginTop:hpx(70),fontSize:nf(20),fontWeight:'bold',color:colors.black}}>Signup</Text> 
        </View>
        <View style={SignupStyles.formView}>

        <CustomTextInput
            placeholder="First Name"
            onChangeText={e => setFirstName(e)}
            value={firstName}
            maxLength={30}
           
          />

            <CustomTextInput
            placeholder="Last Name"
            onChangeText={e => setLastName(e)}
            value={lastName}
            maxLength={30}
           
          />
          <CustomTextInput
            placeholder="Email ID"
            onChangeText={e => setEmail(e)}
            value={email}
            maxLength={30}
           
          />
            <CustomTextInput
            placeholder="Mobile Number "
            onChangeText={e => setMobile(e)}
            value={mobile}
            maxLength={10}
            keyboardType={'number-pad'}
           
          />

           <CustomTextInput
            placeholder="Address "
            onChangeText={e => setAddress(e)}
            value={address}
            maxLength={10}
          
           
          />

           <CustomTextInput
            placeholder="Zip Code"
            onChangeText={e => setZipCode(e)}
            value={zipCode}
            maxLength={6}
            keyboardType={'number-pad'}
           
          />



       
             <CustomTextInput
            style={{marginTop: hpx(2)}}
            placeholder="Enter your password"
            onChangeText={e => setPassword(e)}
            value={password}
            type="password"
            setShowPassword={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />
            <CustomTextInput
            style={{marginTop: hpx(2)}}
            placeholder="Confirm your password"
            onChangeText={e => setConfirmPassword(e)}
            value={confirmPassword}
            type="password"
            setShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
            showPassword={showConfirmPassword}
          />


        </View>

        <View style={{alignSelf:'center',marginVertical:hpx(25)}}>
          <TouchableOpacity  onPress={()=>handleSignup()} style={{height:hpx(50),width:wpx(200),borderRadius:wpx(10),
            backgroundColor:colors.blue,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:nf(20),fontWeight:'bold',color:colors.white}}>Sign up</Text>
          </TouchableOpacity>
        </View>
     

        <View style={SignupStyles.alreadyRegister}>
          {/* <CustomText text="Don't have any account? " regular eh5 style={SignupStyles.continueText} /> */}
          <Text style={SignupStyles.continueText}>Already Registered </Text>
          <TouchableOpacity 
           style={{marginTop:hpx(5)}} onPress={()=>navigation.navigate('Login')}>
           <Text style={{textDecorationLine:'underline',color:colors.blue}}> Login Now </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;