import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "../../utils/color";
//import { wpx, hpx, nf, fonts, colors, wp } from "../../constants/constant";

export default HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    //marginTop: Platform.OS == "android" ? wpx(20) : wpx(0),
    alignItems: "center",
    width:335,
    marginTop: 10 ,
    height: Platform.OS == "ios" ? 50 : 60,
    marginHorizontal:20,
  },
  title: {
    fontSize:20,
    fontWeight:'900',
    //fontFamily: fonts.semiBold,
    color:Colors.black,
  },
  multipleButtonMainView: {
    flexDirection: "row",
    width:15,
    justifyContent: "space-between",
   
  },
});