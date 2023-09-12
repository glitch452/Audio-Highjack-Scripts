/* eslint-disable @typescript-eslint/naming-convention */

export interface AH4ScriptLog {
  /** write message to the log. All messages will appear in Console.app. */
  log(message: unknown): void;

  /** write error message to the log. All error messages will appear in Console.app. */
  error(message: unknown): void;

  /** display an alert dialog, and write to log */
  dialog(message: unknown): void;

  /** clear the log */
  clear(): void;
}
