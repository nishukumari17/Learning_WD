# **Installing tailwind.css**



#### **1. Project Initialization \& Dependencies**

&nbsp;		 npm create vite@latest my-project -- --template vanilla-ts



##### **2.Navigate into your project folder and install the necessary packages:**



&nbsp;		cd my-project

&nbsp;		npm install -D tailwindcss postcss autoprefixer



##### 3\. Create Configuration Files

##### 

##### You need three configuration files in your root folder (my-project/):



#### &nbsp;	A. **tailwind.config.js**

&nbsp;	This tells Tailwind which files to scan for classes.



##### &nbsp;	**code:**

&nbsp;	// tailwind.config.js

/\*\* @type {import('tailwindcss').Config} \*/

module.exports = {

&nbsp; // CRUCIAL: Scans your index.html and all files in src/

&nbsp; content: \[

&nbsp;   "./index.html", 

&nbsp;   "./src/\*\*/\*.{js,ts,jsx,tsx}",

&nbsp; ],

&nbsp; theme: {

&nbsp;   extend: {},

&nbsp; },

&nbsp; plugins: \[],

}





#### **B. postcss.config.cjs**



// postcss.config.cjs

module.exports = {

&nbsp; plugins: {

&nbsp;   // CRUCIAL: Registers the Tailwind plugin to process directives

&nbsp;   tailwindcss: {}, 

&nbsp;   autoprefixer: {},

&nbsp; },

};



#### **C. Input CSS File (src/style.css)**

&nbsp;	@import "tailwindcss";



##### **4. Link CSS in HTML and TS**



#### **HTML**

<script type="module" src="/src/main.ts"></script>





