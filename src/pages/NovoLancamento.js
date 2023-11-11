import { StyleSheet, Text, View, Button, Touchable } from "react-native";
import { TextInput } from "react-native-paper";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
import NewPostingStyles from "./styles/NovoLancamento.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";



const NovoLançamento = ({navigation}) => {

    const [category, setCategory] = useState();

    const goBack = ()=>{
        navigation.goBack();
    }

    return (
        <View style={NewPostingStyles.style}>
            <View style={NewPostingStyles.header.container}>
                <Text style={NewPostingStyles.header.headerText}>Novo Lançamento</Text>
                <TouchableOpacity onPress={goBack} style={NewPostingStyles.header.headerCloseButton} ><Text>X</Text></TouchableOpacity>
            </View>
            <View style={NewPostingStyles.form.container}>
                <View style={NewPostingStyles.form.group}>
                  <Text style={NewPostingStyles.form.label}>Categoria</Text>
                  <Picker
                      style={NewPostingStyles.form.picker}
                      selectedValue={category}
                      onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                      }>
                      <Picker.Item label="Receita" value="income" />
                      <Picker.Item label="Despesa" value="expenditure" />
                  </Picker>
                </View>
                <View style={NewPostingStyles.form.group}>
                  <Text style={NewPostingStyles.form.label}>Classificação</Text>
                  <Picker
                      style={NewPostingStyles.form.picker}
                      selectedValue={category}
                      onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                      }>
                      <Picker.Item label="Receita" value="income" />
                      <Picker.Item label="Despesa" value="expenditure" />
                  </Picker>
                </View>
                <View>
                  <View style={NewPostingStyles.form.group}>
                    <Text style={NewPostingStyles.form.label}>Data de vencimento</Text>
                    <RNDateTimePicker value={new Date()}></RNDateTimePicker>
                  </View>
                </View>
            </View>
        </View>
    );
}



export default NovoLançamento;
