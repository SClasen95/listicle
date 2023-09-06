import React, { useContext, useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { request } from "../../../utils/request";
import { signup } from "../../../utils/backendCalls";
import { UserContext } from "../../../../App";

const Signup = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const { setUser } = useContext(UserContext);

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onSubmit = async () => {
    try {
      if (values?.password !== values?.confirmPassword) {
        Alert.alert("Passwords do not match");
        return;
      }
      if (
        !values?.password ||
        !values?.confirmPassword ||
        !values?.fullName ||
        !values?.email
      ) {
        Alert.alert("Missing fields");
        return;
      }
      if (!checked) {
        Alert.alert("You must agree to the terms");
        return;
      }
      const token = await signup(values);
      setUser({ token });
      console.log("token: ", token);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input
          value={values.fullName}
          onChangeText={(v) => onChange("fullName", v)}
          placeholder={"John Doe"}
          label="Name"
        />
        <Input
          keyboardType="email-address"
          value={values.email}
          onChangeText={(v) => onChange("email", v)}
          placeholder={"example@gmail.com"}
          label="Email"
        />
        <Input
          value={values.password}
          onChangeText={(v) => onChange("password", v)}
          isPassword={true}
          placeholder={"*******"}
          label="Password"
        />
        <Input
          value={values.confirmPassword}
          onChangeText={(v) => onChange("confirmPassword", v)}
          isPassword={true}
          placeholder={"*******"}
          label="Confirm Password"
        />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{" "}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>
        {/* a un componente que yo creo, si le quiero dar un style, tengo que hacer que reciba ese style por propiedad y despues esa propiedad pasarla al style de lo que quiero que lleve eese estilo */}
        <Button onPress={onSubmit} style={styles.button} title="Sign Up" />
        <Separator title="Or sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {" "}
            Sign in
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
