import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@interchain-ui/react";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { wallets } from "@cosmos-kit/keplr";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        endpointOptions={{
          endpoints: {
            mantrachaintestnet: {
              rpc: ["https://mantra-testnet-rpc.publicnode.com"],
              rest: ["https://mantra-testnet-rest.publicnode.com"],
            },
          },
        }}
        walletConnectOptions={{
          signClient: {
            projectId: "a8510432ebb71e6948cfd6cde54b70f7",
            relayUrl: "wss://relay.walletconnect.org",
            metadata: {
              name: "CosmosKit Template",
              description: "CosmosKit dapp template",
              url: "https://docs.cosmology.zone/cosmos-kit/",
              icons: [],
            },
          },
        }}
      >
        <App />
      </ChainProvider>
    </ThemeProvider>
  </React.StrictMode>
);
