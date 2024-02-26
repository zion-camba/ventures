## Next.js Project with Directus Integration

This Next.js project is initialized using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and includes integration with [Directus](https://directus.io/), a headless CMS. Follow the steps below to set up and run the project.

# Getting Started

1. Run the development server:

   ```bash
   yarn dev
   ```

2. After running the Next.js project, you can access the following links:

   - **Directus Project:** [https://directus.area917.ph](https://directus.area917.ph)

     - Login to Directus using your admin credentials.

   - **Next.js Project:** [http://localhost:3000](http://localhost:3000)

# Setting Up Directus

To connect to the Directus API, follow these steps:

1. In the Directus admin panel:

   - Log in using your admin credentials.

2. View the "products" collection:
   - Take note of the following fields:
     - name (input - String)
     - price (input - Float)
     - image (textarea - String)
     - description (textarea - String)

Now, you have set up the integration between Next.js and Directus, and you can start building your project.

# Libraries

1. React-icons

- **Description:** Provides a collection of popular icons for React applications.
- **Usage:** Import specific icons as React components.

2. React-spinners

- **Description:** Offers customizable loading spinners for React applications.
- **Usage:** Import and use spinners for visual feedback during processes.

3. DaisyUI

- **Description:** Alpine.js UI components for quick, stylish interfaces with Tailwind CSS.
- **Usage:** Integrate DaisyUI components with Tailwind CSS classes.

4. Tailwind CSS

- **Description:** Utility-first CSS framework for quick and responsive UI development.
- **Usage:** Apply Tailwind CSS classes directly in HTML for styling.

5. Zod

- **Description:** TypeScript-first schema declaration and validation library.
- **Usage:** Define and validate data structures in TypeScript for enhanced reliability.

# Package.json Scripts

- **dev**: Run the development server with hot-reloading in Next.js.

- **build**: Create a production-ready build of your Next.js app stored in `/.next`.

- **start**: Launch the production server to serve the optimized application.

- **lint**: Check your code with Next.js linting for code quality and standards.

- **format**: Automatically format your code using Prettier for consistent styling.

```bash
   yarn dev
   yarn build
   yarn start
   yarn lint
   yarn format
```
