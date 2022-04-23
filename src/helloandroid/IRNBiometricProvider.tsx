/** @name ICAOConfigurationParams
 *  React Native ICAO Configuration Parameters
 */
export interface IRNICAOConfigurationParams {
    /** Sharpness
     * Configuration for evaluating whether an area of face image is not blurred.
     * Sharpness values are from range <-10000,10000>.
     * Values near -10000 indicates 'very blurred', values near 10000 indicates 'very sharp'.
     * The decision threshold is around 0.
     */
    /* Sharpness loose minimum value */
    SHARPNESS_LOOSE_MIN?: number;
    /* Sharpness loose maximum value */
    SHARPNESS_LOOSE_MAX?: number;
    /* Sharpness strict minimum value */
    SHARPNESS_STRICT_MIN?: number;
    /* Sharpness strict maximum value */
    SHARPNESS_STRICT_MAX?: number;

    /** Brightness
     * Configuration for evaluating whether an area of face is correctly exposed.
     * Brightness values are from range <-10000,10000>.
     * Values near -10000 indicates 'too dark', values near 10000 indicates 'too light'
     * Values around 0 indicates OK.
     * The decision thresholds are around -5000 and 5000.
     */
    /* Brightness loose minimum value */
    BRIGHTNESS_LOOSE_MIN?: number;
    /* Brightness loose maximum value */
    BRIGHTNESS_LOOSE_MAX?: number;
    /* Brightness strict minimum value */
    BRIGHTNESS_STRICT_MIN?: number;
    /* Brightness strict maximum value */
    BRIGHTNESS_STRICT_MAX?: number;

    /** Contrast
     * Configuration for evaluating whether an area of face is contrast enough.
     * Contrast values are from range <-10000,10000>.
     * Values near -10000 indicates 'very low contrast', values near 10000 indicates 'very high contrast',
     * values around 0 indicates OK.
     * The decision thresholds are around -5000 and 5000.
     */
    /* Contrast loose minimum value */
    CONTRAST_LOOSE_MIN?: number;
    /* Contrast loose maximum value */
    CONTRAST_LOOSE_MAX?: number;
    /* Contrast strict minimum value */
    CONTRAST_STRICT_MIN?: number;
    /* Contrast strict maximum value */
    CONTRAST_STRICT_MAX?: number;

    /** Unique Intensity Levels
     * Configuration for evaluating whether an area of face has appropriate number of unique intensity levels.
     * Unique intensity levels values are from range <-10000,10000>.
     * Values near -10000 indicates 'very few unique intensity levels', values near 10000 indicates 'enough unique intensity levels'.
     * The decision threshold is around 0.
     */
    /* Unique Intensity Level loose minimum value */
    UNIQUE_INTENSITY_LEVELS_LOOSE_MIN?: number;
    /* Unique Intensity Level loose maximum value */
    UNIQUE_INTENSITY_LEVELS_LOOSE_MAX?: number;
    /* Unique Intensity Level strict minimum value */
    UNIQUE_INTENSITY_LEVELS_STRICT_MIN?: number;
    /* Unique Intensity Level strict maximum value */
    UNIQUE_INTENSITY_LEVELS_STRICT_MAX?: number;

    /** Shadow
     * Configuration for evaluating whether an area of face is not overshadowed.
     * Shadow values are from range <-10000,10000>.
     * Values near -10000 indicates 'very strong global shadows present',
     * values near 10000 indicates 'no global shadows present'.
     * The decision threshold is around 0.
     */
    /* Shadow loose minimum value */
    SHADOW_LOOSE_MIN?: number;
    /* Shadow loose maximum value */
    SHADOW_LOOSE_MAX?: number;
    /* Shadow strict minimum value */
    SHADOW_STRICT_MIN?: number;
    /* Shadow strict maximum value */
    SHADOW_STRICT_MAX?: number;

    /** Nose Shadow
     * Configuration for evaluating whether eyes or a nose don't cast sharp shadows.
     * Nose shadow values are from range <-10000,10000>
     * Values near -10000 indicates 'very strong local (eyes/nose) shadows present',
     * values near 10000 indicates 'no local shadows present'.
     * The decision threshold is around 0.
     */
    /* Nose Shadow loose minimum value */
    NOSE_SHADOW_LOOSE_MIN?: number;
    /* Nose Shadow loose maximum value */
    NOSE_SHADOW_LOOSE_MAX?: number;
    /* Nose Shadow strict minimum value */
    NOSE_SHADOW_STRICT_MIN?: number;
    /* Nose Shadow strict maximum value */
    NOSE_SHADOW_STRICT_MAX?: number;

    /** Specularity
     * Configuration for evaluating whether spotlights aren't present on face.
     * Specularity values are from range <-10000,10000>
     * Values near -10000 indicates 'very strong specularity present',
     * values near 10000 indicates 'no specularity present'.
     * The decision threshold is around 0.
     */
    /* Specularity loose minimum value */
    SPECULARITY_LOOSE_MIN?: number;
    /* Specularity loose maximum value */
    SPECULARITY_LOOSE_MAX?: number;
    /* Specularity strict minimum value */
    SPECULARITY_STRICT_MIN?: number;
    /* Specularity strict maximum value */
    SPECULARITY_STRICT_MAX?: number;

    /** Eye Gaze
     * Configuration attribute for evaluating whether a gaze-direction is frontal.
     * Eye gaze values are from range <-10000,10000>.
     * Values near -10000 indicates 'sideway ahead eyes gaze',
     * values near 10000 indicates 'straight ahead eyes gaze'.
     * The decision threshold is around 0.
     */
    /* Eye Gaze loose minimum value */
    EYE_GAZE_LOOSE_MIN?: number;
    /* Eye Gaze loose maximum value */
    EYE_GAZE_LOOSE_MAX?: number;
    /* Eye Gaze strict minimum value */
    EYE_GAZE_STRICT_MIN?: number;
    /* Eye Gaze strict maximum value */
    EYE_GAZE_STRICT_MAX?: number;

    /** Right Eye Status
     * Configuration for evaluating right eye status.
     * Right eye values are from range <-10000,10000>.
     * Values near -10000 indicates 'closed, narrowed or bulged eye',
     * values near 10000 indicates 'normally opened eye'.
     * The decision threshold is around 0.
     */
    /* Right Eye Status loose minimum value */
    RIGHT_EYE_STATUS_LOOSE_MIN?: number;
    /* Right Eye Status loose maximum value */
    RIGHT_EYE_STATUS_LOOSE_MAX?: number;
    /* Right Eye Status strict minimum value */
    RIGHT_EYE_STATUS_STRICT_MIN?: number;
    /* Right Eye Status strict maximum value */
    RIGHT_EYE_STATUS_STRICT_MAX?: number;

    /** Left Eye Status
     * Configuration for evaluating left eye status.
     * Left eye values are from range <-10000,10000>.
     * Values near -10000 indicates 'closed, narrowed or bulged eye',
     * values near 10000 indicates 'normally opened eye'.
     * The decision threshold is around 0.
     */
    /* Left Eye Status loose minimum value */
    LEFT_EYE_STATUS_LOOSE_MIN?: number;
    /* Left Eye Status loose maximum value */
    LEFT_EYE_STATUS_LOOSE_MAX?: number;
    /* Left Eye Status strict minimum value */
    LEFT_EYE_STATUS_STRICT_MIN?: number;
    /* Left Eye Status strict maximum value */
    LEFT_EYE_STATUS_STRICT_MAX?: number;

    /** Heavy Frame
     * Configuration for evaluating whether glasses with heavy frames are not present.
     * Heavy frame glasses values are from range <-10000,10000>.
     * Values near -10000 indicates 'no heavy frame glasses present',
     * values near 10000 indicates 'heavy frame glasses present'.
     * The decision threshold is around 0.
     */
    /* Heavy Frame loose minimum value */
    HEAVY_FRAME_LOOSE_MIN?: number;
    /* Heavy Frame loose maximum value */
    HEAVY_FRAME_LOOSE_MAX?: number;
    /* Heavy Frame strict minimum value */
    HEAVY_FRAME_STRICT_MIN?: number;
    /* Heavy Frame strict maximum value */
    HEAVY_FRAME_STRICT_MAX?: number;

    /** Mouth Status
     * Configuration for evaluating mouth status.
     * Mouth status values are from range <-10000,10000>.
     * Values near -10000 indicates 'open mouth, smile showing teeth or round lips present',
     * values near 10000 indicates 'mouth with no expression'.
     * The decision threshold is around 0.
     */
    /* Mouth Status loose minimum value */
    MOUTH_STATUS_LOOSE_MIN?: number;
    /* Mouth Status loose maximum value */
    MOUTH_STATUS_LOOSE_MAX?: number;
    /* Mouth Status strict minimum value */
    MOUTH_STATUS_STRICT_MIN?: number;
    /* Mouth Status strict maximum value */
    MOUTH_STATUS_STRICT_MAX?: number;

    /** Background Uniformity
     * Configuration for evaluating whether background is uniform.
     * Background uniformity values are from range <-10000,10000>.
     * Values near -10000 indicates 'very un-uniform background present',
     * values near 10000 indicates 'uniform background present'.
     * The decision threshold is around 0.
     */
    /* Background Uniformity loose minimum value */
    BACKGROUND_UNIFORMITY_LOOSE_MIN?: number;
    /* Background Uniformity loose maximum value */
    BACKGROUND_UNIFORMITY_LOOSE_MAX?: number;
    /* Background Uniformity strict minimum value */
    BACKGROUND_UNIFORMITY_STRICT_MIN?: number;
    /* Background Uniformity strict maximum value */
    BACKGROUND_UNIFORMITY_STRICT_MAX?: number;

    /** Right Red Eye
     * Configuration for evaluating whether red-eye effect is not present on right eye.
     * Right red-eye effect values are from range <-10000,10000>.
     * Values near -10000 indicates 'no red-eye effect present',
     * values near 10000 indicates 'red-eye effect present'.
     * The decision threshold is around 0.
     */
    /* Right Red Eye loose minimum value */
    RIGHT_RED_EYE_LOOSE_MIN?: number;
    /* Right Red Eye loose maximum value */
    RIGHT_RED_EYE_LOOSE_MAX?: number;
    /* Right Red Eye strict minimum value */
    RIGHT_RED_EYE_STRICT_MIN?: number;
    /* Right Red Eye strict maximum value */
    RIGHT_RED_EYE_STRICT_MAX?: number;

    /** Left Red Eye
     * Configuration for evaluating whether red-eye effect is not present on left eye.
     * Left red-eye effect values are from range <-10000,10000>.
     * Values near -10000 indicates 'no red-eye effect present',
     * values near 10000 indicates 'red-eye effect present'.
     * The decision threshold is around 0.
     */
    /* Left Red Eye loose minimum value */
    LEFT_RED_EYE_LOOSE_MIN?: number;
    /* Left Red Eye loose maximum value */
    LEFT_RED_EYE_LOOSE_MAX?: number;
    /* Left Red Eye strict minimum value */
    LEFT_RED_EYE_STRICT_MIN?: number;
    /* Left Red Eye strict maximum value */
    LEFT_RED_EYE_STRICT_MAX?: number;

    /** Head Roll
     * Configuration for evaluating whether head roll is in range.
     * Roll rotation values are from range <-10000,10000>.
     * Values near -10000 indicates 'too left rotated',
     * values near 10000 indicates 'too right rotated',
     * values around 0 indicates OK.
     * The decision thresholds are around -5000 and 5000.
     */
    /* Head roll loose minimum value */
    HEAD_ROLL_LOOSE_MIN?: number;
    /* Head roll loose maximum value */
    HEAD_ROLL_LOOSE_MAX?: number;
    /* Head roll strict minimum value */
    HEAD_ROLL_STRICT_MIN?: number;
    /* Head roll strict maximum value */
    HEAD_ROLL_STRICT_MAX?: number;

    /** Head Yaw
     * Configuration for evaluating whether head yaw is in range.
     * Yaw rotation values are from range <-10000,10000>.
     * Values near -10000 indicates 'too left rotated',
     * values near 10000 indicates 'too right rotated',
     * values around 0 indicates OK.
     * The decision thresholds are around -5000 and 5000.
     */
    /* Head Yaw loose minimum value */
    HEAD_YAW_LOOSE_MIN?: number;
    /* Head Yaw loose maximum value */
    HEAD_YAW_LOOSE_MAX?: number;
    /* Head Yaw strict minimum value */
    HEAD_YAW_STRICT_MIN?: number;
    /* Head Yaw strict maximum value */
    HEAD_YAW_STRICT_MAX?: number;

    /** Head Pitch
     * Configuration for evaluating whether head pitch is in range.
     * Pitch rotation values are from range <-10000,10000>.
     * Values near -10000 indicates 'pitch too down',
     * values near 10000 indicates 'pitch too up',
     * values around 0 indicates OK.
     * The decision thresholds are around -5000 and 5000.
     */
    /* Head Pitch loose minimum value */
    HEAD_PITCH_LOOSE_MIN?: number;
    /* Head Pitch loose maximum value */
    HEAD_PITCH_LOOSE_MAX?: number;
    /* Head Pitch strict minimum value */
    HEAD_PITCH_STRICT_MIN?: number;
    /* Head Pitch strict maximum value */
    HEAD_PITCH_STRICT_MAX?: number;

    /** Eye Distance
     * Configuration for evaluating distance between eyes in pixels.
     */
    /**Eye Centre deviation loose value */
    EYE_CENTRE_DEVIATION_LOOSE?: number;
    /* Eye Centre deviation strict value */
    EYE_CENTRE_DEVIATION_STRICT?: number;

    /** Confidence Score
     * Configuration for evaluating confidence score of the face related to face detection.
     * Face confidence values are from range <0,10000>.
     * The higher the value of the attribute the better quality of the face.
     * The decision thresholds are around 600, but it depends on the face image quality / camera angle etc.
     */
    /* Confidence Score loose minimum value */
    FACE_CONFIDENCE_LOOSE_MIN?: number;
    /* Confidence Score loose maximum value */
    FACE_CONFIDENCE_LOOSE_MAX?: number;
    /* Confidence Score strict minimum value */
    FACE_CONFIDENCE_STRICT_MIN?: number;
    /* Confidence Score strict maximum value */
    FACE_CONFIDENCE_STRICT_MAX?: number;
}

export interface IRNBiometricVerificationSessionDetail
{

}

/** Biometric Verification Completion Result
 * */
export interface IRNBiometricVerificationCompletionResult
{
    /** Boolean value, true for success and false for failure
     * */
    Status: boolean,

    /** Biometric Verification session detail.
     * Please refer to IRNBiometricVerificationSessionDetail for additional information
     * */
    SessionDetail: IRNBiometricVerificationSessionDetail,

    /** Biometric Image Data
     * The final image that passed all the verifications when the result status is success.
     * The image will be in the format of IRNBiometricOutputImageFormat specified via IRNBiometricProviderConfig::OutputImageFormat
     * The value is in base64 encoded format. 
     * The raw value is either plain image data or encrypted based on IRNBiometricProviderConfig::OutputFormat configuration
     * */
    BiometricData?: string,
}

/** React Native Biometric Preview Status Sink Interface
 *  Provide an object that implement this interface for getting notified on completion of the verification process.
 * */
export interface IRNBiometricPreviewStatusSink
{
    /** OnCompleted
     * Once the verification process is completed successfully or failed, this method will be called.
     * @param result Result object with the status and other information; Please refer to IRNBiometricVerificationCompletionResult
     */
    OnCompleted(result: IRNBiometricVerificationCompletionResult);
}

export const DEFAULT_ICAO_PARAMS: IRNICAOConfigurationParams =
{
    SHARPNESS_LOOSE_MIN: -5203,
    SHARPNESS_LOOSE_MAX: 99999,
    SHARPNESS_STRICT_MIN: -4336,
    SHARPNESS_STRICT_MAX: 99999,

    BRIGHTNESS_LOOSE_MIN: -9600,
    BRIGHTNESS_LOOSE_MAX: 8364,
    BRIGHTNESS_STRICT_MIN: -8728,
    BRIGHTNESS_STRICT_MAX: 6970,

    CONTRAST_LOOSE_MIN: -6600,
    CONTRAST_LOOSE_MAX: 7346,
    CONTRAST_STRICT_MIN: -5500,
    CONTRAST_STRICT_MAX: 6122,

    UNIQUE_INTENSITY_LEVELS_LOOSE_MIN: -35,
    UNIQUE_INTENSITY_LEVELS_LOOSE_MAX: 9999,
    UNIQUE_INTENSITY_LEVELS_STRICT_MIN: -29,
    UNIQUE_INTENSITY_LEVELS_STRICT_MAX: 9999,

    SHADOW_LOOSE_MIN: -7000,
    SHADOW_LOOSE_MAX: 9999,
    SHADOW_STRICT_MIN: -5000,
    SHADOW_STRICT_MAX: 9999,

    NOSE_SHADOW_LOOSE_MIN: -7000,
    NOSE_SHADOW_LOOSE_MAX: 9999,
    NOSE_SHADOW_STRICT_MIN: -5000,
    NOSE_SHADOW_STRICT_MAX: 9999,

    SPECULARITY_LOOSE_MIN: -7000,
    SPECULARITY_LOOSE_MAX: 9999,
    SPECULARITY_STRICT_MIN: -5000,
    SPECULARITY_STRICT_MAX: 9999,

    EYE_GAZE_LOOSE_MIN: -7000,
    EYE_GAZE_LOOSE_MAX: 9999,
    EYE_GAZE_STRICT_MIN: -5000,
    EYE_GAZE_STRICT_MAX: 9999,

    RIGHT_EYE_STATUS_LOOSE_MIN: -2000,
    RIGHT_EYE_STATUS_LOOSE_MAX: 9999,
    RIGHT_EYE_STATUS_STRICT_MIN: -1000,
    RIGHT_EYE_STATUS_STRICT_MAX: 9999,

    LEFT_EYE_STATUS_LOOSE_MIN: -2000,
    LEFT_EYE_STATUS_LOOSE_MAX: 9999,
    LEFT_EYE_STATUS_STRICT_MIN: -1000,
    LEFT_EYE_STATUS_STRICT_MAX: 9999,

    HEAVY_FRAME_LOOSE_MIN: -2000,
    HEAVY_FRAME_LOOSE_MAX: 9999,
    HEAVY_FRAME_STRICT_MIN: -1000,
    HEAVY_FRAME_STRICT_MAX: 9999,

    MOUTH_STATUS_LOOSE_MIN: -2000,
    MOUTH_STATUS_LOOSE_MAX: 9999,
    MOUTH_STATUS_STRICT_MIN: -1000,
    MOUTH_STATUS_STRICT_MAX: 9999,

    BACKGROUND_UNIFORMITY_LOOSE_MIN: -2000,
    BACKGROUND_UNIFORMITY_LOOSE_MAX: 9999,
    BACKGROUND_UNIFORMITY_STRICT_MIN: -1000,
    BACKGROUND_UNIFORMITY_STRICT_MAX: 9999,

    RIGHT_RED_EYE_LOOSE_MIN: -2000,
    RIGHT_RED_EYE_LOOSE_MAX: 9999,
    RIGHT_RED_EYE_STRICT_MIN: -1000,
    RIGHT_RED_EYE_STRICT_MAX: 9999,

    LEFT_RED_EYE_LOOSE_MIN: -2000,
    LEFT_RED_EYE_LOOSE_MAX: 9999,
    LEFT_RED_EYE_STRICT_MIN: -1000,
    LEFT_RED_EYE_STRICT_MAX: 9999,

    HEAD_ROLL_LOOSE_MIN: -2000,
    HEAD_ROLL_LOOSE_MAX: 9999,
    HEAD_ROLL_STRICT_MIN: -1000,
    HEAD_ROLL_STRICT_MAX: 9999,

    HEAD_YAW_LOOSE_MIN: -7000,
    HEAD_YAW_LOOSE_MAX: 7000,
    HEAD_YAW_STRICT_MIN: -5000,
    HEAD_YAW_STRICT_MAX: 5000,

    HEAD_PITCH_LOOSE_MIN: -5000,
    HEAD_PITCH_LOOSE_MAX: 4500,
    HEAD_PITCH_STRICT_MIN: -3750,
    HEAD_PITCH_STRICT_MAX: 3250,

    EYE_CENTRE_DEVIATION_LOOSE: 0.4,
    EYE_CENTRE_DEVIATION_STRICT: 0.2,

    FACE_CONFIDENCE_LOOSE_MIN: 500,
    FACE_CONFIDENCE_LOOSE_MAX: 9999,
    FACE_CONFIDENCE_STRICT_MIN: 750,
    FACE_CONFIDENCE_STRICT_MAX: 9999,
}

/** React Native Biometric Output Image Format
 * The format of the image that will receive on successful biometric verification.
 * */
export enum IRNBiometricOutputImageFormat
{
    /** 32 bits RGBX format, 8 bits for each of the four channels.  
     * The values of the alpha channel bits are ignored (image is assumed to be opaque).
     * */
    RGBA_8888 = 1,

    /** 24 bits RGB format, 8 bits for each of the three channels.
     * */
    RGB_888 = 2,

    /** 24 bits BGR format, 8 bits for each of the three channels.
     * */
    BGR_888 = 3,

    /** Multi-plane YUV 420 format.
     * */
    YUV_420_888 = 4,

    /** Compressed JPEG format.
     * */
    JPEG = 5,

}

/** Biometric Data output format
 * */
export enum IRNBiometricOutputDataFormat
{
    /** Final image value will be plain data */
    PlainData = 0,

    /** Final image value will be encrypted using IRNBiometricProviderConfig::OutputFormat_X509Cert 
     *  This allows end to end encryption between Biometric Provider component and a receiving service.
     * */
    Encrypted = 1,
}

/** Biometric verification level */
export enum IRNBiometricVerificationLevel
{
    /** No additional verification will be performed except detecting a single face in the image. */
    Off = 0,

    /** ICAO attributed will be verified. */
    ICAOVerification = 1,

    /** Passive liveness detection will be performed */
    PassiveLiveness = 2,

    /** Active liveness detection will be performed. */
    ActiveLiveness = 3,
}

/** Biometric Provider Configuration
 * The configuration parameters for initializing the Biometric Provider instance.
 * */
export interface IRNBiometricProviderConfig {

    /** Software License
     * */
    License: string,

    /** Optional ICAO parameters for face detection. 
     * When the parameters are not provided, DEFAULT_ICAO_PARAMS will be used.
     * Partial configuration also allowed. 
     * In a partial configuration, when any of the parameter is not specified, they will be picked up from DEFAULT_ICAO_PARAMS
     * */
    ICAOParams?: IRNICAOConfigurationParams,

    /** Verification session timeout in seconds. 
     * Upon reaching the timeout, the session will be terminated and results will be returned via IRNBiometricPreviewStatusSink::OnCompleted
     * This value should be 0 <= timeout <= 120. Any values less than 0 will be treated as 0s and greater than 120 will be treated as 120s.
     * When the value is 0, the timeout won't occur, giving indefinite time for the user to perform the verification.
     * */
    Timeout: Number,

    /** Biometric Output Data Format. 
     * The output data received via IRNBiometricPreviewStatusSink::OnCompleted will be based on this configuration.
     * When the value is not supplied, the default IRNBiometricOutputDataFormat::PlainData will be used.
     * */
    OutputFormat?: IRNBiometricOutputDataFormat,

    /** Output format X509 Certificate
     * If the OutputFormat is IRNBiometricOutputDataFormat::Encrypted, the X509 Certificate must be provided. 
     * Invalid certificate data will result in an exception in the BiometricProvider::initialize method.
     * */
    OutputFormat_X509Cert?: string,

    /** The output image format.
     * */
    OutputImageFormat: IRNBiometricOutputImageFormat,

    /** Biometric verification level.
     * The verification session will be completed upon capturing an image which passes the specified level of verification.
     */
    VerificationLevel: IRNBiometricVerificationLevel,

    /** Status update call back on completion of the biometric verification.
     * */
    StatusUpdateCallback: IRNBiometricPreviewStatusSink,
}


export interface IRNBiometricProvider
{
    /** Initialize
     * This method initialises the class instance and its underlying components (i.e., Camera access).
     * Unsuccessful initialisation should result in an exception.
    */
    initialize(config: IRNBiometricProviderConfig),

    /**
     * This method begins the face biometric capture process.
     * The face capturing would stop automatically once an image captured passes all the verifications successfully.
     */
    startFaceDetection(),

    /** */
    stopFaceDetection()
}