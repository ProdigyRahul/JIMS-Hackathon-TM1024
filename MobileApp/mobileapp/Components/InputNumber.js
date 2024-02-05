import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js";
import { CountryCodePicker, CountryCodeKey } from "./CountryCodes";

const InputNumber = () => {
  // state for controlled text
  const [text, setText] = useState("");
  // selected country code
  const [code, setCode] = useState("101"); // default country code
  // conditional rendering of TextInput font size
  const [textSize, setTextSize] = useState(15);

  // condtion for placeholder to be a smaller font size than the text
  useEffect(() => {
    if (text.length > 0) setTextSize(18);
    else if (text.length === 0) setTextSize(15);
  }, [text]);

  // function for controlled text
  const onTextChange = (number) => {
    const num = parsePhoneNumberFromString(number, CountryCodeKey[code][0]);
    let reg = /^[0-9]/;
    if (
      !!num &&
      text.length > number.length &&
      !reg.test(text[text.length - 1])
    ) {
      let phone = num.nationalNumber.split("");
      phone.pop();
      phone = phone.join("");
      setText(phone);
    } else {
      setText(new AsYouType(CountryCodeKey[code][0]).input(number));
    }
  };

  // function that is called when TextInput is submitted
  const signInWithPhone = () => {
    const num = parsePhoneNumberFromString(text, CountryCodeKey[code][0]);
    if (!!num && num.isPossible()) {
      console.log("Phone Number", num.number);
    } else {
      alert("Please enter a valid phone number");
    }
  };

  return (
    <View>
      <View style={styles.number}>
        <Picker
          style={styles.picker}
          itemStyle={{ fontSize: 20, height: 95 }}
          selectedValue={code}
          onValueChange={(itemVal) => setCode(itemVal)}
        >
          {CountryCodePicker.map((cc) => (
            <Picker.Item
              key={cc[2]}
              label={`${cc[0]} +${cc[1]}`}
              value={`${cc[2]}`}
            />
          ))}
        </Picker>
        <TextInput
          style={{ marginLeft: 10, width: 170, fontSize: textSize }}
          onChangeText={(num) => onTextChange(num)}
          value={text}
          keyboardType="phone-pad"
          placeholder="Enter Phone Number"
          textAlign="left"
        />
      </View>
      <Button style={styles.button} title="Get OTP" onPress={signInWithPhone} />
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 95,
  },
  picker: {
    width: 150,
    marginLeft: -15,
  },
  button: {
    marginTop: 20,
    width: 300,
    backgroundColor: "#016CC6",
    padding: 10,
    borderRadius: 5,
  },
});

export default InputNumber;
