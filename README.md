## The challenge

Your challenge is to build out this single page website and make it bug-free.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:


- Select a category. (default: all);
- Select a job type. (default: all);
- Enter a company name or not. (default: null);
- Enter a tag name or not. (default: null);
- Enter a search phrase or not. (default: null);
- Submit the form and see a list of relevant results.
- Sort results by: Date, Salary, 
- Bookmarks a result. (save the result object in the local storage).
- Go back to the search panel easily and change the inputs.
- See the list of bookmarks.
- Submits Email address for newsletter subscription.


## Workflow

At the state of document.ready, fetch categories from the API. then set categories in the select input.

In the event of search button click, initiate a call to the endpoint and fetch related data. Then use a loop on the response to create a result per each "job" object.

Endopoint address: https://remotive.com/api/remote-jobs

API Docs: https://github.com/remotive-com/remote-jobs-api

Use https://www.actionforms.io/ to create the Email newsletter subscription.




## Where to find everything


Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 



You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Follow these steps:

1. Fork this repository.
2. Clone it into your local repository using VScode.
3. Push the code back.
4. Activate Github pages.
5. Share the link

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

 

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.



**Have fun building!** 🚀
