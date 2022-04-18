package com.example.helloandroid

import android.view.Choreographer
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.annotation.NonNull
import androidx.annotation.Nullable
import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactPropGroup


class AReactIdentityViewManager constructor(): ViewGroupManager<FrameLayout>() {
    val REACT_CLASS = "AReactIdentityViewManager"
    val COMMAND_CREATE = 1
    lateinit var m_reactContext: ReactApplicationContext
    private var propWidth = 0
    private var propHeight = 0

    constructor(reactContext: ReactApplicationContext) : this() {
        m_reactContext = reactContext
    }

    override fun getName(): String {
        return REACT_CLASS;
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
        return MapBuilder.of(
            "create",
            COMMAND_CREATE
        )
    }

    fun receiveCommand(@NonNull root: FrameLayout?, commandId: String, args: ReadableArray?)
    {
        super.receiveCommand(root!!, commandId, args)
        val reactNativeViewId = args!!.getInt(0)
        val commandIdInt = commandId.toInt()
        when (commandIdInt) {
            COMMAND_CREATE -> createFragment(root, reactNativeViewId)
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
        val myFragment = ATestFragment()
        val activity: FragmentActivity = m_reactContext.getCurrentActivity() as FragmentActivity
        activity.getSupportFragmentManager()
            .beginTransaction()
            .replace(reactNativeViewId, myFragment, reactNativeViewId.toString())
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