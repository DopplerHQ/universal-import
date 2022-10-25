FROM node:16-alpine as build

# Set workplace directory
WORKDIR /usr/src/app

# Copy code
COPY . .

# Install dependencies
RUN npm install

# Set new stage
FROM node:16-alpine

# Set workplace directory
WORKDIR /usr/src/app

# Copy files from build stage into container
COPY --from=build /usr/src/app .

# Install tini
RUN apk add --no-cache tini

# Install bash (Needed for correct sed substitution)
RUN apk add --no-cache bash

# Install Doppler CLI
RUN set -e; \
    apk add --no-cache wget; \
    wget --secure-protocol=TLSv1_2 -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub; \
    echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories; \
    apk add --no-cache doppler

# Run on container startup
ENTRYPOINT  if [ -n "$SERVER_INGRESS_URL" ]; then                                                             \
                # If the app is being bundled with the Server app then set the override host                  \
                export DOPPLER_DASHBOARD_URL="https://dashboard-${RELEASE_ENV_ID}.preview.doppler.team"; \
            fi &&                                                                                             \
            tini -- npm run docker
