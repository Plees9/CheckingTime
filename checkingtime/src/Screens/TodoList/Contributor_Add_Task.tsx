import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'

import { Checkbox } from 'react-native-paper'
import createStyles from './styles'

const Contributor_Add_Task = ( {item}) => {
  
    const [completed, setCompleted] = useState(false);
    const styles = useMemo(() => createStyles(), []);
    
    console.log(item.userId)
    const handleCheckbox = () => {
        setCompleted(!completed);
    }

    return (
        <View style={styles.view_addTask}>
        
          <View style={styles.view_btn_add_task}>
            <View style={styles.checkbox}>
            <Checkbox
                color="#FFC23C"
                status={completed ? "checked" : "unchecked"}
                onPress={handleCheckbox}
              />
            </View>
            <View style={styles.colomn}>
            <Text style={styles.text1}>{item.name} </Text>
            <Text style={styles.text1}>Mã nhân viên: {item.userId}</Text> 
              
            </View>
  
          </View>
        
      </View>
    );
    }  

export default Contributor_Add_Task;