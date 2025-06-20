📁 Folder Explorer – React Project

This is a simple and interactive Folder Explorer built using React JS. The main goal of this project is to help beginners understand how to work with nested data structures, recursive components, and React state/props in a clean and practical way.

🚀 Project Overview
This React app simulates a folder/file explorer like you see in VS Code or any file manager. It displays a folder structure from a dummy JSON file and allows users to expand or collapse folders by clicking on them.

It’s a great project to learn:

Component-based architecture

Recursive rendering

State management using React hooks (useState)

Data passing using props

Conditional UI updates


🧩 Features

📁 Display nested folders and files
🔁 Uses recursion to render unlimited folder depth
📂 Expand/Collapse folder structure
🧠 Clear separation of data and UI logic
🎨 Simple and clean UI using CSS
🖼️ Custom folder icons for a better look


🛠️ Tech Stack

React JS (Functional Components)
JavaScript (ES6+)
CSS (Basic styling)
Dummy JSON for folder structure

🧠 How It Works

The explorer object contains folder and file data in a nested format.
The Folder component receives this data as props.
It checks if an item is a folder using isFolder.
If it is a folder, it renders a clickable div that toggles its content using useState.
If it's a file, it renders a 📄 file icon with the file name.
The process is recursive — folders inside folders are rendered using the same Folder component.


🗂️ Folder Structure

  📁 public
     └─ 📁 public nested 1
         ├─ 📄 index.html
         └─ 📄 hello.html
     └─ 📄 public_nested_file

  📁 src
     ├─ 📄 App.js
     ├─ 📄 Index.js
     └─ 📄 styles.css

  📄 package.json


📂 Project Files
  
Folder.js: The recursive component that renders folders and files.
folderData.js: The dummy JSON used to simulate a file system.
App.js: The root component to hold state and render the Folder component.
App.css: Simple UI styling.


#ReactJS #FolderExplorer #RecursiveComponent #ReactProps #useState #FrontendProjects #WebDevelopment #OpenSource #JavaScript #BeginnersProject
