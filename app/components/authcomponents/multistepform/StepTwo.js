// export default Step2;
import React, { useState } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

const Step2 = (props) => {
  const { getTotalSteps, getCurrentStep, saveState, next, back } = props;

  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [wageRate, setWageRate] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [homeOrigin, setHomeOrigin] = useState('');
  const [dateEmployed, setDateEmployed] = useState('');

  React.useEffect(() => {
    setTotalSteps(getTotalSteps());
    setCurrentStep(getCurrentStep());
  }, []);

  const nextStep = () => {
    // Save state for use in other steps
    saveState({ wageRate, dateOfBirth, homeOrigin, dateEmployed });
    // Go to next step
    next();
  };

  const goBack = () => {
    // Go to previous step
    back();
  };

  return (
    <View style={[styles.container, styles.step2]}>
      <View>
        <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setWageRate(text)}
        value={wageRate}
        placeholder={"Wage Rate"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDateOfBirth(text)}
        value={dateOfBirth}
        placeholder={"Date of Birth"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setHomeOrigin(text)}
        value={homeOrigin}
        placeholder={"Home Origin"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDateEmployed(text)}
        value={dateEmployed}
        placeholder={"Date Employed"}
        placeholderTextColor="#fff"
      />
      <View style={[styles.btnContainer, styles.marginAround]}>
        <TouchableOpacity onPress={goBack} style={styles.btnStyle}>
          <Image
            source={require("../../../../assets/icons/arrow.png")}
            style={[styles.btnImage, styles.backBtn]}
            resizeMode="cover"
          />
        </TouchableOpacity>
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

export default Step2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "6%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%",
  },
  step1: {
    flex: 1,
  },
  step2: {
    flex: 1,
  },
  step3: {
    flex: 1,
  },
  step4: {
    flex: 1,
  },
  input: {
    width: "80%",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginTop: "6%",
  },
  btnStyle: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImage: {
    width: "40%",
    height: "40%",
  },
  backBtn: {
    transform: [{ rotate: "180deg" }],
  },
  marginAround: {
    width: "40%",
    justifyContent: "space-between",
  },
  currentStepText: {
    color: "#fff",
    fontSize: 22,
  },
});
