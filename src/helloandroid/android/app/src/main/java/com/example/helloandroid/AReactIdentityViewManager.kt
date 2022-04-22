package com.example.helloandroid

import android.util.Log
import android.view.Choreographer
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.annotation.NonNull
import androidx.annotation.Nullable
import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.IllegalViewOperationException
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactPropGroup


class AReactIdentityViewManager constructor(): ViewGroupManager<FrameLayout>() {
    val REACT_CLASS = "AReactIdentityViewManager"
    val TAG = "IdentityViewManager"
    val COMMAND_CREATE = 1
    val COMMAND_UPDATE = 8

    lateinit var m_reactContext: ReactApplicationContext
    private var propWidth = 0
    private var propHeight = 0

    lateinit var m_fragment:ATestFragment

    constructor(reactContext: ReactApplicationContext) : this() {
        m_reactContext = reactContext
    }

    override fun getName(): String {
        return REACT_CLASS;
    }

    @ReactMethod
    fun updateText() {
        m_fragment.UpdateText()
    }

    /**
     * Return a FrameLayout which will later hold the Fragment
     */
    override fun createViewInstance(reactContext: ThemedReactContext): FrameLayout {
        return CustomView(reactContext)
    }

    /**
     * Map the "create" command to an integer
     */
    @Nullable
    override fun getCommandsMap(): Map<String?, Int?>? {
        Log.d(TAG, "getCommandsMap()")

        return MapBuilder.of(
            "create", COMMAND_CREATE,
            "update", COMMAND_UPDATE
        )
    }

    fun receiveCommand(@NonNull root: FrameLayout?, commandId: String, args: ReadableArray?)
    {
        Log.d(TAG, "receiveCommand $commandId")

        super.receiveCommand(root!!, commandId, args)
        val reactNativeViewId = args!!.getInt(0)
        when (commandId.toInt()) {
            COMMAND_CREATE -> createFragment(root, reactNativeViewId)
            COMMAND_UPDATE -> m_fragment.UpdateText()
            else -> {}
        }
    }

    @ReactPropGroup(names = ["width", "height"], customType = "Style")
    fun setStyle(view: FrameLayout?, index: Int, value: Int) {
        if (index == 0) {
            propWidth = value
        }
        if (index == 1) {
            propHeight = value
        }
    }

    /**
     * Replace your React Native view with a custom fragment
     */
    fun createFragment(root: FrameLayout, reactNativeViewId: Int) {
        val parentView: ViewGroup = root.findViewById<View>(reactNativeViewId) as ViewGroup
        setupLayout(parentView)
        m_fragment = ATestFragment()
        val activity: FragmentActivity = m_reactContext.currentActivity as FragmentActivity
        activity.supportFragmentManager
            .beginTransaction()
            .replace(reactNativeViewId, m_fragment, reactNativeViewId.toString())
            .commit()
    }

    fun setupLayout(view: View) {
        Choreographer.getInstance().postFrameCallback(object : Choreographer.FrameCallback {
            override fun doFrame(frameTimeNanos: Long) {
                manuallyLayoutChildren(view)
                view.viewTreeObserver.dispatchOnGlobalLayout()
                Choreographer.getInstance().postFrameCallback(this)
            }
        })
    }

    /**
     * Layout all children properly
     */
    fun manuallyLayoutChildren(view: View) {
        // propWidth and propHeight coming from react-native props
        val width = propWidth
        val height = propHeight
        view.measure(
            View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
            View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY)
        )
        view.layout(0, 0, width, height)
    }

}