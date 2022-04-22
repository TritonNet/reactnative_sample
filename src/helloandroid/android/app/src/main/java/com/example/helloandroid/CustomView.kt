package com.example.helloandroid

import android.content.Context
import android.graphics.Color
import android.view.View
import android.widget.Button
import android.widget.FrameLayout
import android.widget.TextView
import androidx.annotation.NonNull
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.RCTEventEmitter


class CustomView(@NonNull context: Context?) : FrameLayout(context!!)
{
    lateinit var m_textView: TextView;
    lateinit var m_button_sucess: Button
    lateinit var m_button_failed: Button

    fun UpdateText(text: String)
    {
        m_textView.text = text;
    }
    
    init {
        // set padding and background color
        setPadding(16, 16, 16, 16)
        setBackgroundColor(Color.parseColor("#5FD3F3"))

        // add default text view
        m_textView = TextView(context)
        m_textView.text = "Welcome to Android Fragments with React Native DDD."

        m_button_sucess = Button(context);
        m_button_sucess.text = "Sucess"

        val width = 50
        val height = 25

        m_button_sucess.measure(
            MeasureSpec.makeMeasureSpec(width, MeasureSpec.EXACTLY),
            MeasureSpec.makeMeasureSpec(height, MeasureSpec.EXACTLY)
        )
        m_button_sucess.layout(0, 0, width, height)

        m_button_sucess.setOnClickListener {
            val event: WritableMap = Arguments.createMap()
            event.putString("data", "Test Data")
            (context as ReactContext).getJSModule(RCTEventEmitter::class.java)
                .receiveEvent(
                    this.id,
                    "topChange",
                    event
                )
        }

        m_button_failed = Button(context)
        m_button_failed.text = "Failed"
        m_button_failed.measure(
            MeasureSpec.makeMeasureSpec(width, MeasureSpec.EXACTLY),
            MeasureSpec.makeMeasureSpec(height, MeasureSpec.EXACTLY)
        )
        m_button_failed.layout(0, 0, width, height)

        this.addView(m_textView)
        this.addView(m_button_failed)
        this.addView(m_button_sucess)
    }
}
