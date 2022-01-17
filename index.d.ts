declare module '*.png' {
  import {ImageSourcePropType} from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}

declare module 'react-native-dotenv' {
  export const API_URL: string;
}
