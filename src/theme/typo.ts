import colors from './core-colors';
import { StyleSheet, TextStyle } from 'react-native';

interface TextStyles {
    displayInverse: TextStyle;
    displayInactive: TextStyle;
    displaySecondary: TextStyle;
    displayDefault: TextStyle;
    h1Inverse: TextStyle;
    h1Secondary: TextStyle;
    h1Default: TextStyle;
    h2Inverse: TextStyle;
    h2Inactive: TextStyle;
    h2Secondary: TextStyle;
    h2Default: TextStyle;
    h3Inverse: TextStyle;
    h3Inactive: TextStyle;
    h3Secondary: TextStyle;
    h3Default: TextStyle;
    h4Inverse: TextStyle;
    h4Inactive: TextStyle;
    h4Secondary: TextStyle;
    h4Default: TextStyle;
    h5Inverse: TextStyle;
    h5Inactive: TextStyle;
    h5Secondary: TextStyle;
    h5Default: TextStyle;
    h6Inverse: TextStyle;
    h6Inactive: TextStyle;
    h6Secondary: TextStyle;
    h6Default: TextStyle;
    h6TintedError: TextStyle;
    subheadTintedWarning: TextStyle;
    subheadTintedError: TextStyle;
    subheadTintedInfo: TextStyle;
    subheadTintedPrimary: TextStyle;
    subheadInverse: TextStyle;
    subheadInactive: TextStyle;
    subheadSecondary: TextStyle;
    subheadDefault: TextStyle;
    title1TintedWarning: TextStyle;
    title1TintedError: TextStyle;
    title1TintedInfo: TextStyle;
    title1TintedPrimary: TextStyle;
    title1Inverse: TextStyle;
    title1Inactive: TextStyle;
    title1Secondary: TextStyle;
    title1Default: TextStyle;
    title1DefaultNew: TextStyle;
    body1TintedWarning: TextStyle;
    body1TintedError: TextStyle;
    body1TintedInfo: TextStyle;
    body1TintedPrimary: TextStyle;
    body1Inverse: TextStyle;
    body1Inactive: TextStyle;
    body1Secondary: TextStyle;
    body1Default: TextStyle;
    title2TintedWarning: TextStyle;
    title2TintedError: TextStyle;
    title2TintedInfo: TextStyle;
    title2TintedPrimary: TextStyle;
    title2Inverse: TextStyle;
    title2Inactive: TextStyle;
    title2Secondary: TextStyle;
    title2Primary: TextStyle;
    title2Default: TextStyle;
    button1Inverse: TextStyle;
    button1Inactive: TextStyle;
    button1Secondary: TextStyle;
    button1Default: TextStyle;
    button1Tinted: TextStyle;
    button1TintedError: TextStyle;
    button2Inverse: TextStyle;
    button2Inactive: TextStyle;
    button2Secondary: TextStyle;
    button2Default: TextStyle;
    button2TintedPrimary: TextStyle;
    button2TintedInfo: TextStyle;
    body2TintedWarning: TextStyle;
    body2TintedError: TextStyle;
    body2TintedInfo: TextStyle;
    body2TintedPrimary: TextStyle;
    body2Inverse: TextStyle;
    body2Inactive: TextStyle;
    body2Secondary: TextStyle;
    body2Default: TextStyle;
    overlineTintedWarning: TextStyle;
    overlineTintedError: TextStyle;
    overlineTintedInfo: TextStyle;
    overlineTintedPrimary: TextStyle;
    overlineInverse: TextStyle;
    overlineInactive: TextStyle;
    overlineSecondary: TextStyle;
    overlineDefault: TextStyle;
    overlineInactive2: TextStyle;
    captionTintedWarning: TextStyle;
    captionTintedError: TextStyle;
    captionTintedInfo: TextStyle;
    captionTintedPrimary: TextStyle;
    captionInverse: TextStyle;
    captionInactive: TextStyle;
    captionSecondary: TextStyle;
    captionDefault: TextStyle;
}

const textStyles: TextStyles = StyleSheet.create({
    displayInverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 48,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 60,
        letterSpacing: -0.4,
        color: colors.white
    },
    displayInactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 48,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 60,
        letterSpacing: -0.4,
        color: colors.base04
    },
    displaySecondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 48,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 60,
        letterSpacing: -0.4,
        color: colors.base06
    },
    displayDefault: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 48,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 60,
        letterSpacing: -0.4,
        color: colors.base10
    },
    h1Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 42,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 54,
        letterSpacing: 0,
        color: colors.white
    },
    h1Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 42,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 54,
        letterSpacing: 0,
        color: colors.base06
    },
    h1Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 42,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 54,
        letterSpacing: 0,
        color: colors.base10
    },
    h2Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 36,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 48,
        letterSpacing: 0,
        color: colors.white
    },
    h2Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 36,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 48,
        letterSpacing: 0,
        color: colors.base04
    },
    h2Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 36,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 48,
        letterSpacing: 0,
        color: colors.base06
    },
    h2Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 36,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 48,
        letterSpacing: 0,
        color: colors.base10
    },
    h3Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 32,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 42,
        letterSpacing: 0,
        color: colors.white
    },
    h3Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 32,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 42,
        letterSpacing: 0,
        color: colors.base04
    },
    h3Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 32,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 42,
        letterSpacing: 0,
        color: colors.base06
    },
    h3Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 32,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 42,
        letterSpacing: 0,
        color: colors.base10
    },
    h4Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 28,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        color: colors.white
    },
    h4Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 28,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        color: colors.base04
    },
    h4Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 28,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        color: colors.base06
    },
    h4Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 28,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        color: colors.base10
    },
    h5Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0,
        color: colors.white
    },
    h5Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0,
        color: colors.base04
    },
    h5Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0,
        color: colors.base06
    },
    h5Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0,
        color: colors.base10
    },
    h6Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0,
        color: colors.white
    },
    h6Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0,
        color: colors.base04
    },
    h6Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0,
        color: colors.base06
    },
    h6Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0,
        color: colors.base10
    },
    h6TintedError: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0,
        color: colors.error06
    },
    subheadTintedWarning: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.warning06
    },
    subheadTintedError: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.error06
    },
    subheadTintedInfo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.info06
    },
    subheadTintedPrimary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.primary06
    },
    subheadInverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.white
    },
    subheadInactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.base04
    },
    subheadSecondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.base06
    },
    subheadDefault: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.16,
        color: colors.base10
    },
    title1TintedWarning: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.warning06
    },
    title1TintedError: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.error06
    },
    title1TintedInfo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.info06
    },
    title1TintedPrimary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.primary06
    },
    title1Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.white
    },
    title1Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.base04
    },
    title1Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.base06
    },
    title1Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.base10
    },
    title1DefaultNew: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0.24,
        color: colors.base10
    },
    body1TintedWarning: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.warning06
    },
    body1TintedError: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.error06
    },
    body1TintedInfo: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.info06
    },
    body1TintedPrimary: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.primary06
    },
    body1Inverse: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.white
    },
    body1Inactive: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.base04
    },
    body1Secondary: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.base06
    },
    body1Default: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.24,
        color: colors.base10,
    },
    title2TintedWarning: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.warning04
    },
    title2TintedError: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.error04
    },
    title2TintedInfo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.info04
    },
    title2TintedPrimary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.primary06
    },
    title2Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.white
    },
    title2Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.base04
    },
    title2Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.base06
    },
    title2Primary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.base10
    },
    title2Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 1.2,
        color: colors.base10
    },
    button1Inverse: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.8,
        color: colors.white
    },
    button1Inactive: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.8,
        color: colors.base04
    },
    button1Secondary: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.8,
        color: colors.base06
    },
    button1Default: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.8,
        color: colors.base10
    },
    button1Tinted: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.8,
        color: colors.primary06
    },
    button1TintedError: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.8,
        color: colors.error06
    },
    button2Inverse: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        color: colors.white
    },
    button2Inactive: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        color: colors.base04
    },
    button2Secondary: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        color: colors.base06
    },
    button2Default: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        color: colors.base10
    },
    button2TintedPrimary: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "right",
        color: colors.primary06
    },
    button2TintedInfo: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "right",
        color: colors.info06
    },
    body2TintedWarning: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.warning06
    },
    body2TintedError: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.error06
    },
    body2TintedInfo: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.info06
    },
    body2TintedPrimary: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.primary06
    },
    body2Inverse: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.white
    },
    body2Inactive: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.base04
    },
    body2Secondary: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.base06
    },
    body2Default: {
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.24,
        color: colors.base10
    },
    overlineTintedWarning: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.warning06
    },
    overlineTintedError: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.error06
    },
    overlineTintedInfo: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.info06
    },
    overlineTintedPrimary: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.primary06
    },
    overlineInverse: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.white
    },
    overlineInactive: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.base04
    },
    overlineSecondary: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.base06
    },
    overlineDefault: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.12,
        color: colors.base10
    },
    overlineInactive2: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.21,
        color: colors.base03
    },
    captionTintedWarning: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.warning06
    },
    captionTintedError: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.error06
    },
    captionTintedInfo: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.info06
    },
    captionTintedPrimary: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.primary06
    },
    captionInverse: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.white
    },
    captionInactive: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.base04
    },
    captionSecondary: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.base06
    },
    captionDefault: {
        fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.4,
        color: colors.base10
    }
});


export default textStyles;