// firebase.js
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const signInWithPhoneNumber = async (phoneNumber) => {
  try {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    return confirmation;
  } catch (error) {
    throw error;
  }
};

export const verifyOTP = async (confirmation, verificationCode) => {
  try {
    await confirmation.confirm(verificationCode);
    // OTP verification successful
  } catch (error) {
    throw error;
  }
};

export const addUserToFirestore = async (userId, userData) => {
  try {
    await firestore().collection("users").doc(userId).set(userData);
  } catch (error) {
    throw error;
  }
};
