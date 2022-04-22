package com.example.helloandroid

import android.util.Log
import android.view.View
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactPropGroup


class AReactIdentityViewManager constructor(): SimpleViewManager<CustomView>() {
    val REACT_CLASS = "AReactIdentityViewManager"
    val TAG = "IdentityViewManager"

    private var m_width = 0
    private var m_height = 0

    lateinit var m_view: CustomView

    override fun createViewInstance( context: ThemedReactContext): CustomView
    {
        Log.d(TAG, "createViewInstance")

        m_view = CustomView(context)
        m_view.measure(
            View.MeasureSpec.makeMeasureSpec(m_width, View.MeasureSpec.EXACTLY),
            View.MeasureSpec.makeMeasureSpec(m_height, View.MeasureSpec.EXACTLY)
        )
        m_view.layout(0, 0, m_width, m_height)

        return m_view;
    }

    override fun getName(): String {
        Log.d(TAG, "getName")
        return REACT_CLASS;
    }

    override fun receiveCommand(view: CustomView, commandId: String, args: ReadableArray?)
    {
        Log.d(TAG, "receiveCommand")
        when (commandId) {
            "update" -> m_view.UpdateText(args!!.getString(0))
        }
    }

    @ReactPropGroup(names = ["width", "height"], customType = "Style")
    fun setStyle(view: FrameLayout?, index: Int, value: Int)
    {
        Log.d(TAG, "setStyle")
        if (index == 0)
            m_width = value
        else if (index == 1)
            m_height = value
    }
}