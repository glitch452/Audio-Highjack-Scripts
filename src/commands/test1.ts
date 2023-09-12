import { toggleDisabled } from 'utils/toggleDisabled.js';
import { AH4AudioFile } from '../../types/AudioHighjack/AH4AudioFile.js';

const SESSION_NAME = 'Test';
const session = app.sessionWithName(SESSION_NAME);

console.log(session);

if (session) {
  const mic = session.blockWithName('Mic');
  if (mic) {
    toggleDisabled(mic);
  }
}

const logType = (name: string, value: unknown) => {
  const type_name = Object.prototype.toString.call(value);
  console.log(`${name}: ${type_name}`);
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const file = {} as AH4AudioFile;

console.log(Object.keys(file));

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

// session.running ? session.stop() : session.start();

// const mic = session.blocks.find((b) => b.name === "Mic");

// console.log(mic.disabled);

// if (!session.running) {
//   return;
// }
