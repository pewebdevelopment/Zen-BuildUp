//amplify auth plugin
import { defineNuxtPlugin } from "#app";
import { Amplify, Auth, DataStore, AuthModeStrategyType } from "aws-amplify";

import awsconfig from "@/aws-exports";

Amplify.configure({
  ...awsconfig,
  DataStore: { authModeStrategyType: AuthModeStrategyType.MULTI_AUTH },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$auth = Auth;
});
