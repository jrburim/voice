import { EventSubscriptionVendor } from 'react-native';

type Callback = (error: string) => void;

export type VoiceModule = {
  /**
   * Gets list of SpeechRecognitionServices used.
   * @platform android
   */
  getSpeechRecognitionServices: () => Promise<string[]> | void;
  destroySpeech: (callback: Callback) => void;
  startSpeech: Function;
  stopSpeech: (callback: Callback) => void;
  cancelSpeech: (callback: Callback) => void;
  isRecognizing: Function;
  isSpeechAvailable: Function;
  supportedLanguages: Function;
} & SpeechEvents &
  EventSubscriptionVendor;

export type SupportedLanguagesType = {
  supported: Array<{ code: string; name: string }>;
  preferred: string[];
};

export type SpeechEvents = {
  onSpeechStart?: (e: SpeechStartEvent) => void;
  onSpeechRecognized?: (e: SpeechRecognizedEvent) => void;
  onSpeechEnd?: (e: SpeechEndEvent) => void;
  onSpeechError?: (e: SpeechErrorEvent) => void;
  onSpeechResults?: (e: SpeechResultsEvent) => void;
  onSpeechPartialResults?: (e: SpeechResultsEvent) => void;
  onSpeechVolumeChanged?: (e: SpeechVolumeChangeEvent) => void;
};

export type SpeechStartEvent = {
  error?: boolean;
};

export type SpeechStartOptions = {
  sourceURL?: string;
  partialResults?: boolean /* Default false */;
  [key: string]: any;
};

export type SpeechRecognizedEvent = {
  isFinal?: boolean;
};

export type SpeechResultsEvent = {
  value?: string[];
};

export type SpeechErrorEvent = {
  error?: {
    code?: string;
    message?: string;
  },
  recognitionInfo: {
      sourceURL: string
  }
};

export type SpeechEndEvent = {
  error?: boolean;
};

export type SpeechVolumeChangeEvent = {
  value?: number;
};
