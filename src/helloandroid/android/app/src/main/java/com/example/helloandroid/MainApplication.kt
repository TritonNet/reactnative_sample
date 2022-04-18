package com.example.helloandroid

import android.app.Application
import com.facebook.react.*
import com.facebook.react.shell.MainReactPackage
import com.swmansion.rnscreens.RNScreensPackage
import com.th3rdwave.safeareacontext.SafeAreaContextPackage
import java.util.*


class MainApplication : Application(), ReactApplication
{
    private val mReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
//            val packages: MutableList<ReactPackage> = PackageList(this).packages
//            packages.add(ReanimatedPackage())
//            packages.add(RNGestureHandlerPackage())
//            packages.add(RNScreensPackage())
//            packages.add(SafeAreaContextPackage())


            return Arrays.asList<ReactPackage>(
                MyAppPackage(),
                MainReactPackage(),
                RNScreensPackage(),
                SafeAreaContextPackage()
            )
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

}