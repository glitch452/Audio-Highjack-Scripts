/* eslint-disable @typescript-eslint/naming-convention */

import { AH4AudioFile } from './AH4AudioFile.js';
import { H4BlockFace } from './H4BlockFace.js';

export interface AH4Session {
  /** session name, settable */
  name: string;

  /** array of all blocks */
  readonly blocks: readonly H4BlockFace[];

  /** array of recordings made by this session */
  readonly recordings: readonly AH4AudioFile[];

  /** session running boolean, settable */
  running: boolean;

  /** session running time, in seconds */
  readonly runTime: number;

  /** boolean, settable, show or hide the session's window */
  windowShown: boolean;

  /** starts session */
  start(): void;

  /** stops session */
  stop(): void;

  /**
   * Find a block by name.
   * The name must match the name shown on the block, including case.
   * The first matching block found is returned.
   * Setting your own name on a block, by editing the popover title,
   * is a good idea to match specific blocks accurately.
   * Some blocks, by default, show a different name in their popover
   * title - only the name shown on the block will match.
   */
  blockWithName(name: string): H4BlockFace | undefined;

  /** show the session's window */
  showWindow(): void;

  /** quits any apps set within Application blocks */
  quitApplicationSources(): void;
}
