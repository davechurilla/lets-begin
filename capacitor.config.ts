import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: "Let's Begin!",
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
