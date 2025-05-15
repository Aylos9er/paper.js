<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1" name="viewport"/>
  <title>
   Paper.js Demo
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;display=swap" rel="stylesheet"/>
  <style>
   body {
      font-family: 'Inter', sans-serif;
    }
  </style>
 </head>
 <body class="bg-gray-50 min-h-screen flex flex-col">
  <header class="bg-white shadow-md">
   <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
    <a class="text-2xl font-bold text-blue-600" href="#">
     Paper.js
    </a>
    <ul class="hidden md:flex space-x-6 text-gray-700 font-semibold">
     <li>
      <a class="hover:text-blue-600" href="#">
       Home
      </a>
     </li>
     <li>
      <a class="hover:text-blue-600" href="#">
       Features
      </a>
     </li>
     <li>
      <a class="hover:text-blue-600" href="#">
       Documentation
      </a>
     </li>
     <li>
      <a class="hover:text-blue-600" href="#">
       Community
      </a>
     </li>
     <li>
      <a class="hover:text-blue-600" href="#">
       Download
      </a>
     </li>
    </ul>
    <button aria-label="Toggle menu" class="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" id="menu-btn">
     <i class="fas fa-bars fa-lg">
     </i>
    </button>
   </nav>
   <div class="hidden md:hidden bg-white border-t border-gray-200" id="mobile-menu">
    <ul class="flex flex-col space-y-2 p-4 text-gray-700 font-semibold">
     <li>
      <a class="block hover:text-blue-600" href="#">
       Home
      </a>
     </li>
     <li>
      <a class="block hover:text-blue-600" href="#">
       Features
      </a>
     </li>
     <li>
      <a class="block hover:text-blue-600" href="#">
       Documentation
      </a>
     </li>
     <li>
      <a class="block hover:text-blue-600" href="#">
       Community
      </a>
     </li>
     <li>
      <a class="block hover:text-blue-600" href="#">
       Download
      </a>
     </li>
    </ul>
   </div>
  </header>
  <main class="flex-grow container mx-auto px-4 py-8">
   <section class="mb-12">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
     Paper.js Vector Graphics Scripting Framework
    </h1>
    <p class="text-lg text-gray-700 max-w-3xl">
     Paper.js is an open source vector graphics scripting framework that runs
        on top of the HTML5 Canvas. It offers a clean Scene Graph / Document
        Object Model and a lot of functionality to create and work with vector
        graphics and bezier curves, all neatly wrapped up in a well designed,
        consistent and clean programming interface.
    </p>
   </section>
   <section class="mb-12">
    <h2 class="text-2xl font-semibold text-gray-900 mb-6">
     Demo Canvas
    </h2>
    <div class="w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-300">
     <canvas alt="Canvas showing a vector graphic demo with colorful bezier curves and shapes" class="w-full h-64 md:h-96 block" height="400" id="paper-canvas" width="800">
     </canvas>
    </div>
   </section>
   <section>
    <h2 class="text-2xl font-semibold text-gray-900 mb-6">
     News &amp; Updates
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
     <article class="bg-white rounded-lg shadow p-6 flex flex-col">
      <img alt="Illustration of a software release with a rocket launching from a laptop screen showing Paper.js logo" class="rounded-md mb-4 w-full h-40 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/964806d5-5439-442d-2538-f2ad37675e45.jpg" width="600"/>
      <h3 class="text-xl font-semibold mb-2">
       Paper.js 0.12.17 Released
      </h3>
      <p class="text-gray-700 flex-grow">
       The latest version of Paper.js brings performance improvements,
            bug fixes, and new features for better vector graphics scripting.
      </p>
      <a class="mt-4 inline-block text-blue-600 hover:underline font-semibold" href="#">
       Read more
       <i class="fas fa-arrow-right ml-1">
       </i>
      </a>
     </article>
     <article class="bg-white rounded-lg shadow p-6 flex flex-col">
      <img alt="Community event with people gathered around laptops and screens showing Paper.js projects" class="rounded-md mb-4 w-full h-40 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/3daa63d7-410d-472d-cc54-13b4d1b98c43.jpg" width="600"/>
      <h3 class="text-xl font-semibold mb-2">
       Join Our Community Event
      </h3>
      <p class="text-gray-700 flex-grow">
       Connect with other Paper.js users and developers at our upcoming
            online event. Share your projects and learn new tips.
      </p>
      <a class="mt-4 inline-block text-blue-600 hover:underline font-semibold" href="#">
       Learn more
       <i class="fas fa-arrow-right ml-1">
       </i>
      </a>
     </article>
     <article class="bg-white rounded-lg shadow p-6 flex flex-col">
      <img alt="Open laptop showing Paper.js documentation and tutorials on screen with code snippets" class="rounded-md mb-4 w-full h-40 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/9ef6bce3-6460-4bf9-b0d6-d6132deaf3ed.jpg" width="600"/>
      <h3 class="text-xl font-semibold mb-2">
       New Tutorials Available
      </h3>
      <p class="text-gray-700 flex-grow">
       Explore our updated tutorials and documentation to get started or
            deepen your knowledge of Paper.js.
      </p>
      <a class="mt-4 inline-block text-blue-600 hover:underline font-semibold" href="#">
       Explore tutorials
       <i class="fas fa-arrow-right ml-1">
       </i>
      </a>
     </article>
    </div>
   </section>
  </main>
  <footer class="bg-white border-t border-gray-200 py-6 mt-auto">
   <div class="container mx-auto px-4 text-center text-gray-600 text-sm">
    © 2024 Paper.js. All rights reserved.
   </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/paper@0.12.17/dist/paper-full.min.js">
  </script>
  <script>
   // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Setup Paper.js
    paper.setup("paper-canvas");

    // Create a demo vector graphic with Paper.js
    const path = new paper.Path();
    path.strokeColor = new paper.Color(0.2, 0.6, 0.86);
    path.strokeWidth = 4;
    path.add(new paper.Point(50, 300));
    path.cubicCurveTo(new paper.Point(150, 100), new paper.Point(250, 500), new paper.Point(350, 300));
    path.smooth();

    const circle = new paper.Path.Circle({
      center: new paper.Point(600, 200),
      radius: 80,
      fillColor: new paper.Color(0.9, 0.3, 0.3, 0.5),
      strokeColor: new paper.Color(0.9, 0.3, 0.3),
      strokeWidth: 3,
    });

    const star = new paper.Path.Star({
      center: new paper.Point(700, 300),
      points: 5,
      radius1: 40,
      radius2: 80,
      fillColor: new paper.Color(0.3, 0.9, 0.3, 0.5),
      strokeColor: new paper.Color(0.3, 0.9, 0.3),
      strokeWidth: 3,
    });

    paper.view.draw();
  </script>
 </body>
</html>
