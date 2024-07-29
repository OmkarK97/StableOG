import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(), nodePolyfills()
  ],
});

//npm i cosmos-kit chain-registry@1.62.3 @interchain-ui/react @cosmos-kit/react @cosmos-kit/keplr @cosmjs/stargate @cosmjs/proto-signing @cosmjs/cosmwasm-stargate