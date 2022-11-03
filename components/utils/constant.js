import { Dimensions, PixelRatio, Platform } from "react-native";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 375;

const normalizeFont = size => {
  const newSize = size * scale;

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
//export const mobileRegex='^([0|+[0-9]{1,5})?([7-9][0-9]{9})$';
export const mobileRegex = /^(\+|\d)[0-9]{7,16}$/;
export const firstnameRegex = /^[a-zA-Z_ -]{3,40}$/;
export const lastnameRegex = /^[a-zA-Z_ -]{3,40}$/;


const widthPercentageToDP = widthPercent => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

const widthFromPixel = (widthPx, w = 375) => {
  const newSize = widthPx * (SCREEN_WIDTH / w);

  return newSize;
};

const heightFromPixel = (heightPx, h = 812) => {
  const newSize = heightPx * (SCREEN_HEIGHT / h);

  return newSize;
};


export const colors = {
  black1: "#313132",
  black: "#000",
  backwithopacity: "#7F7F7F",
  white: "#FFFFFF",
  grey: "#6F6F6F",
  offWhite: "#F3F5F9",
  buttonGradientColor1: "#0000FF",
  buttonGradientColor2: "##1CB5E0",
  blue: "#0F65ED",
  offWhite2: "#F6F5FB",
  backgroundShadow: "rgba(0,0,0,0.1)",
  inactiveDot: "#DADADA",
  black2: "#4C4C4C",
  matterHorn: "#4C4C4C",
  blue1: "#1CB3E0",
  blue3: "#116EEC",
  purple: "#9795FA",
  black4: "#000000",
  shadow: "#0000004D",
};


export {
  widthFromPixel as wpx,
  heightFromPixel as hpx,
  normalizeFont as nf,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
};

