# [Pitch Tracker UI](https://www.pitch-tracker.com/)

## Running locally

### Step 1. `npm install`

### Step 2. `npm start`

## Testing locally

### `npm test`

## Building locally

### `npm run build`

## Deployment

### pushing to the `main` branch will automatically kick off Github Actions build to AWS

### running ` ./push.sh` will commit any local changes to the repo.
 - if its on the `main` branch the pipeline will automatically kick off. 
 - if its a feature branch, a build will not kick off until its merged into `main`

### see workflow config [here](https://github.com/josh-wheeler-22/pitch-tracker-ui/blob/main/.github/workflows/main.yaml)

## Architecture
### Deployed to AWS S3 Bucket
![alt text](https://github.com/josh-wheeler-22/pitch-tracker-ui/blob/main/src/images/architecture.jpg)