import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seyfImg: {
    width: 75,
    height: 60,
  },
  imageContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 40,
  },
  rightTopContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  goldImg: {
    width: 60,
    height: 40,
  },
  goldText: {
    color: "#c29555",
    fontFamily: "Poppins_Regular",
    fontSize: 24,
    lineHeight: 30,
  },
  textContainer: {
    borderLeftWidth: 2,
    borderLeftColor: "#585959",
    paddingLeft: 10,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  formContainer: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    marginTop: 70,
    marginHorizontal: 30,
  },
  mainContainer: {
    marginTop: 20,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  input: {
    color: "#000",
    // marginLeft: -40,
    fontSize: 14,
    marginTop: 9,
    letterSpacing: 1,
    width: 250,
    fontFamily: "Poppins_Regular",
  },
  loginText: {
    color: "#c29555",
    fontSize: 32,
    fontFamily: "Poppins_Regular",
    letterSpacing: 1,
  },
  border: {
    width: 44,
    height: 3,
    backgroundColor: "#c29555",
    marginLeft: 3,
  },
  buttonMainContainer: {
    marginTop: 130,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  skipText: {
    color: "#c29555",
    marginRight: 15,
    fontFamily: "Poppins_Bold",
    fontSize: 18,
  },
  arrowBtnContainer: {
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: 10,
  },
  arrowBtn: {
    fontSize: 20,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    width: 200,
  },
  dropdown: {
    height: 50,
    width: 128,
    paddingHorizontal: 8,
    marginLeft: 10,
  },
  dropdown2: {
    height: 50,
    width: "100%",
    paddingHorizontal: 8,
    marginLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 24,
    color: "#fff",
    zIndex: 999,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: "#fff",
  },
  iconStyle: {
    width: 30,
    height: 30,
    position: "absolute",
    left: -30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdownItem: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#9e9b9b",
    paddingVertical: 8,
  },
  dropdownItem2: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#9e9b9b",
    paddingVertical: 8,
  },
  placeholderItem: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#585959",
    width: "100%",
    alignItems: "center",
  },
  inputLabel: {
    color: "#333",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 5,
    fontFamily: "Lato_Bold",
    fontSize: 16,
    marginTop: 10,
  },
  inputLabel2: {
    color: "#333",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 5,
    fontFamily: "Lato_Bold",
    fontSize: 16,
    marginTop: 30,
  },
  normalText: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Poppins_Regular",
  },
  linkText: {
    color: "#000",
    textDecorationLine: "underline",
    fontFamily: "Poppins_Bold",
  },
  disabledButtonText: {
    opacity: 0.5,
  },
  alertText: {
    color: "#fa4402",
    fontFamily: "Poppins_Medium",
    fontSize: 14,
    marginTop: 10,
  },
});

export default styles;
