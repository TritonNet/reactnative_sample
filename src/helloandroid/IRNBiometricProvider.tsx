import { IRNBiometricProviderConfig } from './IRNBiometricProviderConfig'

export interface IRNBiometricProvider {
    initialize(config: IRNBiometricProviderConfig)
}