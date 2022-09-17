# Introduction

The goal of this repo is to set up a react app with typescript support, by removing the middleman create-react-app which abstracts a lot of details from a beginner like me. I'm very interested in how things are done behind the scenes and one day how I could build my own tools. So I spend considerable amount of time getting to know these tools by doing hands on tutorial.

For someone who is already experience with webpack and babel setup process, they can just ignore everything here and type:

```script
npx create-react-app my-app --template typescript
```

If you are still reading then I'm guessing that you want to learn how to do everthing from scratch. So please follow along the guide.

## Frontend System Design

One of the fundamental problems of learning how to design a system (frontend/backend) is that we often look for a list of tasks one has to have knowledge about to become a better system designer. But we forget that even if one learns all those things, they can't apply them in production environment because often they don't apply to our use case or it just makes the system too complex. So I have been asking myself what one really needs to do to become an expert and the answer always comes back to the basics. Master the basics and rest of them will follow as you work and gain experience. Because as you gain experience you begun to as questions, which you didn't have at beginning and you look for answers. So the right way seems to me is that don't ask question at the beginning of your journey (at least not those questions that you found in a awesome github list). So instead of following a large good to know list, we will go step by step only to implement what we need to set up a single page react application.

## Table Of Contents

- [Overview](docs/overview.md)
- [React Project Configuration](docs/react-config.md)
- [React Project Structure](docs/project-structure.md)
- [React Component Architecture](docs/component-architecture.md)
- [React Component Lifecycle](docs/state-lifecycle.md)
- [React App Layout](docs/app-shell.md)
- [React App Navigation](docs/app-navigation.md)
- [Authentication Layer](docs/auth.md)
- [Internationalization](docs/i18n.md)
- [API Layer](docs/api-layer.md)
- [Testing](docs/testing.md)

## Reference

[Bulletproof React](https://github.com/alan2207/bulletproof-react)
