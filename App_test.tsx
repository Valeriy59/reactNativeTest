import {StatusBar} from 'expo-status-bar';
import {
  Button, Dimensions, FlatList,
  Image, ListRenderItem,
  Pressable, ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {useState} from "react";

type DataArrayType = {
  id: number
  title: string
}

const dataArray: DataArrayType[] = new Array(100).fill(null).map((el, index) => ({
  id: index + 1,
  title: 'Lesson react native ' + (index + 1),
}))

export default function App() {
  const [value, setValue] = useState('')

  const wAndH = Dimensions.get('screen')

  const render: ListRenderItem<DataArrayType> = ({item, index, separators}) => {
    return (
      <View style={{backgroundColor: '#f6d0d0', marginVertical: 6}}>
        <Text style={{fontSize: 18, fontWeight: '500', paddingHorizontal: 12, paddingVertical: 6}}>{item.title}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList horizontal data={dataArray} renderItem={render}
                keyExtractor={(item) => `App.${item.title}.${item.id}`}/>
      <TextInput value={value} onChangeText={setValue} style={[styles.input, {backgroundColor: 'pink'}]}/>
      <View style={{marginTop: 30}}/>
      <Text>{value}</Text>
      <Text>{JSON.stringify(wAndH, null, 2)}</Text>
    </View>
    //   <View style={styles.container}>
    //     <ScrollView style={{backgroundColor: '#b2fdf2'}}>
    //       <View style={{width: 300, height: 300, backgroundColor: 'lightgreen'}}>
    //         <View style={{width: '50%', height: '10%', backgroundColor: 'pink'}}/>
    //         <Button title={'Test button'} onPress={() => {
    //         }}/>
    //         <View style={{marginTop: 15}}/>
    //         <TouchableOpacity>
    //           <View>
    //             <Text>TouchableOpacity button</Text>
    //           </View>
    //         </TouchableOpacity>
    //         <View style={{marginTop: 15}}/>
    //         <TouchableWithoutFeedback onPress={() => {
    //           console.log('TouchableWithoutFeedback')
    //         }}>
    //           <View>
    //             <Text>TouchableWithoutFeedback button</Text>
    //           </View>
    //         </TouchableWithoutFeedback>
    //         <View style={{marginTop: 15}}/>
    //         <Pressable onPress={() => {
    //         }}>
    //           <View style={{width: 75, height: 50, backgroundColor: 'blue'}}>
    //             <Text>Pressable button</Text>
    //           </View>
    //         </Pressable>
    //         <View style={{marginTop: 15}}/>
    //       </View>
    //       <Text>Open up App.tsx to start working on your app!</Text>
    //       <View>
    //         <Image style={{height: 50, width: 50}}
    //                source={{uri: 'https://www.kindpng.com/picc/m/105-1055561_gaming-logo-avatar-png-transparent-png.png'}}/>
    //       </View>
    //     </ScrollView>
    //     <StatusBar style="auto"/>
    //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#00ffd9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    height: 34,
    backgroundColor: '#FFF'
  }
});
