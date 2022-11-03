import { StyleSheet } from "react-native";
import { colors, fonts, hpx, nf, wp, wpx } from '../../../utils/constant'

export const LoginStyles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#FFFFFF" },
  container: { marginHorizontal: wpx(15), marginTop: hpx(45) },
  mainHeading: {
    fontSize: nf(22),
    
    color: colors.black,
  },
  description: {
    fontSize: nf(15),
  
    color: "#6F6F6F",
    width: wpx(330),
    marginTop: hpx(5),
    marginBottom: hpx(20),
  },
  formView: { marginVertical: hpx(10) },
  termsAndCondText: {
    fontSize: nf(13),
   
    color: "#000000",
    marginTop: hpx(5),
  },
  registerWithview: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: hpx(20),
  },
  socialIconMainView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: wpx(120),
    alignSelf: "center",
    marginTop: hpx(18),
  },
  socialMediaIconView: {
    height: hpx(45),
    width: wpx(45),
    borderWidth: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "#55555533",
    borderRadius: wpx(15),
  },
  alreadyRegister: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hpx(207),
  },
  continueText: {
    color: "#000000",
    marginTop: hpx(5),
  },
});