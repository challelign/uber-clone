import { View, Text, Button, Pressable, Image } from 'react-native'
 

const Greating = () => {
  return (
    <View>
      <Text>Greating ,Cha</Text>
      <Button
        title="Wan"
        color="red"
        onPress={() => console.warn("You hit me")}
      />
      <Text />
      <Button
        title="Log"
        color="red"
        onPress={() => console.log("You hit me")}
      />
      <Text />
      <Button title="Alert" color="red" onPress={() => alert("You hit me")} />
      <Text />
      <Pressable onPress={() => console.log("pressed")}>
      <Text style={{color:"teal"}}>Press me This is pressabel </Text>
      </Pressable>
      <Text />
      <Pressable onPressIn={() => console.log("onPressIn This is pressabel")}>
        <Text style={{color:"coral"}}>onPressIn This is pressabel </Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("onPressOut This is pressabel")}>
        <Text style={{color:"magenta"}}>onPressOut This is pressabel </Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("onLongPress This is pressabel")}>
        <Text style={{color:"coral"}}>onLongPress This is pressabel </Text>
      </Pressable>
      <Image  style ={{width:200, height:200}} source={require("../assets/images/icon.png")} />
      <Image
       style ={{width:200, height:200}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />  
    
    </View>
  );
}

export default Greating