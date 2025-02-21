# Step 1: Use Node.js official image as base for the build stage
FROM node:18 AS build

# Step 2: Set working directory to the root of your project
WORKDIR /HOTELS

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire source code to the container
COPY . .

# Step 6: Build the client and server (SSR)
RUN npm run build

# Step 7: Set up production environment (cross-env to ensure NODE_ENV is set correctly)
ENV NODE_ENV=production

# Step 8: Use a lighter image for running the application (Node.js runtime image)
FROM node:18-slim

# Step 9: Set working directory to the root of your project in the final image
WORKDIR /HOTELS

# Step 10: Copy build artifacts from the previous build stage
COPY --from=build /HOTELS/dist /HOTELS/dist

# Step 11: Copy the server-side code and db.json for JSON server (if needed)
COPY --from=build /HOTELS/server.js /HOTELS/db.json /HOTELS/

# Step 12: Copy the .env file into the container
COPY .env .env

# Step 13: Install production dependencies only (if any)
COPY package*.json ./
RUN npm install --production

# Step 14: Expose the port your application will run on (port 5000)
EXPOSE 5000

# Step 15: Set the entry point to start the development server
CMD ["npm", "run", "dev"]
