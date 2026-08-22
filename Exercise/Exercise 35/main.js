// Exercise: Enhance Image Styling Dynamically
// Task:Modify the `changeImage` function to allow users to change the image URL, border color, and additional styles such as width, height, and border radius, all through user input.

// Instructions:
// 1. Use `prompt` to ask the user for a new image URL.
// 2. Use `prompt` to ask the user for a border color.
// 3. Use `prompt` to ask the user for the width of the image (in pixels).
// 4. Use `prompt` to ask the user for the height of the image (in pixels).
// 5. Use `prompt` to ask the user for the border radius (in pixels)
//     to round the corners of the image.
// 6. Apply all these styles dynamically to the image.


// Solution
function changeImage() {
    const url = document.querySelector('#image');

    const image = prompt("Enter Your image URL");
    const color = prompt("Enter Border Color Of Your Image");
    const width = prompt("Enter Width Of Your Image");
    const height = prompt("Enter Height Of Your Image");
    const borderRadius = prompt("Enter Border Radius Of Your Image");

    url.setAttribute('src', image);

    url.style.border = `2px solid ${color}`;
    url.style.width = `${width}px`;
    url.style.height = `${height}px`;
    url.style.borderRadius = `${borderRadius}px`;
    url.style.padding = "10px";
}

