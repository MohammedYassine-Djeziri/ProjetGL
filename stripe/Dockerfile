FROM stripe/stripe-cli

# Copy the script into the container
COPY start-stripe.sh /usr/local/bin/start-stripe.sh

# Make the script executable
RUN chmod +x /usr/local/bin/start-stripe.sh

# Set the entrypoint to the script
ENTRYPOINT ["/usr/local/bin/start-stripe.sh"]
