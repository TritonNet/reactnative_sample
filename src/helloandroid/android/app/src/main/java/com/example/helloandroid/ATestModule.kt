package com.example.helloandroid

import android.util.Log
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ATestModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext)
{
    override fun getName(): String {
        return "ATestModule"
    }

    @ReactMethod
    fun createTestEvent(name: String, location: String) {
        Log.d("ATestModule", "Create test event called with name: $name and location: $location")
    }

}