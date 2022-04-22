import * as React from 'react';
import { requireNativeComponent, StyleSheet, findNodeHandle, UIManager, Dimensions } from "react-native";
import { interpolate } from 'react-native-reanimated';
import { NativeEventEmitter, NativeModules } from 'react-native';

const AReactIdentityViewManager = requireNativeComponent('AReactIdentityViewManager');

export interface IRNBiometricProvider
{
    initialize(config: IBiometricProviderConfig)
}

export interface IRNBiometricProviderProps
{
    style: StyleSheet
}

export interface IRNBiometricProviderState
{ }

export interface ICAOConfigurationParams
{  }

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

export class RNBiometricProvider
    extends React.Component<IRNBiometricProviderProps, IRNBiometricProviderState>
    implements IRNBiometricProvider
{
    ProviderView: any
    props: IRNBiometricProviderProps;
    eventEmitter: any

    constructor(props: IRNBiometricProviderProps)
    {   
        super(props);
        this.props = props
    }

    onItemSelected = event => {
        console.log(event.nativeEvent);
    };

    initialize(config: IBiometricProviderConfig)
    {
        console.log("IBiometricProviderConfig::License = " + config.License)
        
        const viewId = findNodeHandle(this.ProviderView);

        UIManager.dispatchViewManagerCommand(
            viewId,
            "update",
            ["Simple string from RN working"]
        );
    }

    render() 
    {
        return (
            <AReactIdentityViewManager onChange={this.onItemSelected} style={this.props.style} ref={(component) => {
                this.ProviderView = component;
            }}/>
        );
    }
};