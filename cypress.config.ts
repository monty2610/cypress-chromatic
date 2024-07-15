import { defineConfig } from "cypress";
import {addMatchImageSnapshotPlugin} from '@simonsmith/cypress-image-snapshot/plugin';
import { installPlugin } from "@chromatic-com/cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on);
      installPlugin(on, config);
    },
  },
});
