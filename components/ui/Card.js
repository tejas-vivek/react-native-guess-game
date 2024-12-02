import { Dimensions, StyleSheet, useWindowDimensions, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){

    const {height} = useWindowDimensions();

    const marginTopDistance = height < 300 ? 18 : 36

    return(
        <View style={[styles.card, {marginTop: marginTopDistance}]}>{children}</View>
    )
};

export default Card;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        padding: 16,
        // marginTop: deviceWidth < 300 ? 18 : 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //for android
        shadowColor: "black", //for iOS
        shadowOffset: { width: 0, height: 2 }, //for iOS
        shadowRadius: 6, //for iOS
        shadowOpacity: 0.25, //for iOS
      },
})