/* eslint-disable @typescript-eslint/naming-convention */
import { TagsDictionary } from './TagsDictionary.js';

export const BlockType = {
  GenericBlock: 'GenericBlock',
  InputSwitchBlock: 'InputSwitchBlock',
} as const;

export type BlockType = (typeof BlockType)[keyof typeof BlockType];

interface BlockBaseProperties {
  /** string indicating the type of the block */
  readonly type: BlockType;

  /** name of block, settable */
  name: string;

  /** boolean, settable, enable or disable block */
  disabled: boolean;
}

export interface GenericBlock extends BlockBaseProperties {
  readonly type: typeof BlockType.GenericBlock;
}

export interface H4DuckingBlockFace extends GenericBlock {}
export interface H4MixerBlockFace extends GenericBlock {}
export interface H4ParamEqBlockFace extends GenericBlock {}
export interface AH4ShoutcastViewModel extends GenericBlock {}
export interface H4SpeechDenoiseFace extends GenericBlock {}

export interface H4RecorderBlockFace extends GenericBlock {
  /** file name, settable, can include %tokens */
  fileName: string;

  /** path to recording folder, settable */
  folderPath: string;

  /** duration of current recording */
  readonly fileTime: number;

  /** A dictionary of the tags that are set in the recorder block */
  readonly tags: Readonly<TagsDictionary>;

  /**
   * set the tags that will be used for the next recording
   *
   * Tags can include %tokens to be substituted.
   * Any changes won't apply to a recording that is already in progress.
   * You can update tags directly to finished files instead.
   *
   * Any tags provided in the dictionary will be saved to the recorded file.
   * Existing tags are unchanged unless they are being replaced.
   * Numerical fields expect a number or a string that will convert to a number.
   * The file’s ‘tags’ dictionary is also a valid dictionary for calling updateTags().
   */
  updateTags(tagsDictionary: TagsDictionary): void;
}

export interface H4InputSwitchBlockFace extends BlockBaseProperties {
  readonly type: typeof BlockType.InputSwitchBlock;

  /** value "A" or "B", settable (doesn't update the switch position UI when setting) */
  switchPosition: 'A' | 'B';

  /** switch to A */
  switchToA(): void;

  /** switch to B */
  switchToB(): void;
}

export type H4BlockFace =
  | AH4ShoutcastViewModel
  | GenericBlock
  | H4DuckingBlockFace
  | H4InputSwitchBlockFace
  | H4MixerBlockFace
  | H4ParamEqBlockFace
  | H4RecorderBlockFace
  | H4SpeechDenoiseFace;
