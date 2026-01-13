module.exports = {
  stylesheet: ["output.css"],
  body_class: ["prose", "prose-sm", "max-w-none"],
  pdf_options: {
    format: "A5",
    margin: "20mm",
    printBackground: true,
    preferCSSPageSize: false,
    headerTemplate: `
      <style>
        section {
          margin: 0 auto;
          font-family: system-ui;
          font-size: 11px;
        }
      </style>
      <section>
      </section>
    `,
    footerTemplate: `
      <style>
        section {
          margin: 0 auto;
          font-family: system-ui;
          font-size: 11px;
        }
      </style>
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
