# Next.js Leaderboard Site

This is a leaderboard site built with TypeScript where users can log in and create a leaderboard page for their group of friends or a club. Users can enter the name of the club and the usernames of the members, and the app will fetch their rank from the LeetCode GraphQL API. The app features authentication, form input, leaderboard display, and leaderboard update. Supabase is used for handling the backend, providing authentication and database functionality. The project was built using Next.js, React, GraphQL, Apollo Client, Tailwind CSS, and TypeScript.

## Getting Started

To get started with the project, follow these steps:

Clone the repository: git clone https://github.com/your-username/nextjs-leaderboard-site.git

1. Install the dependencies: npm install

2. Set up the environment variables: Create a .env.local file in the root directory of the project and add the following variables:

```
NEXT_PUBLIC_LEETCODE_GRAPHQL_API_URL=https://leetcode.com/graphql
```

3. Start the development server: npm run dev

4. Open your browser and go to http://localhost:3000

## Features

-   Authentication: Users can log in to create and update their leaderboard page.
-   Form input: Users can enter the name of the club and the usernames of the members.
-   LeetCode GraphQL API integration: The app fetches the rank of each user from the LeetCode GraphQL API.
-   Leaderboard display: The app displays the rank of each user in a leaderboard format.
-   Leaderboard update: Users can update the leaderboard page with new data.

## Technologies

This project was built using the following technologies:

-   Next.js
-   React
-   GraphQL
-   Apollo Client
-   Tailwind CSS
-   Supabase

## Conclusion

That's it! I hope you find this project useful and informative. If you have any questions or feedback, feel free to create an issue or pull request. Thank you for checking out this project!
