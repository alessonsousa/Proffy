
import React from 'react';
import { View, Image, Text } from 'react-native';
import TeacherList from '../../pages/TeacherList';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                style={styles.avatar}
                source={{ uri: 'https://avatars2.githubusercontent.com/u/56699937?s=460&u=594f94e7d15056a6b972eb3ed07aa050ff6b8a4f&v=4'}}
                />
             <View style={styles.profileInfo}>
                 <Text style={styles.name}>Alesson Sousa</Text>
                 <Text style={styles.subject}>Quimica</Text>
             </View>
             </View>
             <Text style={styles.bio}>
                 Entusiasta das melhores tecnologias de quimica avançada.
                 {'\n'}{'\n'}
                 Apaixonado por explodir coisas no seu laboratorio maluco.
             </Text>

             <View style={styles.footer}>
                 <Text style={styles.price}>
                     Preço/Hora {'   '}
                     <Text style={styles.priceValue}>R$ 20,00</Text>
                 </Text>

                 <View style={styles.buttonsContainer}>
                     <RectButton style={[styles.favoriteButton, styles.favorited]}>
                       {/*  <Image source={heartOutlineIcon}/>*/}
                         <Image source={unfavoriteIcon}/>
                     </RectButton>

                     <RectButton style={styles.contactButton}>
                         <Image source={whatsappIcon}/>
                         <Text style={styles.contactButtonText}>Entra em contato</Text>
                     </RectButton>
                 </View>
             </View>
        </View>
    )
}

export default TeacherItem;