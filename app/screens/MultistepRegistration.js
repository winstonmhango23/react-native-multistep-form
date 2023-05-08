import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AnimatedMultistep from "../components/authenticationcomponents/multistepform/utilities";

import Step1 from "../components/authenticationcomponents/multistepform/StepOne";
import Step2 from "../components/authenticationcomponents/multistepform/StepTwo";
import Step3 from "../components/authenticationcomponents/multistepform/StepThree";
import Step4 from "../components/authenticationcomponents/multistepform/StepFour";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 },
  { name: "step 4", component: Step4 }
];

const MultistepRegistration = () => {
  const [state, setState] = useState({});

  const onNext = () => {
    console.log("Next");
  };

  const onBack = () => {
    console.log("Back");
  };

  const finish = (state) => {
    console.log("TCL: App -> state", state);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1dd1a1" }}>
      <View style={styles.upperContainer}>
        <Text style={styles.loginText}>Register</Text>
      </View>
      <View style={styles.lowerContainer}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={finish}
          animate={true}
          onBack={onBack}
          onNext={onNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginText: {
    fontSize: 32,
    color: "#fff"
  },
  lowerContainer: {
    flex: 2
  }
});

export default MultistepRegistration;
