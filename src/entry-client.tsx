import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Router } from "./router";

// Create the client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

// Get dehydrated state from the SSR response
const dehydratedState = window.__REACT_QUERY_STATE__ || {};

if (!dehydratedState) {
  throw new Error("Dehydrated state is not available on the client-side.");
}

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Hydrate>
    </QueryClientProvider>
  </React.StrictMode>
);
