import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

const Step1 = (props) => {
  const { getTotalSteps, getCurrentStep, saveState, next, back } = props;

  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setTotalSteps(getTotalSteps());
    setCurrentStep(getCurrentStep());
  }, []);

  const nextStep = () => {
    // Save state for use in other steps
    saveState({ firstName, lastName, email, phone, password });
    // Go to next step
    next();
  };

  const goBack = () => {
    // Go to previous step
    back();
  };

  return (
    <View style={[styles.container, styles.step1]}>
      <View>
        <Text style={styles.currentStepText}>
          {`Step ${currentStep} of ${totalSteps}`}
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        placeholder={"First Name"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        placeholder={"Last Name"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder={"Email"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        placeholder={"Phone"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder={"Password"}
        placeholderTextColor="#fff"
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={nextStep} style={styles.btnStyle}>
          <Image
            source={require("../../../../assets/icons/arrow.png")}
            style={styles.btnImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "6%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%"
  },
  step1: {
    flex: 1
  },
  step2: {
    flex: 1
  },
  step3: {
    flex: 1
  },
  step4: {
    flex: 1
  },
  input: {
    width: "80%",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginTop: "6%"
  },
  btnStyle: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  btnImage: {
    width: "40%",
    height: "40%"
  },
  backBtn: {
    transform: [{ rotate: "180deg" }]
  },
  marginAround: {
    width: "40%",
    justifyContent: "space-between"
  },
  currentStepText: {
    color: "#fff",
    fontSize: 22
  }
});