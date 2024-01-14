import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ToDoScreen from "./src/screens/ToDoScreen"
import reminders from "./src/screens/reminders"
import Calender from "./src/screens/Calendar"
import CompletedTasksScreen from './src/screens/CompletedTasksScreen';
import UserGuide from './src/screens/UserGuide'
import ITGuide from './src/screens/ITGuide'
import privacypolicy from './src/screens/privacypolicy'
import loginScreen from './src/screens/loginScreen'
import registerScreen from "./src/screens/registerScreen";
import HomeScreenSigned from "./src/screens/HomeScreenSigned";
import Friends from "./src/screens/Friends";


const navigator = createStackNavigator(
  {
    
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        title: 'Friends',
      },
    },
    ToDo: {
      screen: ToDoScreen,
      navigationOptions: {
        title: 'To Do List',
      },
    },
    Reminder: {
      screen: reminders,
      navigationOptions: {
        title: 'Reminders',
      },
    },
    Calender: {
      screen: Calender,
      navigationOptions: {
        title: 'Calendar',
      },
    },
    CompletedTasks: {
      screen: CompletedTasksScreen,
      navigationOptions: {
        title: 'Completed Tasks',
      },
    },
    UserGuide: {
      screen: UserGuide,
      navigationOptions: {
        title: 'User Guide',
      },
    },
    ITGuide: {
      screen: ITGuide,
      navigationOptions: {
        title: 'IT Guide',
      },
    },

    privacypolicy: {
      screen: privacypolicy,
      navigationOptions: {
        title: 'Privacy Policy',
      },
    },

    Login: {
      screen: loginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },

    Register: {
      screen: registerScreen,
      navigationOptions: {
        title: 'Register',
      },
    },

    HomeSigned: {
      screen: HomeScreenSigned,
      navigationOptions: {
        title: 'Home',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'TeamTrack',
    },
  }
);


export default createAppContainer(navigator);
