FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    # Add these for better Python performance
    PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on

# Create and switch to non-root user
RUN useradd -m appuser

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Stripe CLI
RUN curl -fsSL https://stripe.com/stripe-cli-install.sh | bash

WORKDIR /app

# Install Python dependencies first (better layer caching)
COPY --chown=appuser:appuser requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY --chown=appuser:appuser . /app/

# Switch to non-root user
USER appuser

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health/ || exit 1

# Use gunicorn for production
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "--timeout", "120", "your_project.wsgi:application"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]