// src/__mocks__/hooks/useInfiniteHotels
jest.mock("../../api/hotelApi", () => ({
  fetchHotels: jest.fn(() => Promise.resolve([{ id: "1", name: "Hotel A" }])), // Return mock data
}));

jest.mock("../../types", () => ({
  HotelDataType: {}, // Mock or return an empty object if the types aren't directly used in the test
}));
