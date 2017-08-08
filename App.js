import { StackNavigator } from 'react-navigation';
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
} from './js/Slides';

export default App = StackNavigator({
    Slide1: { screen: Slide1 },
    Slide2: { screen: Slide2 },
    Slide3: { screen: Slide3 },
    Slide4: { screen: Slide4 },
    Slide5: { screen: Slide5 },
    Slide6: { screen: Slide6 },
    Slide7: { screen: Slide7 },
    Slide8: { screen: Slide8 },
  }, {
    headerMode: 'none'
  }
);
