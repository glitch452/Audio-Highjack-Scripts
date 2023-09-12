import {
  isFileDidEndEvent,
  isH4RecorderBlock,
  isInputSwitchBlock,
} from 'utils/block-type-guards.js';

const NAME_START = 8;
const getTypeName = (value: unknown) => Object.prototype.toString.call(value).slice(NAME_START, -1);

const logType = (name: string, value: unknown) => {
  const type_name = getTypeName(value);
  console.log(`${name}: ${type_name} | Value: ${value}`);
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const session = app.sessionWithName('Test')!;

console.log('----- AH4AppController -----');
logType('app', app);
logType('recordings', app.recordings);
logType('runningSessions', app.runningSessions);
logType('sessions', app.sessions);

console.log('----- Session -----');
logType('session', session);
logType('name', session.name);
logType('blocks', session.blocks);
logType('recordings', session.recordings);
logType('running', session.running);
logType('runTime', session.runTime);
logType('windowShown', session.windowShown);

const recording = app.recordings[0];
console.log('----- Recording -----');
logType('recording', recording);
logType('fileName', recording.fileName);
logType('filePath', recording.filePath);
logType('isPlaying', recording.isPlaying);
logType('creationDate', recording.creationDate);
logType('modificationDate', recording.modificationDate);
logType('displayDate', recording.displayDate);
logType('displayName', recording.displayName);
logType('displayTime', recording.displayTime);
logType('fileSize', recording.fileSize);
logType('fileTime', recording.fileTime);
logType('briefDescription', recording.briefDescription);
logType('fullDescription', recording.fullDescription);
logType('tags', recording.tags);

// logType('fileName', recording.fileName);
// logType('folderPath', recording.folderPath);
// logType('fileTime', recording.fileTime);
// logType('tags', recording.tags);

for (const block of session.blocks) {
  console.log('----- Block -----');
  logType('block', block);
  logType('type', block.type);
  logType('name', block.name);
  logType('disabled', block.disabled);
  if (isH4RecorderBlock(block)) {
    logType('fileName', block.fileName);
    logType('folderPath', block.folderPath);
    logType('fileTime', block.fileTime);
    logType('tags', block.tags);
  }
  if (isInputSwitchBlock(block)) {
    logType('switchPosition', block.switchPosition);
  }
}

if (isFileDidEndEvent(event)) {
  const file = event.file;
  console.log('----- IsFileDidEndEvent: File -----');
  logType('file', file);
  logType('fileName', file.fileName);
  logType('filePath', file.filePath);
  logType('isPlaying', file.isPlaying);
  logType('creationDate', file.creationDate);
  logType('modificationDate', file.modificationDate);
  logType('displayDate', file.displayDate);
  logType('displayName', file.displayName);
  logType('displayTime', file.displayTime);
  logType('fileSize', file.fileSize);
  logType('fileTime', file.fileTime);
  logType('briefDescription', file.briefDescription);
  logType('fullDescription', file.fullDescription);
  logType('tags', file.tags);
}
