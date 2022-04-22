package com.example.helloandroid

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment

class ATestFragment : Fragment() {
    lateinit var m_customView: CustomView;

    override fun onCreateView(inflater: LayoutInflater,  parent: ViewGroup?, savedInstanceState: Bundle?): View? {
        super.onCreateView(inflater!!, parent, savedInstanceState)
        m_customView = CustomView(this.context)
        return m_customView // this CustomView could be any view that you want to render
    }

    fun UpdateText()
    {
        m_customView.UpdateText()
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // do any logic that should happen in an `onCreate` method, e.g:
        // customView.onCreate(savedInstanceState);
    }

    override fun onPause() {
        super.onPause()
        // do any logic that should happen in an `onPause` method
        // e.g.: customView.onPause();
    }

    override fun onResume() {
        super.onResume()
        // do any logic that should happen in an `onResume` method
        // e.g.: customView.onResume();
    }

    override fun onDestroy() {
        super.onDestroy()
        // do any logic that should happen in an `onDestroy` method
        // e.g.: customView.onDestroy();
    }
}