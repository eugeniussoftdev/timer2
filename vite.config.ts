import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.API_KEY),
      "process.env.AUTH_DOMAIN": JSON.stringify(env.AUTH_DOMAIN),
      "process.env.PROJECT_ID": JSON.stringify(env.PROJECT_Id),
      "process.env.STORAGE_BUCKET": JSON.stringify(env.STORAGE_BUCKET),
      "process.env.MESSAGINE_SENDER_ID": JSON.stringify(
        env.MESSAGINE_SENDER_ID
      ),
      "process.env.APP_ID": JSON.stringify(env.APP_ID),
      "process.env.MEASUREMENT_ID": JSON.stringify(env.MEASUREMENT_ID),
    },
  };
});
