## Reel Talk

### 🚀 Follow the steps below to run the code on your machine.

#### Setting Up Your Development Environment

1. Install and configure Git
2. Install Node (v18.12.1)
3. Install the IDE of your choice (Webstorm, VS code, etc.)

#### Downloading and Running the Project

#### Step 1: Connect and Clone
- Connect to GitHub and clone the repository in your local using the command: `https://github.com/Megha30501/reel-talk`
##### Step 2: Run the Application Locally


#### 2.1 Run the code

- Navigate to the `REEL-TALK` folder.
- Run `npm install` to install all the project's dependencies
- Execute the command `npm run dev`. It will start the node server at `http://localhost:5173`.

### Here's the link of the deployment

*Link :* https://reel-talk-phi.vercel.app/

## Design Decision

### Genre Selection

The genre selection page is designed to be user-friendly, allowing you to easily choose your favorite genres for movies and TV shows. Used grids and reusable components to keep the interface relative and maintainable.

**Key Features:**
- **Top 5 Selection:** Users need to pick at least three genres before moving on to the next step.
- **All checkbox:** There’s a handy "Select All" checkbox that lets users quickly pick all genres with one click.

**Data Structure:**
- **Genres:** Each genre is defined as an object, encapsulating attributes like the genre's name and emoji representation.
- **State Management:** React's state is utilized to keep track of which genres are selected and whether the full list is shown.
- 
**Reusable Components:**
- **ProgressBar:** Tracks and visually represents the user’s progress through different stages of genre selection.
- **Title:** Displays clear and concise headings for different sections of the page.


### Top 5 Movies Selection
The Top 5 Movies page is designed to help you pick your favorite movies easily. This page also uses reusable components for a consistent look and feel.

**Key Features:**
- **Top 5 Selection:** Users can select up to five movies from a curated list.
- **Selected Movie Display** The movies users choose are highlighted in a special box.
  **DeSelect Button:** Users can easily deselect a movie with a simple click.
- **Search Bar:** Users can quickly find movies by typing their names into the search bar.

**Data Structure:**
- **Movies:** Each movie is represented by an object containing attributes with the movie’s name and its corresponding image.
- **State Management:** React's state is employed to track selected movies, limiting the selection to a maximum of five.

**Reusable Components:**
- **ProgressBar:** Continuously updates the user’s progress as they make their selections.
- **Title:** Provides headings that clearly define the purpose of each section or page.
- **SearchBar:** Allows users to search for movies efficiently, simplifying the selection process.
- **TopMovies:** Map all selected images by user and show it to the dotted box.










