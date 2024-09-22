# React Native Dynamic App Icons

## Overview

This repository demonstrates a practical implementation of dynamic app icon changing in React Native, utilizing the `react-native-change-icon` library. It serves as a guide and example for developers looking to incorporate icon-switching functionality into their iOS and Android applications.

## Project Highlights

- **Practical Implementation**: Shows how to integrate and use the react-native-change-icon library in a real-world scenario.

- **Cross-Platform Demo**: Includes examples for both iOS and Android platforms.

- **Step-by-Step Guide**: Provides a clear walkthrough of the implementation process.

- **Best Practices**: Demonstrates recommended approaches for dynamic icon changing in React Native apps.

## Benefits of Dynamic App Icons

- **Enhanced User Experience**: Allows for a customizable and fresh app appearance.

- **Increased Engagement**: Can be used to highlight new features, events, or campaigns.

- **Seasonal Adaptability**: Demonstrates how to update the app's look for holidays or special occasions.

- **Marketing Tool**: Shows potential for A/B testing different icon designs.

## Installation

1. Install `react-native-change-icon` into your react native project using
   `yarn add react-native-change-icon` or `npm i react-native-change-icon`

2. Generate your AppIcons using [AppIconGenerator](https://www.appicon.co/)

   - Sample Icons are in the `./images` folder import into the app icon generator and generate app icons for iPhone and Android( you can create for all operating systems)
     <img alt="App Generator" src="./images/GenerateAppIcon.png"  />

   ### `Android`

   - Open generated zip folder, navigate to android folder and rename all icons to desired name
     <img alt="App Icon rename" src="./images/renameicon.png"  /></br>

   ### `ios`

   - Open the generated zip folder, navigate to ios folder and rename the `AppIcon.appiconset` to desired icon name
     <img alt="App Icon rename" src="./images/renameIos.png"  />

   - Edit Contents.json and change the `Assets.xcassets/AppIcon.appiconset` to new Icon name e.g. `Images.xcassets/HarpIcons.appiconset`

   **REPEAT ABOVE STEPS FOR ALL OTHER ICONS**
   `Android`: Drag all of the mipmap folders into android/app/src/main/res/
   <img alt="Android folder" src="./images/AndroidDone.png"  />

   `ios` : Drag all of the .appiconset folders into ios/<app-name>/Images.xcassets
   <img alt="Android folder" src="./images/iosDone.png"  />

## Usage

- Basic implementation example.
- API reference

## Platform-specific considerations

### iOS

- Key setup steps
- Limitations

### Android

- Key setup steps
- Limitations

## Contributing

- Guidelines for contributions
- Issue reporting

## License

- License type

## Acknowledgements

- Credits and attributions

Would you like me to elaborate on any of these sections or add more details to the README?
