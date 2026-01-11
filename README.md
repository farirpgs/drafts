# Drafts

Draft documents of RP

## Setup

This project uses [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf) with [Tailwind CSS Typography](https://tailwindcss.com/docs/typography-plugin) to generate beautifully styled PDFs from Markdown files.

### Installation

```bash
npm install
```

## Usage

### Generate PDFs

To generate PDFs from all Markdown files:

```bash
npm run pdf
```

This will:
1. Build the Tailwind CSS styles with the Typography plugin
2. Clean existing PDF files
3. Generate new PDFs with enhanced typography

### Individual Scripts

- `npm run build:css` - Build Tailwind CSS styles
- `npm run clean:pdf` - Remove all generated PDFs
- `npm run pdf-debug` - Output HTML instead of PDF for debugging styles (usage: `npm run pdf-debug -- path/to/file.md`)

## Configuration

### Tailwind CSS

The Tailwind configuration is in `input.css` with the Typography plugin enabled:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

### md-to-pdf

The PDF generation is configured in `md-to-pdf.config.js` with:
- Tailwind Typography prose classes for beautiful typography
- A4 format with 25mm margins
- Print background enabled for styled elements

You can customize the configuration by editing `md-to-pdf.config.js`.

### Custom Fonts

Add front-matter at the top of any markdown file to use custom Google Fonts:

```yaml
---
stylesheet:
  - https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap
css: |-
  .prose { font-family: 'Crimson Pro', serif; }
---
```

Browse fonts at [Google Fonts](https://fonts.google.com/).

## Directory Structure

- `active/` - Active draft documents
- `archives/` - Archived documents
- `chats/` - Conversation logs and notes
- `input.css` - Tailwind CSS source file
- `output.css` - Generated CSS output (built by Tailwind)

