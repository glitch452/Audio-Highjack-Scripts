import { H4BlockFace } from '../../types/AudioHighjack/H4BlockFace.js';

export const toggleDisabled = (block: H4BlockFace) => (block.disabled = !block.disabled);
