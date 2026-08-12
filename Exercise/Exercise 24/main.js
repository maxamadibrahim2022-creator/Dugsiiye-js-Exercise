                    // **Exercise:**
// 1. Create a function `calculateArea` that takes `width` and `height` as parameters and returns the area. If no height is provided, it should default to `width` (for calculating the area of a square).



                        // solution
function calculateArea (width, height=width){
    console.log(width * height);
}
calculateArea(2);