---
path: "/kaplan-survival-analysis"
date: "26 February 2019"
title: "Kaplan-Meier survival analysis on any data"
author: "Mary Goldman"
---

[[contentHero]]
| Wondering if a gene (or probe, or clinical value, etc) affects survival? We have survival analyses complete with p-values, custom time cutoff, custom time variable cutoff, and multiple survival endpoints.

Whether you're looking at DNA, RNA, methylation or protein, we can help you determine if a gene affects survival. Stratify your samples by any genomic or phenotypic data (e.g. expression, copy number, subtype, age, etc) and determine if there is a statistically significant survival difference.

Start with our [walk through](https://ucsc-xena.gitbook.io/project/overview-of-features/kaplan-meier-plots), or jump in by going to the [Xena Browser](https://xenabrowser.net) and using the wizard to add the data you would like to stratify your samples into the Visual Spreadsheet. Once your data is on the screen, click the three-dot caret menu at the top of the column and choose 'Kaplan Meier Plot'.

##Example
![example](/images/kaplan-survival.png)

**Kaplan-Meier analysis of overall survival for TCGA lower grade glioma histological subtypes.** Black boxes in the figure highlight, from top to bottom, a button to generate a PDF, the statistical analysis results, a dropdown menu to select different survival endpoints such as overall or recurrence-free survival, and a textbox to enter a custom survival time cutoff (currently set to 3,650 days, or 10 years). Patients characterized as having the astrocytoma histological subtype have significantly worse 10-year overall survival compared to the oligodendroglioma and oligoastrocytoma subtypes (p < 0.05).

View this example live in the [Xena Browser](https://xenabrowser.net/heatmap/?bookmark=2f9d783982879594dd0f52564058372d).
