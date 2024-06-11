### JSON Comparator README

# JSON Comparator

JSON Comparator is a web-based tool that allows users to compare two JSON objects and visualize their differences, common fields, and new fields. The application uses an HTML layout, CSS for styling with Tailwind CSS, and JavaScript for functionality.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Compare JSON Objects**: Compare two JSON objects and display their differences, common fields, and new fields.
- **Visual Feedback**: Show or hide sections of the page based on comparison results.
- **Error Handling**: Display modal dialogs for errors such as invalid JSON input.
- **Responsive Design**: Utilizes Tailwind CSS for a modern and responsive design.

## Installation

To get started with the JSON Comparator, clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/yourusername/json-comparator.git
cd json-comparator
```

Open `index.html` in your preferred web browser.

## Usage

1. **Input JSONs**: Enter two JSON objects in the provided text areas.
2. **Run Comparison**: Click the "Compare" button to compare the JSON objects.
3. **View Results**: View the differences, common fields, and new fields in the respective text areas.
4. **Reset**: Click the "Reset" button to clear inputs and start over.

## Project Structure

```plaintext
json-comparator/
│
├── index.html       # The main HTML file containing the layout
└── assets/
    └── js/
        └── compare.js  # JavaScript file with the core functionality
```

### HTML (`index.html`)

The HTML file defines the structure of the web page, including the text areas for JSON input, buttons for comparison and reset, and sections for displaying results. It uses Tailwind CSS for styling and Google Fonts for custom fonts.

#### Key Sections:

- **Header**: Contains the title and description of the tool.
- **Main**: Contains sections for JSON input, comparison button, results, and reset button.
- **Modal**: Displays error messages when JSON parsing fails.

#### Tailwind CSS and Fonts:

- **Tailwind CSS**: Integrated via a CDN link for utility-first CSS styling. Tailwind CSS provides a set of utility classes to style the elements without writing custom CSS.
- **Google Fonts**: Includes the 'Outfit' font for a modern look.

### JavaScript (`assets/js/compare.js`)

The JavaScript file contains the functions necessary for comparing JSON objects, managing input fields, displaying results, and handling errors.

#### Key Functions:

- **runCompare()**: Reads JSON inputs, performs comparison, and updates the UI with results.
- **compareJsonObjects(obj1, obj2, prefix = "")**: Recursively compares two JSON objects and returns differences, common fields, and new fields.
- **clearInputs()**: Clears the input text areas.
- **getJsonObject(jsonString)**: Parses a JSON string into an object.
- **getAllFields(jsonObject, prefix = "")**: Retrieves all fields from a JSON object.
- **showDialog()**: Displays an error dialog.
- **hideDialog()**: Hides the error dialog.
- **modalError(error)**: Handles JSON parsing errors and displays an error message.
- **showSection(ids, show)**: Shows or hides sections of the page.
- **reset()**: Resets the page to the initial state.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

Is created for help me in some activities with large objects, and for learn how to use Tailwild css classes.
Thank you for using JSON Comparator! If you have any questions or feedback, please feel free to reach out.
