#!/bin/sh

# This script builds and runs the Dockerfile in this directory
# If the image does not exist, it will be built
# If the container does not exist, it will be run
# If the above two things have been done, it will be started, and attach your shell to it
#
# When you get into the container you'll have bash
# You can start using jekyll as normal,
# If it is the first use, run `bundle install`
# to actually serve it use, `bundle exec jekyll serve -H 0.0.0.0`
# This will ensure that the local forward actually can see the site
#
# If you get permission errors, make sure `.jekyll-cache` and `_site` have 777 permissions
#                               and that all other files/folder have at least 666 permissions 

# Set the image name to use
IMAGE_NAME="localhost/jekyll_it:latest"

# Set the container name to use
CONTAINER_NAME="jekyll_dev"


if ! docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then

    echo "Image $IMAGE_NAME does not exist, building..."

    docker build -t "$IMAGE_NAME" .

fi

if [ "$(docker ps -aq -f name=${CONTAINER_NAME})" ]; then

    echo "Container $CONTAINER_NAME already exists! Using docker start instead."

    docker start "${CONTAINER_NAME}"

    docker attach "$CONTAINER_NAME"

else

    echo "Container $CONTAINER_NAME does not exist, Using docker run instead."

    # I was having issue with no internet in the container, 
    # the dns option fixes that, so it may or may not be needed on your machine
    docker run \
        --name "${CONTAINER_NAME}" \
        -it \
        --volume="$PWD:/srv/jekyll" \
        -p 4000:4000 \
        --dns 8.8.8.8 \
        "$IMAGE_NAME"
fi
