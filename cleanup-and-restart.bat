@echo off
echo === Stopping and cleaning up Docker containers and images ===

REM Stop all running containers
echo Stopping all containers...
docker stop $(docker ps -q) 2>nul

REM Remove all containers
echo Removing all containers...
docker rm $(docker ps -aq) 2>nul

REM Remove all images
echo Removing all images...
docker rmi $(docker images -q) 2>nul

REM Remove all volumes (optional - uncomment if needed)
REM docker volume prune -f

REM Remove all networks (optional - uncomment if needed)
REM docker network prune -f

echo === Cleanup completed ===
echo.
echo === Building and starting with Docker Compose ===

REM Build and start services
docker-compose up --build -d

echo.
echo === Services started ===
echo Frontend: http://localhost:3000
echo Backend: http://localhost:8080
echo.
echo To view logs: docker-compose logs -f
echo To stop: docker-compose down