import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Router } from "./router";
import {
  QueryClient,
  dehydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import { fetchHotels } from "./hooks/useHotels";

export async function render({ path }: { path: string }) {
  const queryClient = new QueryClient();

  // Prefetch hotels data before rendering
  await queryClient.prefetchQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });

  const dehydratedState = dehydrate(queryClient);

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={path}>
          <Router />
        </StaticRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );

  // Inject the dehydrated state into the HTML response
  const dehydratedStateScript = `<script id="dehydrated-state">window.__REACT_QUERY_STATE__ = ${JSON.stringify(
    dehydratedState
  )}</script>`;

  return {
    html: html + dehydratedStateScript,
    dehydratedState,
  };
}
