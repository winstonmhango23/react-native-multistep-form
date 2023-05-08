// import React, { useState } from "react";
// import { Image, View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

// // import styles from "./styles";

// const Step3 = (props) => {
//   const [currentStep, setCurrentStep] = useState("");
//   const [totalSteps, setTotalSteps] = useState("");

//   React.useEffect(() => {
//     const { getTotalSteps, getCurrentStep } = props;
//     setTotalSteps(getTotalSteps());
//     setCurrentStep(getCurrentStep());
//   }, [props]);

//   return (
//     <View style={[styles.container, styles.step1]}>
//       <View>
//         <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
//       </View>
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) => this.setState({ text })}
//         value={this.state.text}
//         placeholder={"City"}
//         placeholderTextColor="#fff"
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) => this.setState({ text })}
//         value={this.state.text}
//         placeholder={"Country"}
//         placeholderTextColor="#fff"
//       />
//       <View style={[styles.btnContainer, styles.marginAround]}>
//         <TouchableOpacity onPress={props.back} style={styles.btnStyle}>
//           <Image
//             source={require("../../../../assets/icons/arrow.png")}
//             style={[styles.btnImage, styles.backBtn]}
//             resizeMode="cover"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={props.next} style={styles.btnStyle}>
//           <Image
//             source={require("../../../../assets/icons/arrow.png")}
//             style={styles.btnImage}
//             resizeMode="cover"
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Step3;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: "6%"
//   },
//   btnContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: "6%"
//   },
//   step1: {
//     flex: 1
//   },
//   step2: {
//     flex: 1
//   },
//   step3: {
//     flex: 1
//   },
//   step4: {
//     flex: 1
//   },
//   input: {
//     width: "80%",
//     borderColor: "#fff",
//     borderWidth: 2,
//     borderRadius: 6,
//     paddingHorizontal: 8,
//     marginTop: "6%"
//   },
//   btnStyle: {
//     borderColor: "#fff",
//     borderWidth: 2,
//     borderRadius: 100,
//     width: 60,
//     height: 60,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   btnImage: {
//     width: "40%",
//     height: "40%"
//   },
//   backBtn: {
//     transform: [{ rotate: "180deg" }]
//   },
//   marginAround: {
//     width: "40%",
//     justifyContent: "space-between"
//   },
//   currentStepText: {
//     color: "#fff",
//     fontSize: 22
//   }
// });


// import React, { useState, useEffect } from "react";
// import { Image, View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

// const Step3 = (props) => {
//   const [currentStep, setCurrentStep] = useState("");
//   const [totalSteps, setTotalSteps] = useState("");
//   const [text, setText] = useState("");

//   useEffect(() => {
//     const { getTotalSteps, getCurrentStep } = props;
//     setTotalSteps(getTotalSteps());
//     setCurrentStep(getCurrentStep());
//   }, [props]);

//   return (
//     <View style={[styles.container, styles.step3]}>
//       <View>
//         <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
//       </View>
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) => setText(text)}
//         value={text}
//         placeholder={"City"}
//         placeholderTextColor="#fff"
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) => setText(text)}
//         value={text}
//         placeholder={"Country"}
//         placeholderTextColor="#fff"
//       />
//       <View style={[styles.btnContainer, styles.marginAround]}>
//         <TouchableOpacity onPress={props.back} style={styles.btnStyle}>
//           <Image
//             source={require("../../../../assets/icons/arrow.png")}
//             style={[styles.btnImage, styles.backBtn]}
//             resizeMode="cover"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={props.next} style={styles.btnStyle}>
//           <Image
//             source={require("../../../../assets/icons/arrow.png")}
//             style={styles.btnImage}
//             resizeMode="cover"
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Step3;


import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

const Step3 = (props) => {
  const { getTotalSteps, getCurrentStep, saveState, next, back } = props;

  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [residence, setResidence] = useState('');
  const [nextOfKin, setNextOfKin] = useState('');
  const [nextOfKinContact, setNextOfKinContact] = useState('');
  const [nextOfKinAddress, setNextOfKinAddress] = useState('');

  useEffect(() => {
    setTotalSteps(getTotalSteps());
    setCurrentStep(getCurrentStep());
  }, []);

  const nextStep = () => {
    // Save state for use in other steps
    saveState({ residence, nextOfKin, nextOfKinContact, nextOfKinAddress });
    // Go to next step
    next();
  };

  const goBack = () => {
    // Go to previous step
    back();
  };

  return (
    <View style={[styles.container, styles.step3]}>
      <View>
        <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setResidence(text)}
        value={residence}
        placeholder={"Residence"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNextOfKin(text)}
        value={nextOfKin}
        placeholder={"Next of Kin"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNextOfKinContact(text)}
        value={nextOfKinContact}
        placeholder={"Next of Kin Contact"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNextOfKinAddress(text)}
        value={nextOfKinAddress}
        placeholder={"Next of Kin Address"}
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

export default Step3;


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
