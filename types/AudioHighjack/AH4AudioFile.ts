/* eslint-disable @typescript-eslint/naming-convention */
import { TagsDictionary } from './TagsDictionary.js';

export interface AH4AudioFile {
  /** name of the file */
  readonly fileName: string;

  /** full path to the file */
  readonly filePath: string;

  /** is playing */
  readonly isPlaying: boolean;

  /** creation date */
  readonly creationDate: Date;

  /** modification date */
  readonly modificationDate: Date;

  /** displayable date */
  readonly displayDate: string;

  /** displayable name */
  readonly displayName: string;

  /** displayable duration */
  readonly displayTime: string;

  /** file size, in bytes */
  readonly fileSize: number;

  /** duration, in seconds */
  readonly fileTime: number;

  /** brief description */
  readonly briefDescription: string;

  /** full description */
  readonly fullDescription: string;

  /**
   * A dictionary of tags in the recording.
   * The dictionary will contain all of the tags set on this Recording.
   * Tags that haven't been set are omitted.
   */
  readonly tags: Readonly<TagsDictionary>;

  /** Start Playing */
  startPlaying(): void;

  /** Stop Playing */
  stopPlaying(): void;

  /** Pause Playing */
  pausePlaying(): void;

  /** Toggle between Playing or Paused */
  togglePlayPaused(): void;

  /** show in Inspector */
  showInInspector(): void;

  /** add to Music.app (or iTunes.app) */
  addToMusic(): void;

  /** open in audio editor */
  openInEditor(): void;

  /** open using the application at path */
  openInApp(path: string): void;

  /** reveal in Finder */
  revealInFinder(): void;

  /** remove from Recording list */
  removeFromList(): void;

  /** move to the Trash */
  sendToTrash(): void;

  /**
   * rename the file
   *
   * The correct file extension is added automatically,
   * it does not need to be provided.
   * If a file with the new name already exists, a number will be appended.
   */
  renameFile(newName: string): void;

  /**
   * move the file to a new location
   * - If the path is to a folder, the file will be moved to the new folder keeping its current name.
   * - If the path includes a file name, the new name will be used.
   * - A file extension correct for the recording will be added if it isn't provided.
   * - If a file already exists at the new path, a number will be appended.
   */
  moveFile(newPath: string): void;

  /**
   * Update tags saved into the recording
   *
   * Any tags provided in the dictionary will be saved to the recorded file.
   * Existing tags are unchanged unless they are being replaced.
   * Numerical fields expect a number or a string that will convert to a number.
   * The file’s ‘tags’ dictionary is also a valid dictionary for calling updateTags().
   */
  updateTags(tagsDictionary: TagsDictionary): void;
}
