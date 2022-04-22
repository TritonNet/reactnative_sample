import React, { useEffect, useRef } from 'react';
import { requireNativeComponent, StyleSheet, findNodeHandle, UIManager, Dimensions } from "react-native";

const AReactIdentityViewManager = requireNativeComponent('AReactIdentityViewManager');

const ref = useRef(null);

styles = StyleSheet.create({
    identityView: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
});

export class RNIdentityViewManager extends React.Component
{
    constructor(props) {
        super(props);
    }

    initialize()
    {
        const viewId = findNodeHandle(this);

        console.log("View ID: " + viewId);
        UIManager.dispatchViewManagerCommand(
            viewId,
            UIManager.AReactIdentityViewManager.Commands.create.toString(),
            [viewId]
        );
    }

    render() 
    {
        return (
            <AReactIdentityViewManager style={styles.identityView} ref={ref}/>
        );
    }
};
//
//module.exports = requireNativeComponent('AReactIdentityViewManager');