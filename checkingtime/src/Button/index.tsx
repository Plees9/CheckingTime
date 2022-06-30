import React, { useMemo } from "react";
import { Pressable, StyleProp, ViewStyle, Text } from "react-native";

import createStyles from "./styles";



interface IProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<ViewStyle>;
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
}

const Button: React.FC<IProps> = ({
  title,
  onPress,
  disabled,
  buttonStyle,
  textStyles,
  color = "primary",
}) => {
  // const { theme } = useSelector(DashboardSelectors.selectDashboard);
  const theme = {
    primary: '#C62828',
    secondary: '#424242',
    success: '#4CAF50',
  }
  const styles = useMemo(() => createStyles(), []);
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? theme.secondary
            : theme.primary,
        },
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
