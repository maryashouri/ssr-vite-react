import { renderHook, waitFor } from "@testing-library/react";
import { useInfiniteHotels } from "./useInfiniteHotels";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockedHotelsData } from "../__mocks__/hotelMocks";

const queryClient = new QueryClient();

export const Providers = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("when data is fetched successfully", () => {
  beforeEach(() => {
    // Create a MockAdapter instance for axios
    const mock = new MockAdapter(axios);
    // Mock the GET request for the fetchHotels endpoint
    mock
      .onGet("http://localhost:5000/hotels?_limit=5&_page=1")
      .reply(200, mockedHotelsData);
  });

  it("should return data after initial empty state", async () => {
    const { result } = renderHook(() => useInfiniteHotels(), {
      wrapper: Providers,
    });
    expect(result.current.hotels).toEqual([]); // Initially empty state
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(true);
  });

  it("should return data", async () => {
    const { result } = renderHook(() => useInfiniteHotels(), {
      wrapper: Providers,
    });

    await waitFor(() =>
      expect(result.current.hotels).toEqual(mockedHotelsData.hotels)
    );
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(false);
  });
});
