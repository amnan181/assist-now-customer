# App Scaffold
## Folder Structure

Note: Please follow the code structure

```
src
├── assets
│   └── logo.png
├── components
│   ├── button
│   │   ├── Button.tsx
│   │   └── ButtonStyle.ts
│   ├── input
│   │   ├── Input.tsx
│   │   └── InputStyle.ts
│   └── sidebar
│       ├── SideBar.tsx
│       └── SideBarStyle.ts
├── config
│   ├── Axios.ts
│   └── Store.ts
├── constants
│   └── Theme.ts
├── helpers
│   ├── AppHelpers.ts
│   ├── ErrorHelpers.ts
│   └── ThemeHelper.ts
├── hooks
│   ├── UseObjectState.ts
│   ├── UseReduxHooks.ts
│   └── UserHooks.ts
├── modules
│   ├── home
│   │   ├── Home.tsx
│   │   └── HomeStyle.ts
│   ├── login
│   │   ├── Login.tsx
│   │   └── LoginStyle.ts
│   ├── signup
│   │   ├── Signup.tsx
│   │   └── SignupStyle.ts
│   └── splash
│       ├── Splash.tsx
│       └── SplashStyle.ts
├── navigation
│   └── Navigation.tsx
├── store
│   ├── RootReducer.ts
│   ├── actions
│   │   └── UserAction.ts
│   └── reducers
│       └── UserReducer.ts
├── types
│   ├── AppTypes.ts
│   ├── NavigationTypes.ts
│   ├── StylesTypes.ts
│   └── UserTypes.ts
└── utils
    └── AppUtils.ts
```

- Make sure you use ts or tsx extension

# `Important Attention`
Make sure before commit your code please linted your code via. If there is everthing perfect with no error then you can push the code otherwise you have to fix the issue. Thank you.
```
npm run lint
```

# `Performance Improvement`
1.  `Avoid Use of ScrollView to Render Huge Lists`
    ```
    <ScrollView>
      {items.map(item => {
        return <Item key={item.name.toString()} />;
      })}
    </ScrollView>
    ```
    #### Solution: `Use FlatList`
2. `Avoid Passing Inline Functions as Props`

    ```
    function MakeBeverage(props) {
      return(
        <Button title=' Make Beverage' onPress={props.onPress}/>
      
      )
    }
    
    export default function BeverageMaker() {
     
      return (
        <View style={styles.container}>
          <MakeBeverage
            onPress={()=> console.log('making some beverage')}
          />
        </View>
      );
    }
    ```
    
    #### Solution: ` 💁 `
    ```
    export default function BeverageMaker() {
      function handleMakeBeverage(){
        console.log('Making beverage, please wait!')
      }
      return (
        <View style={styles.container}>
          <MakeBeverage
            onPress={handleMakeBeverage}
          />
        </View>
      );
    }
    ```
    
3. `Avoid Arrow Functions`
4. `Avoid Anonymous Functions While Rendering`
5. `Remove Console Statements`
6. `Use Style References Correctly`
    ```
    function Styling() {
    const style = {width: 10, height: 10}
    return (
      <View style={{flex: 1}}>
        <View style={[style, {backgroundColor: 'red'}]}/>
      </View>
    );
    }
    ```
    #### Solution: ` 💁 `
    ```
    import {StyleSheet} from 'react-native';
    
    function CorrectStyle() {
        return (
          <View style={style.container}/>
        );
    }
    
    // keep separate it in an another file
    StyleSheet.create({
      container: {
        flex: 1
      }
    });
    ```

## Installation & Run 
Make sure you have react-native environemnt setup in your computer. If you have already setup run this commands

In project root director run:
## 1. install dependencies
```
npm install
```

## 2. For IOS App
1.
    ```
    npm run setup
    ```
2.
    ```
    npx react-native run-ios
    ```
## 3. For android app
```
npx react-native run-android
```

## Enviorment setup

Supported
- [dev]
-  [staging]
- [production]

### Commands for environment

1. for dev `npm run env:dev`
2. for staging `npm run env:staging`
3. for production `npm run env:prod`

### Extra Commands

1. If you want to run on ios app on your system `npm run setup`
2. If you want to build bundle for production just run `npm run bundle`
3. If you want to build released APK with current environment  `npm run release`

## Author
- [Idea Maker](https://github.com/Idea-Maker-Agency)
