---
path: "/compare-tissue"
date: "26 February 2019"
title: "Compare tumor vs normal within or across tissue types"
author: "Mary Goldman"
---

[[contentHero]]
| Use Xena to compare TCGA tumor samples to GTEx normals of matching tissue of origin to see if your gene or transcript is up- or down-regulated in one or more cancer types.

While TCGA is a good resource for tumor data, finding good normal data can be challenging. There are two main sources of normal expression in Xena that can be used in conjunction with tumor data from TCGA. The first is to use normal samples from TCGA itself. Normal samples from TCGA are typically quite limited in number but some cancer types may have enough for a robust statistical comparison. These samples are matched from the same individual though they may be affected by tumor microenvironment effects. The second way is to compare to GTEx, which has normal tissue from individuals who do not have cancer. There are typically many more samples for GTEx. These samples are NOT matched from the same individual but they will not affected by tumor microenvironment effects. You can use the study below for both of these ways.

To compare tumor vs normal, you will need to use the [TCGA TARGET GTEx study](https://xenabrowser.net/heatmap/?bookmark=f692a82f02d048d4ca17132461f0dfd7) and then filter down to just the samples you want to compare.

Check our [Help Page](https://ucsc-xena.gitbook.io/project/how-do-i/tumor-vs-normal) for more information

##Example

In this example we are looking to compare normal colon tissue from GTEx to colon adenocarcinoma tissue from TCGA.

![example](/images/compare-tissue.png)

All we have to do now is Click to Add Column to add our favorite gene, click 'gene expression' and click 'Done'. Clicking on the Chart in the upper right will make a box plot comparing average gene expression across our groups, complete with a p-value to test for signficance.

[Check it out!](https://xenabrowser.net/heatmap/?bookmark=5fcb1fc6d5894bd095b5994cc0ebd132)

[Walk-through of this example](https://ucsc-xena.gitbook.io/project/how-do-i/tumor-vs-normal)

[More Chart help](https://ucsc-xena.gitbook.io/project/overview-of-features/chart-view-box-plots-scatter-plots-and-bar-charts)
