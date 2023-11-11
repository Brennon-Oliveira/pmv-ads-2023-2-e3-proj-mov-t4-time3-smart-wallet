import { StyleSheet } from "react-native";

const NewPostingStyles = {
    style: StyleSheet.create({
        page: {
            flex: 1,
            display: "flex",
            padding:20
        },
    }),
    header: StyleSheet.create({
        container: {
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        },
        headerText: {
          fontSize: 20,
          fontWeight: "bold",
        },
        headerCloseButton: {
          width: 20
        },
    }),
    form: StyleSheet.create({
        container:{
            flex: 1,
            display: "flex",
            margin: 20
        },
        group: {},
        label:{
            fontSize: 15,
            fontWeight: "bold",
            margin: 10,
        },
        picker: {
            width: "90%",
            height: 40,
            padding: 4,
            backgroundColor: "#fff",
            borderColor: "transparent"
        }
    })
}


export default NewPostingStyles
  