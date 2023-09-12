import {
  AH4ScriptEvent,
  FileDidEndEvent,
  GenericEvent,
  SessionEvent,
} from '../../types/AudioHighjack/AH4ScriptEvent.js';
import {
  BlockType,
  GenericBlock,
  H4BlockFace,
  H4InputSwitchBlockFace,
  H4RecorderBlockFace,
} from '../../types/AudioHighjack/H4BlockFace.js';

export const isInputSwitchBlock = (block: H4BlockFace): block is H4InputSwitchBlockFace =>
  block.type === BlockType.InputSwitchBlock;

export const isH4RecorderBlock = (block: H4BlockFace): block is H4RecorderBlockFace =>
  isGenericBlock(block) && 'fileTime' in block;

export const isGenericBlock = (block: H4BlockFace): block is GenericBlock =>
  block.type === BlockType.GenericBlock;

export const isSessionEvent = (event: AH4ScriptEvent): event is SessionEvent =>
  !!('sessions' in event && event.sessions);

export const isFileDidEndEvent = (event: AH4ScriptEvent): event is FileDidEndEvent =>
  !!('file' in event && event.file);

export const isGenericEvent = (event: AH4ScriptEvent): event is GenericEvent =>
  !isSessionEvent(event) && !isFileDidEndEvent(event);
