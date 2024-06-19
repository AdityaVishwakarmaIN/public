# Image Grid Editor

The Image Grid Editor is an interactive web-based tool that allows you to draw numbered grids on images. With this tool, you can load an image, specify the starting and ending points of the grid by clicking on the image, and generate a numbered grid overlay. The numbers are displayed on the bottom and left lanes of the grid and mirrored on the top and right lanes, excluding the maximum and least values.

## Features

- Load an image from your local file system
- Specify grid starting and ending points by clicking on the image
- Generate a numbered grid based on the specified points
- Display numbers on the bottom and left lanes of the grid
- Mirror numbers on the top and right lanes (excluding max and min values)
- Save the edited image with the grid overlay
- Clear the grid and reset the tool

## Usage

1. Clone the repository: git clone https://github.com/your-username/image-grid-editor.git
2. Open the `index.html` file in a web browser.
3. Click on the "Choose File" button to select an image file.
4. Once the image is loaded, click on two points to specify the grid's starting and ending points.
5. The numbered grid will be generated based on the specified points.
6. To save the edited image, click on the "Save Image" button.
7. To clear the grid and start over, click on the "Clear" button.

## Customization

You can customize the following parameters in the JavaScript code:

- `numberingDistance`: Distance between each number on the grid axes (default: 50 pixels)
- `font`: Font style and size for the numbers (default: '24px Arial')
- `fillStyle`: Color of the numbers (default: 'black')
- `strokeStyle`: Color of the gridlines (default: 'rgba(0, 0, 0, 0.3)')
- `setLineDash`: Dash pattern for the gridlines (default: [2, 2])

Feel free to modify these parameters to suit your needs.

## Browser Compatibility

The Image Grid Editor has been tested and works on modern web browsers, including Chrome, Firefox, Safari, and Edge.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
