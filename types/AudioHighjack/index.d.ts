import { AH4AppController } from './AH4AppController.js';
import { AH4ScriptLog } from './AH4ScriptLog.js';
import { AH4ScriptEvent } from './AH4ScriptEvent.js';

declare global {
  const app: AH4AppController;
  const console: AH4ScriptLog;
  const event: AH4ScriptEvent;
}
