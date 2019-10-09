# Infinite Scroll

For this assignment you will be using `fetch` to make an repeatedly make
API requests to the backend and update your DOM with new content.

Before we actually implement infinite scroll based on the user hitting
the bottom of the page, we will want to make sure the request->response cycle is setup correctly and test it a button. Once we are repeatedly
getting new content through our button, we will remove it and trigger
the request from an `IntersectionObserver`.

The general flow of the page will go like this:

- Some event causes the page to request more content. First this will
  be a click event from a button. We will replace this button with an
  `IntersectionObserver`.
- `fetch` to `api/students` with the appropriate `offset` value. The
  `offset` is a way to communicate to the backend how items we've seen
  so far. That way it can keep giving us new content rather than repeating.
- The server will respond with an object shaped like
  `{ students: ['name1', 'name2', 'name3']}`. Use this response to populate
  the `#students` `ul` with a new `li` for each name. `insertAdjacentHTML`
  will be helpful.

## Important Documentation

- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
- [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Running the server

This project doesn't require a database, so you don't have to do any interesting setup. Just run the server!

python3 manage.py runserver
