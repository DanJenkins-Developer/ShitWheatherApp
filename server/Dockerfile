# Use Python 3.12 base image
FROM python:3.12

# Set the working directory in the container
WORKDIR /app

# Copy the main.py and requirements.txt file into the container
COPY main.py requirements.txt /app/

# Copy the static folder into the container
COPY static /app/static

# Install pip dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port for FastAPI
EXPOSE 8000

# Run FastAPI development server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
