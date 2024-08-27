# Sign Up From Demo

## How to run locally

```
npm run dev
```

Visit http://localhost:5173 or follow link with correct port in the terminal you ran this command.

## Notes on Implementation Choices

### Components

For sake of simplicity, this react code all lived in the same component. If this grew into an ongoing project, one obvious part of that process would be to create separate components once they start becoming used more than a couple times. Components like inputs and buttons would move to a folder for ui components.

### Forms

If we started to have more complex forms, a form library would be helpful to support input validation and track dirty/touched states without lots of react state boilerplate.

### Styles

Any project can benefit from adding normalization styles so that default styles are consistent cross-browser, but it didn't make sense to add for this simple project.
It also didn't make sense to reach for other styling options, but there are many good options for this in long-term projects to help encapsulate styles to just the relevant components. Tailwind has grown on me recently and makes a good choice especially in new projects. A naming convention like BEM for selectors would be the minimum acceptable solution in a long-term project.

### TypeScript

Came by default as on of the vite starter templates. I don't think it's worth starting any major javascript project without typescript, though obviously not needed for a trivial example like this one.

### Other Thoughts

I have plenty of opinions on how projects scale from here and some best practices that follow. I'd love to talk more with you in interviews :)
