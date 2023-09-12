/* eslint-disable @typescript-eslint/naming-convention */
import { AH4AudioFile } from './AH4AudioFile.js';
import { AH4Session } from './AH4Session.js';

export type ShellCommandResult = [resultCode: number, stdout: string, stderr: string];

export interface AH4AppController {
  /** array of recordings, for all Sessions */
  readonly recordings: readonly AH4AudioFile[];

  /** array of running sessions */
  readonly runningSessions: readonly AH4Session[];

  /** array of all sessions */
  readonly sessions: readonly AH4Session[];

  /** find a session by name */
  sessionWithName(name: string): AH4Session | undefined;

  /** show the Sessions window */
  showSessionsWindow(): void;

  /** stops all sessions */
  stopAllSessions(): void;

  /** bring Audio Hijack to the front, above other apps */
  bringToFront(): void;

  /** quit Audio Hijack */
  quit(): void;

  /** run a shell script (blocks main thread), returns (result code, stdout, stderr) */
  runShellCommand(command: string): ShellCommandResult;

  /** returns text in a suitable format for passing to runShellCommand */
  shellEscapeArgument(text: string): string;

  /** run a shortcut in Shortcuts.app with text as input */
  runShortcut(shortcutName: string, text: string): void;
}
