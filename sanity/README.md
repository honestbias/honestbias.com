# HonestBias Sanity.io CMS

## Exporting/Importing Datasets

Periodically, we should run `sanity dataset export production exports/production-dataset-[mm-dd-YYYY].tar.gz` and commit this file. This makes importing to test with the complete production dataset easy (if a developer is using a separate dataset, for example).

To import, run `sanity dataset import [destination-dataset] exports/production-dataset-[mm-dd-YYYY].tar.gz`

## Deploying Schema

2. `sanity deploy` (may need to `sanity login` first)
3. `sanity graphql deploy` (to deploy graphql API)