# brunovaz — personal website

Personal site + blog, built with [Jekyll](https://jekyllrb.com/) and hosted on
GitHub Pages. Live at **https://2010b9.github.io**.

GitHub Pages rebuilds the site automatically every time you push to `main` —
you don't need Ruby installed to publish.

## Adding content

Everything is Markdown. Pick the right folder and drop in a file:

### ✍️ A new blog post
Create `_posts/YYYY-MM-DD-my-title.md`:

```markdown
---
title: My post title
summary: One or two sentences shown on the blog list page.
---

Your post content in **Markdown**. Headings (`##`), lists, links,
images and `code` all work.
```

The date and slug come from the filename. It appears on `/blog/` automatically,
newest first.

### 🔬 A new publication
Create a file in `_research/` (e.g. `_research/2025-01-01-my-paper.md`):

```markdown
---
title: "Paper title"
venue: "Journal / Conference"
date: 2025-01-01
link: "https://link-to-the-publication"   # NOTE: use `link`, not `url` (url is reserved by Jekyll)
---
The abstract goes here as the body — shown on the card.
```

### 💻 A new "random" item
Create a file in `_random/` (e.g. `_random/my-thing.md`):

```markdown
---
title: Thing title
date: 2025-01-01
kind: Talk            # small label on the card (optional)
dateline: "Jan 2025"  # custom date text on the card (optional)
summary: Shown on the /random/ list page.
---
Full write-up in Markdown — this gets its own page.
```

## Changing the look

The entire visual style is driven by **design tokens** at the top of
[`assets/css/main.css`](assets/css/main.css) — colours, fonts and radii live in
the `:root` blocks. Edit those to re-theme the whole site. Light and dark are
both defined there (`:root` = dark, `:root[data-theme="light"]` = light).

Structure lives in three places:
- `_includes/` — the shared header (nav), footer and `<head>`.
- `_layouts/` — page skeletons (`default`, `post`).
- `assets/js/site.js` — theme toggle, mobile menu, hero waveform.

## Preview locally (optional)

```bash
bundle install            # once
bundle exec jekyll serve  # then open http://localhost:4000
```
