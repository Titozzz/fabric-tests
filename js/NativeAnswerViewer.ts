import codegenNativeComponentUntyped from 'react-native/Libraries/Utilities/codegenNativeComponent';
import codegenNativeCommandsUntyped from 'react-native/Libraries/Utilities/codegenNativeCommands';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import type {  ViewProps, HostComponent } from 'react-native';
import React from 'react';

const codegenNativeCommands = codegenNativeCommandsUntyped as <T extends {}>(options:{supportedCommands: (keyof T)[]} ) => T;
const codegenNativeComponent = codegenNativeComponentUntyped as <T extends {}>(name: string) => HostComponent<T>;

interface NativeProps extends ViewProps  {
    color?: string,
    step?: Int32,
};

export type AnswerViewerViewType = HostComponent<NativeProps>;

interface NativeCommands {
    changeBackgroundColor: (
        viewRef: React.ElementRef<AnswerViewerViewType>,
        color: string,
    ) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
    supportedCommands: ['changeBackgroundColor'],
});

export default (codegenNativeComponent<NativeProps>(
    'AnswerViewer',
));