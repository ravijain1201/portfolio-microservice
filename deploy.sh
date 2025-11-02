#!/bin/bash

# 1. Create Azure Container Registry
az acr create --resource-group myResourceGroup --name myregistry --sku Basic

# 2. Login to ACR
az acr login --name myregistry

# 3. Build and push images
docker build -t myregistry.azurecr.io/spring-backend:latest ./backend
docker build -t myregistry.azurecr.io/react-frontend:latest ./frontend

docker push myregistry.azurecr.io/spring-backend:latest
docker push myregistry.azurecr.io/react-frontend:latest

# 4. Deploy to Azure Container Instances
az container create --resource-group myResourceGroup --file azure-deploy.yml