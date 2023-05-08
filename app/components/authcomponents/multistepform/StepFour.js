// import React, { useState } from "react";
// import { Image, View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

// // import styles from "./styles";

// const Step4 = ({ getTotalSteps, getCurrentStep, next, back }) => {
//   const [text, setText] = useState("");
//   const totalSteps = getTotalSteps();
//   const currentStep = getCurrentStep();

//   return (
//     <View style={[styles.container, styles.step1]}>
//       <View>
//         <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
//       </View>
//       <TextInput
//         style={styles.input}
//         onChangeText={text => setText(text)}
//         value={text}
//         placeholder={"Password"}
//         placeholderTextColor="#fff"
//         secureTextEntry={true}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={text => setText(text)}
//         value={text}
//         placeholder={"Confirm password"}
//         placeholderTextColor="#fff"
//         secureTextEntry={true}
//       />
//       <View style={[styles.btnContainer, styles.marginAround]}>
//         <TouchableOpacity onPress={back} style={styles.btnStyle}>
//           <Image
//             source={require("../../../../assets/icons/arrow.png")}
//             style={[styles.btnImage, styles.backBtn]}
//             resizeMode="cover"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={next} style={styles.btnStyle}>
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

// export default Step4;

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

import React, { useState } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

const Step4 = ({ getTotalSteps, getCurrentStep, next, back }) => {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [fingerPrint, setFingerPrint] = useState("");
  const [facialScan, setFacialScan] = useState("");
  const totalSteps = getTotalSteps();
  const currentStep = getCurrentStep();

  return (
    <View style={[styles.container, styles.step4]}>
      <View>
        <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => setMaritalStatus(text)}
        value={maritalStatus}
        placeholder={"Marital Status"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setFingerPrint(text)}
        value={fingerPrint}
        placeholder={"Fingerprint"}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setFacialScan(text)}
        value={facialScan}
        placeholder={"Facial Scan"}
        placeholderTextColor="#fff"
      />
      <View style={[styles.btnContainer, styles.marginAround]}>
        <TouchableOpacity onPress={back} style={styles.btnStyle}>
          <Image
            source={require("../../../../assets/icons/arrow.png")}
            style={[styles.btnImage, styles.backBtn]}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={next} style={styles.btnStyle}>
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

export default Step4;

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
