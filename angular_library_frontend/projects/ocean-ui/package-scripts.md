# Storybook scripts

From the repository root, you can run Storybook for this library by configuring a workspace script:
- npx storybook@latest dev -p 6006 -c projects/ocean-ui/.storybook
- npx storybook@latest build -c projects/ocean-ui/.storybook -o dist/storybook-ocean-ui

Note: This repository template may not include Storybook dependencies preinstalled. CI will handle installation where configured.
