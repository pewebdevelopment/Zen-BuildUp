//amplify auth plugin
import { defineNuxtPlugin } from "#app";
import { Auth, Amplify } from "aws-amplify";

import awsconfig from "@/aws-exports";

Amplify.configure(awsconfig);
Amplify.configure({ API: { graphql_endpoint: "graphql-api-endpoint" } });

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$auth = Auth;
});
