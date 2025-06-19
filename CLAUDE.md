# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple calculator web application built with vanilla HTML, CSS, and JavaScript. It's part of a learning roadmap (Step 2) focused on mastering DOM manipulation and basic web development fundamentals.

## Development Commands

Since this is a static web application with no build process, the primary development workflow is:

```bash
# Open the application
# Simply open index.html in a web browser (Chrome, Firefox, etc.)

# For development with live reload (optional)
# Use any static file server like:
python -m http.server 8000
# or
npx serve .
```

## Architecture

The application follows a simple three-file structure:

- **index.html**: Contains the calculator UI with a display input and grid of buttons. Uses inline event handlers (onclick) for simplicity.
- **style.css**: Implements a modern gradient design with CSS Grid for button layout. Fully responsive with mobile breakpoints.
- **script.js**: Contains all calculator logic with global state management using four key variables:
  - `display`: DOM reference to the result input
  - `currentInput`: Current number being entered
  - `operator`: Current mathematical operator
  - `previousInput`: Previously entered number

## Key Implementation Details

### State Management
The calculator uses a simple global state pattern with string-based calculations. The main functions are:
- `appendToResult()`: Handles number and operator input
- `calculateResult()`: Performs calculation using Function constructor for expression evaluation
- `clearResult()` and `deleteLast()`: Handle clearing operations

### Input Handling
Supports both mouse clicks and keyboard input via event listeners. Keyboard shortcuts include number keys, operators, Enter for equals, Escape for clear, and Backspace for deletion.

### Error Handling
Basic error handling displays "エラー" (Error) message for invalid calculations, with automatic clearing after 2 seconds.

## Testing

No automated testing framework is included. Testing should be done manually by:
1. Opening index.html in browser
2. Testing basic operations: +, -, *, /
3. Testing decimal point functionality
4. Testing keyboard shortcuts
5. Testing error conditions (division by zero, etc.)
6. Testing responsive design on different screen sizes