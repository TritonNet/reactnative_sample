import { IRNICAOConfigurationParams } from './IRNICAOConfigurationParams'
import { IRNBiometricPreviewStatusSink } from './IRNBiometricPreviewStatusSink'

export interface IRNBiometricProviderConfig {
    License: String,
    ICAOParams: IRNICAOConfigurationParams,
    StatusUpdateCallback: IRNBiometricPreviewStatusSink
}