export const mockedHotelsData = {
  hotels: [
    {
      id: 1,
      name: "Homa",
      description:
        "Tehran Homa Hotel, one of the most prestigious five-star hotels in the capital.",
      location: { lat: 35.6892, long: 51.389 },
      stars: 5,
      image: "Homa.webp",
      comments: [
        {
          user: "John Doe",
          text: "Amazing hotel! The staff was incredibly helpful.",
        },
        {
          user: "Jane Smith",
          text: "The view from the room was spectacular. I highly recommend staying here.",
        },
        {
          user: "Ali Reza",
          text: "One of the best hotels I've stayed at in Tehran. Worth the price.",
        },
      ],
    },
    {
      id: 2,
      name: "Espinas Palace",
      description:
        "A luxurious five-star hotel offering panoramic views of Tehran.",
      location: { lat: 35.754, long: 51.397 },
      stars: 5,
      image: "Espinas.webp",
      comments: [
        {
          user: "Sara Ali",
          text: "Absolutely stunning views from the top floors.",
        },
        {
          user: "Omar Khayyam",
          text: "Great service and comfortable rooms. Highly recommended.",
        },
        {
          user: "Fatima Zahra",
          text: "The food at the hotel restaurant was delicious. A five-star experience!",
        },
      ],
    },
    {
      id: 3,
      name: "Parsian Azadi",
      description: "A top-class hotel with exceptional service and amenities.",
      location: { lat: 35.8016, long: 51.391 },
      stars: 5,
      image: "Parsian.webp",
      comments: [
        {
          user: "Mohammad Reza",
          text: "Fantastic hotel with superb amenities. I felt like royalty.",
        },
        {
          user: "Leila Abbassian",
          text: "The location is great, and the service was impeccable. I'll definitely return.",
        },
      ],
    },
    {
      id: 4,
      name: "Ferdowsi International Grand Hotel",
      description:
        "An elegant hotel in the heart of Tehran with easy access to tourist attractions.",
      location: { lat: 35.7003, long: 51.414 },
      stars: 4,
      image: "Ferdosi.webp",
      comments: [
        {
          user: "Reza Shah",
          text: "Good location, and the rooms are spacious and comfortable.",
        },
        {
          user: "Mona Farah",
          text: "The hotel was nice, but the service could have been better.",
        },
      ],
    },
    {
      id: 5,
      name: "Amir Hotel",
      description: "A normal hotel.",
      location: { lat: 35.7003, long: 51.414 },
      stars: 4,
      image: "Amir.webp",
      comments: [],
    },
  ],
};
