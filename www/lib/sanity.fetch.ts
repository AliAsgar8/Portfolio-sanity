import { client } from "./sanity.client";
import { PAGE_QUERY, SITE_SETTINGS_QUERY } from "./sanity.queries";

export const getHeader = () => client.fetch(SITE_SETTINGS_QUERY);
export const getPage = () =>
  client.fetch(
    PAGE_QUERY,
    { slug: "home" },
    {
      next: { revalidate: 60 } // 60 sec
    }
  );

