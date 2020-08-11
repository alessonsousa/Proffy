
import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList(){
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
      
        function handleToggleFiltersVisible(){
            setIsFiltersVisible(!isFiltersVisible);
        }
    return (
         <View style={styles.container}>
            <PageHeader title='Proffys disponiveis' 
            headerRight={
            (
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                     <Feather name='filter' size={20} color='#fff' />
                         
                </BorderlessButton>

            )}>
              { isFiltersVisible && (
                 <View style={styles.searchForm}>
                     <Text style={styles.label}>Matéria</Text>
                     <TextInput 
                     style={styles.input}
                     placeholder="Qual a matéria?"
                     placeholderTextColor='#c1bccc'
                     />
                <RectButton style={styles.submitButton}>
                     <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>

                 </View>
              )}
            </PageHeader>
             <ScrollView
             style={styles.teacherList}
             contentContainerStyle={{
                 paddingHorizontal:16,
                 paddingBottom: 5,
             }}
             >

             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />


             </ScrollView>
            
         </View>
    );
}

export default TeacherList;