//amplify auth plugin
import { defineNuxtPlugin } from "#app";
import { Auth, Amplify } from "aws-amplify";

import awsconfig from "@/aws-exports";

Amplify.configure(awsconfig);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$auth = Auth;
});
