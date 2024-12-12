import '#/platform/markBundleStartTime'
import '#/platform/polyfills'

import {registerRootComponent} from 'expo'

import App from '#/App'
import {UIKitSettingsBuilder} from '@cometchat/uikit-shared'
import {CometChatUIKit} from '@cometchat/chat-uikit-react'

const COMETCHAT_CONSTANTS = {
  APP_ID: '268266b29d5e380e',
  REGION: 'EU',
  AUTH_KEY: '66f2ac1ccfe12e9c902892945acc33efb1f1006a', //Replace with your Auth Key or leave blank if you are authenticating using Auth Token
}

const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build()

//Initialize CometChat UI Kit
CometChatUIKit.init(UIKitSettings)
  .then(() => {
    console.log('Initialization completed successfully')
    // You can now call login function.
  })
  .catch(console.log)

registerRootComponent(App)
