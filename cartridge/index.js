import { westernCartridge } from './western.js';
import { moonlitDojoCartridge } from './moonlit-dojo.js';

const CARTRIDGES = {
  western: westernCartridge,
  'moonlit-dojo': moonlitDojoCartridge,
};

function selectedId(){
  try {
    const url = new URL(window.location.href);
    return url.searchParams.get('theme') || 'moonlit-dojo';
  } catch {
    return 'moonlit-dojo';
  }
}

export const CARTRIDGE = CARTRIDGES[selectedId()] || moonlitDojoCartridge;
export { westernCartridge, moonlitDojoCartridge };
