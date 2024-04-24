# film-project-view-component

Film project View Component:
Content to Display:
Project Information:
Project name (project)
Song information (song)
Video idea (video_idea)
Scenes:
Description
Duration
Name
Timeslot
Scene description
Scene Storyboard:
Direction of photography (direction_photography):
Foreground and background scenery
Lighting and mood
Overall visual layout and composition
Perspective
Image generation (image_generation_result)
Style Information:
Art direction (art_direction)
Art style (art_style)
General mood (general_mood)
Motifs
Sub-components:
ScenePhotographyComponent:
Props: direction_photography, image_generation_result, scene
Displays direction of photography details, image generation result, and scene description.
SceneDetailsComponent:
Props: Description, Duration, Name, Timeslot, description
Displays scene details.
Functionality:
Rendering Project Information:
Render project name, song information, and video idea.
Rendering Scenes:
Map through the array of scenes and render each using the Scene Components.
Rendering Style Information:
Render art direction, art style, general mood, and motifs.
Optional Functionality:
Provide options to edit or delete scenes/prompts.
Allow users to add new scenes/prompts.
Implement navigation between scenes/prompts.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/film-project-view-component.git
cd film-project-view-component
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
