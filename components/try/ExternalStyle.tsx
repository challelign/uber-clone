import st from '@/utils/style'
import { View, Text } from 'react-native' 

const ExternalStyle = () => {
  return (
    <View>
      <Text style={st.headerTextStyle}>Header Text</Text>
      <Text style={st.textStyle}>ExternalStyle</Text>

    </View>
  )
}

export default ExternalStyle