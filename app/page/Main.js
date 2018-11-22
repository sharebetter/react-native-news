import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
// import {
//   createStackNavigator,
// } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
import Find from './Find';
import Mine from './Mine';
import Message from './Message';
import Home from './Home';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home"
        }
    }

    componentDidMount () {

    }
  render() {
    return (
        <TabNavigator tabBarStyle={{height: 50}}
        style={styles.tab}>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="首页"
                selectedTitleStyle={{color: "#3496f0"}}
                renderIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_home.png')} />}
                renderSelectedIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_home_highlighted.png')} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'find'}
                title="发现"
                selectedTitleStyle={{color: "#3496f0"}}
                renderIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_discover.png')} />}
                renderSelectedIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_discover_highlighted.png')} />}
                onPress={() => this.setState({ selectedTab: 'find' })}>
                    <Find />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'message'}
                title="消息"
                selectedTitleStyle={{color: "#3496f0"}}
                renderIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_message_center.png')} />}
                renderSelectedIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_message_center_highlighted.png')} />}
                onPress={() => this.setState({ selectedTab: 'message' })}>
                    <Message />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'mine'}
                title="我的"
                selectedTitleStyle={{color: "#3496f0"}}
                renderIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_profile.png')} />}
                renderSelectedIcon={() => <Image style = {styles.image} source={require('../static/TabBar/tabbar_profile_highlighted.png')} />}
                onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <Mine />
            </TabNavigator.Item>
        </TabNavigator>
    );
  }
}
// const SimpleApp = createStackNavigator({
//     Home: {screen: Home},
//     Find:{screen: Find},
//     Message: {screen: Message},
//     Mine:{screen: Mine},
// });
const styles = StyleSheet.create({
    tab: {
        flex: 1
    },
    //TabNavigator的image
    image: {
        width: 26,
        height: 26
    },
    title: {
        color: "#1296db"
    }
})

// module.exports = SimpleApp;