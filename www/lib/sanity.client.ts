import {createClient} from "next-sanity"

export const client = createClient({
  projectId: "669pyf9b",
  dataset: "production",
  apiVersion: "2026-02-05",
  useCdn: false,
});
