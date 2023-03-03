import { SafeAreaView, View, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import LargeCadList from '../../Components/Lists/LargeCardList';
import NewNavDesign from '../../Components/Navigation/NewNavDesign';
import COLORS from '../../consts/colors';
import Header from '../../Components/Header';
import MediumTwoCardHList from '../../Components/Lists/MediumTwoCardHList';
const ExploreScreen = ({ navigation }) => {
    const [dummy, setDummy] = useState([
        {
            title: 'Project',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthQem9i29JDeaBaJx5dUJlNXhIhvXoYPW_A&usqp=CAU',
            dec: '55 Projects',
            bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Burj_Khalifa_2021.jpg/1200px-Burj_Khalifa_2021.jpg',
            rate: 5
        },
        {
            title: 'Project',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthQem9i29JDeaBaJx5dUJlNXhIhvXoYPW_A&usqp=CAU',
            dec: '55 Projects',
            bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Burj_Khalifa_2021.jpg/1200px-Burj_Khalifa_2021.jpg',
            rate: 4
        },
        {
            title: 'Project',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthQem9i29JDeaBaJx5dUJlNXhIhvXoYPW_A&usqp=CAU',
            dec: '55 Projects',
            bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Burj_Khalifa_2021.jpg/1200px-Burj_Khalifa_2021.jpg',
            rate: 3
        },
        {
            title: 'Project',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthQem9i29JDeaBaJx5dUJlNXhIhvXoYPW_A&usqp=CAU',
            dec: '55 Projects',
            bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Burj_Khalifa_2021.jpg/1200px-Burj_Khalifa_2021.jpg',
            rate: 5
        },
    ]);
    return (
        <SafeAreaView
            style={styles.container}>
            <Header title={'Explore'} />
            <ScrollView >
                <LargeCadList data={dummy} headText={'Popular Properties'} viewAll />
                <MediumTwoCardHList data={dummy} headText={'Best Selling'} viewAll />
                <LargeCadList data={dummy} headText={'Popular Properties'} viewAll />
                <View style={styles.down} />
            </ScrollView>
            <NewNavDesign navigation={navigation} index={1} />
        </SafeAreaView>
    )
}

export default ExploreScreen