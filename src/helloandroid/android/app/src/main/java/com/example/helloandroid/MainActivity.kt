package com.example.helloandroid

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView

class MainActivity : ReactActivity() {

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    override fun getMainComponentName(): String? {
        return "helloandroid"
    }

    /**
     * Returns the instance of the [ReactActivityDelegate]. There the RootView is created and
     * you can specify the rendered you wish to use (Fabric or the older renderer).
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate? {
        return MainActivityDelegate(this, mainComponentName)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_main)
//    }

    class MainActivityDelegate(activity: ReactActivity?, mainComponentName: String?) :
        ReactActivityDelegate(activity, mainComponentName) {
        override fun createRootView(): ReactRootView {
            val reactRootView = ReactRootView(context)
            // If you opted-in for the New Architecture, we enable the Fabric Renderer.
            //reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED)
            reactRootView.setIsFabric(false)
            return reactRootView
        }
    }
}