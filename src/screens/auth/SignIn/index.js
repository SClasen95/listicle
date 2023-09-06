import React, { useContext, useState } from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "../../../utils/backendCalls";
import { UserContext } from "../../../../App";

const Signup = ({ navigation }) => {
  const [values, setValues] = useState({});
  const { setUser } = useContext(UserContext);

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onSignUp = () => {
    navigation.navigate("Signup");
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onSubmit = async () => {
    const token = await login(values);
    setUser({ token });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input
          keyboardType="email-address"
          placeholder={"example@gmail.com"}
          label="Email"
          onChangeText={(v) => onChange("email", v)}
        />
        <Input
          isPassword={true}
          placeholder={"*******"}
          label="Password"
          onChangeText={(v) => onChange("password", v)}
        />
        {/* a un componente que yo creo, si le quiero dar un style, tengo que hacer que reciba ese style por propiedad y despues esa propiedad pasarla al style de lo que quiero que lleve eese estilo */}
        <Button onPress={onSubmit} style={styles.button} title="Sign In" />
        <Separator title="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignUp} style={styles.footerLink}>
            {" "}
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
