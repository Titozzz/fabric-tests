
import {TurboModuleRegistry} from 'react-native';

export interface DEPRECATED_RCTExport<T extends void = void> {
    getConstants?: () => Record<string, unknown>;
  }
  
  export interface TurboModule extends DEPRECATED_RCTExport<void> {}


export interface Spec extends TurboModule {
  answerTheUltimateQuestion(input: string): number;
}

export default (TurboModuleRegistry.get<Spec>('NativeAnswerSolver'));