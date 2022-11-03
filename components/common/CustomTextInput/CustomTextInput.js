import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
 
} from "react-native";

import moment from "moment";
import { hpx,wpx,colors,wp,hp,nf } from "../../utils/constant";
import Icons from "../../utils/icons";

import InputStyles from "./InputStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const CustomTextInput = props => {

    const [isTimeVisible, setTimeVisibile] = useState(false);
    const [time, setTime] = useState();
    const [showTime, setShowTime] = useState();
    const [isDateVisible, setIsDateVisible] = useState(false);
    const [date, setDate] = useState();
    const [showDate, setShowDate] = useState();


  const handleTime = time => {
    let selectedTime = moment(time).format("hh:mm A");
    setShowTime(selectedTime);
    setTime(moment(time).format("hh:mm A"));
    setTimeVisibile(false);
    props.setTime(moment(time).format("hh:mm A"));
  };

  const handleDate = date => {
    let selectedDate = moment(date).format("YYYY-MM-DD");
    setShowDate(selectedDate);
    setDate(selectedDate);
    setIsDateVisible(false);
    props.setDate(() => moment(date).format("YYYY-MM-DD"));
  };

  return props.type == "password" ? (
    <>
      <View style={{ ...InputStyles.textInputViewStyle, ...props.style }}>
        <View
          style={{
            ...InputStyles.textInputViewStyle,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <TextInput
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={text => props.onChangeText(text)}
            style={InputStyles.textInputStyle}
            secureTextEntry={props.showPassword}
            onSubmitEditing={props.onSubmitEditing}
            placeholderTextColor={colors.grey}
          />
          <TouchableOpacity onPress={() => props.setShowPassword(!props.showPassword)}>
            {props.showPassword ? (
              <Image style={InputStyles.eyeIconStyle} source={Icons.eyeInactive} resizeMode={"contain"} />
            ) : (
              <Image style={InputStyles.eyeIconStyle} source={Icons.eyeActive} resizeMode={"contain"} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontSize: nf(14), color: "red", width: wpx(320) }}>{props.errorMessage}</Text>
    </>
  )  : props.type == "time" ? (
    <>
      <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => setTimeVisibile(!isTimeVisible)}>
        <View style={{ ...InputStyles.timeInputViewStyle, ...props.style }}>
          <TextInput
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            editable={false}
            value={props.value}
            onChangeText={text => props.onChangeText(text)}
            style={InputStyles.timeInputStyle}
            placeholderTextColor={colors.grey}
          />
          <Image source={Icons.dropDown} style={{ ...InputStyles.eyeActive, alignSelf: "center" }} />
        </View>
      </TouchableOpacity>

      <Text style={{ fontSize: nf(14),  color: "red" }}>{props.errorMessage}</Text>
      {isTimeVisible && (
        <DateTimePickerModal
          isVisible={isTimeVisible}
          themeVariant={"light"}
          mode="time"
          onConfirm={handleTime}
          onCancel={() => setTimeVisibile(false)}
       
        />
      )}
    </>
  ) : props.type == "date" ? (
    <>
      <View style={{ ...InputStyles.timeInputViewStyle, ...props.style }}>
        <TextInput
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          editable={false}
          value={props.value}
          onChangeText={text => props.onChangeText(text)}
          style={InputStyles.timeInputStyle}
          placeholderTextColor={colors.grey}
        />
        <TouchableOpacity onPress={() => setIsDateVisible(true)}>
          <Image source={Icons.dropDown} style={InputStyles.eyeActive} />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: nf(14),color: "red" }}>{props.errorMessage}</Text>
      {isDateVisible && (
        <DateTimePickerModal
          maximumDate={props.maximumDate}
          isVisible={isDateVisible}
          themeVariant={"light"}
          mode="date"
          onConfirm={handleDate}
          onCancel={() => setIsDateVisible(false)}
        />
      )}
    </>
  ) : props.type == "$" ? (
    <>
      <>
        <View style={{ ...InputStyles.dollarInputViewStyle, ...props.style }}>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: nf(14),
              color: colors.black,
              paddingLeft: wpx(5),
              paddingTop: hpx(2),
            }}>
            $
          </Text>
          {/* <Image source={icons.search} style={InputStyles.searchIconStyle} /> */}
          <TextInput
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            value={props.value}
            maxLength={props.maxLength}
            onChangeText={text => props.onChangeText(text)}
            style={InputStyles.searchInputStyle}
            placeholderTextColor={colors.grey}
          />
        </View>
      </>
    </>
  ) : props.type == "search" ? (
    <>
      <View style={{ ...InputStyles.searchInputViewStyle, ...props.style }}>
        <Image source={icons.search} style={InputStyles.searchIconStyle} />
        <TextInput
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={text => props.onChangeText(text)}
          style={InputStyles.searchInputStyle}
          placeholderTextColor={colors.grey}
        />
      </View>
    </>
  ) : (
    <>
      <View style={{ ...InputStyles.textInputViewStyle, ...props.style }}>
        <TextInput
          multiline={props.multiline}
          keyboardType={props.keyboardType}
          editable={props.editable}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={text => props.onChangeText(text)}
          style={InputStyles.textInputStyle}
          maxLength={props.maxLength}
          placeholderTextColor={colors.grey}
        />
      </View>
      <Text style={{ fontSize: nf(14), color: "red" }}>{props.errorMessage}</Text>
    </>
  );
};

export default CustomTextInput;
