import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <table>
        <tr>
            <td><label>Añade el archivo txt que quieras cifrar o descifrar:</label></td>
            <td><input type="file" onchange="loadFile(this.files[0])" id="texto" name="texto" class="file" accept=".txt" /></td>
        </tr>
        <tr>
            <td><label>Ingresa la clave de 8 caracteres para cifrar o descifrar:</label></td>
            <td><input type="text" id="clave" name="clave" class="text" maxlength="8" autocomplete="off" /></td>
        </tr>
        <tr>
            <td><button onclick={Cifrar()}>Cifrar</button>&nbsp;&nbsp;&nbsp;&nbsp;<button onclick={Descifrar()}>Descifrar</button></td>
        </tr>
        <tr>
            <td colspan="2"><label id="resultado"></label></td>
        </tr>
        <tfoot>
            <td colspan="2" align="center">5IV7 Rosales Barraza Erick Efren</td>
        </tfoot>
    </table>
    </View>
  );
}
function Cifrar(){
  document.getElementById("texto").addEventListener('change', function(){
    var archivo = new FileReader();
    archivo.onload = () => {
      contenido = file.result;
      if ((contenido && clave) && clave.length == 8) {
        let result = CryptoJS.DES.encrypt(contenido, clave).toString();
        document.getElementById('resultado').innerText = result;  
      } 
    }; 
  }); 
};
function Descifrar(){
  document.getElementById("texto").addEventListener('change', function(){
    var archivo = new FileReader();
    archivo.onload = () => {
      contenido = file.result;
      let clave = document.getElementById('clave').value;
      if ((contenido && clave) && clave.length == 8) {
        let result = CryptoJS.DES.decrypt(contenido, clave).toString(CryptoJS.enc.Utf8);
        document.getElementById('resultado').innerText = result;  
      }
    }; 
  });  
};

const styles = StyleSheet.create({
  body: {
    color: white,
    backgroundColor: rgb(80, 80, 180),
    fontFamily: Roboto,
    justifyContent: center,
    alignItems: center,
    display: flex,
},
table: {
    backgroundColor: rgb(125, 66, 145),
    borderRadius: 30,
    width: 1000,
},
td: {
    alignContent: center,
    padding: 3
},
button: {
    color: white,
    backgroundColor: rgb(80, 80, 180),
    borderColor: rgb(80, 80, 180),
},
input: {
    color: white,
    backgroundColor: rgb(80, 80, 180),
}
});
