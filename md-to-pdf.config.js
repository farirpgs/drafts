module.exports = {
  stylesheet: ["output.css"],
  body_class: ["prose", "prose-sm", "max-w-none"],
  pdf_options: {
    format: "A5",
    margin: "20mm",
    printBackground: true,
    preferCSSPageSize: false,
    footerTemplate: `
      <section>
        <div>
          Page <span class="pageNumber"></span>
          of <span class="totalPages"></span>
        </div>
      </section>`,
  },
  marked_options: {
    headerIds: true,
    gfm: true,
    breaks: false,
  },
};
