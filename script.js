function fillRadialProgress(circleElement, percentage) {
    const circle = circleElement.querySelector('circle'); // Get the circle in the div
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
}

// Fill the radial progress circles with marks percentage
fillRadialProgress(document.querySelector('.bg-blue-200'), 70);
fillRadialProgress(document.querySelector('.bg-green-200'), 85);
fillRadialProgress(document.querySelector('.bg-yellow-200'), 60);
fillRadialProgress(document.querySelector('.bg-red-200'), 75);
fillRadialProgress(document.querySelector('.bg-purple-200'), 90);
fillRadialProgress(document.querySelector('.bg-pink-200'), 65);
fillRadialProgress(document.querySelector('.bg-orange-200'), 80);
fillRadialProgress(document.querySelector('.bg-indigo-200'), 88);
fillRadialProgress(document.querySelector('.bg-teal-200'), 72);
fillRadialProgress(document.querySelector('.bg-yellow-200:last-child'), 78);