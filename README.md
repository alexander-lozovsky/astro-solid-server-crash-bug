# Astro+Solid bug with the server being crashed

There's a case when Astro doesn't handle errors properly, which causes dev and prod servers crashing: error is thrown by Astro component, that is passed as a slot into Solid component, which is rendered inside Astro component with async call in the frontmatter.

```bash
# node v18.14.1 npm v9.3.1
npm ci
npm run dev
```

- Open http://localhost:3000/
- Observe the dev server being crashed

Same happens with the prod build:

```bash
# node v18.14.1 npm v9.3.1
npm run build
npm start
```

- Open http://localhost:8080/
- Observe custom express server being crashed
