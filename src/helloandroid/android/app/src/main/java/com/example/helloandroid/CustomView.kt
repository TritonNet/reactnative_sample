package com.example.helloandroid

import android.content.Context
import android.graphics.Color
import android.widget.FrameLayout
import android.widget.TextView
import androidx.annotation.NonNull

class CustomView(@NonNull context: Context?) : FrameLayout(context!!)
{
    lateinit var m_textView: TextView;

    fun UpdateText()
    {
        m_textView.text = "Text updated via RN";
    }

    init {
        // set padding and background color
        setPadding(16, 16, 16, 16)
        setBackgroundColor(Color.parseColor("#5FD3F3"))

        // add default text view
        m_textView = TextView(context)
        m_textView.text = "Welcome to Android Fragments with React Native DDD."

        this.addView(m_textView)
    }
}