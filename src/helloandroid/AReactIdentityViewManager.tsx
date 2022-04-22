import React, { useEffect, useRef } from 'react';
import { requireNativeComponent, StyleSheet, findNodeHandle, UIManager, Dimensions } from "react-native";
import { interpolate } from 'react-native-reanimated';

const AReactIdentityViewManager = requireNativeComponent('AReactIdentityViewManager');

const ref = useRef(null);

export interface ICAOConfigurationParams
{

}

export interface IBiometricPreviewStatusSink
{
    OnCompleted(biometricData);
}

export interface IBiometricProviderConfig
{
    License: String,
    ICAOParams: ICAOConfigurationParams,
    StatusUpdateCallback: IBiometricPreviewStatusSink
}

export class RNIdentityViewManager extends React.Component
{
    constructor(props) {
        super(props);
    }

    COMMANDS = UIManager.getViewManagerConfig('AReactIdentityViewManager').Commands

    createUIFragment(viewId)
    {
        UIManager.dispatchViewManagerCommand(
            viewId,
            this.COMMANDS.create.toString(),
            [viewId]
        );
    }

    initialize(config: IBiometricProviderConfig)
    {
        console.log("IBiometricProviderConfig::License = " + config.License)

        const viewId = findNodeHandle(this);
        this.createUIFragment(viewId);

        UIManager.dispatchViewManagerCommand(
            viewId,
            this.COMMANDS.update.toString(),
            [viewId]
        );
    }

    render() 
    {
        return (
            <AReactIdentityViewManager style={this.props.style} ref={ref}/>
        );
    }
};