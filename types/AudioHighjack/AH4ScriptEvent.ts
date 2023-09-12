/* eslint-disable @typescript-eslint/naming-convention */

import { AH4AudioFile } from './AH4AudioFile.js';
import { AH4Session } from './AH4Session.js';

export const GenericEventType = {
  TimerWillStart: 'timerWillStart',
  TimerDidStop: 'timerDidStop',
  RunScriptShortcut: 'runScriptShortcut',
  RunScriptTextShortcut: 'runScriptTextShortcut',
  RunNow: 'runNow',
} as const;

export type GenericEventType = (typeof GenericEventType)[keyof typeof GenericEventType];

export const FileEventType = {
  FileDidEnd: 'fileDidEnd',
} as const;

export type FileEventType = (typeof FileEventType)[keyof typeof FileEventType];

export const SessionEventType = {
  SessionWillStart: 'sessionWillStart',
  SessionDidStop: 'sessionDidStop',
  SessionDidIdle: 'sessionDidIdle',
} as const;

export type SessionEventType = (typeof SessionEventType)[keyof typeof SessionEventType];

export interface FileDidEndEvent {
  /** string containing the type of event that occurred */
  readonly eventType: FileEventType;

  /** for fileDidEnd event, contains file object */
  readonly file: AH4AudioFile;
}

export interface SessionEvent {
  /** string containing the type of event that occurred */
  readonly eventType: SessionEventType;

  /** for session events, contains the session object */
  readonly session: AH4Session;
}

export interface GenericEvent {
  /** string containing the type of event that occurred */
  readonly eventType: GenericEventType;
}

export type AH4ScriptEvent = FileDidEndEvent | GenericEvent | SessionEvent;
