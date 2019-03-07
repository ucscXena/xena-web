---
path: "/compare-tissue"
date: "7 March 2019"
title: "Compare tumor vs normal within or across tissue types"
author: "Mary Goldman"
---

[[contentHero]]
| Use Xena to compare TCGA tumor to GTEx normals of matching tissue of origin to see if your gene or transcript is up- or down-regulated in one or more cancer types.

While TCGA is a good resource for tumor data, finding normal tissue expression data for comparision can be challenging. There are two main sources of normal expression data in Xena. The first is normal samples from TCGA itself. These samples are called "solid tissue normals" that are taken from normal tissues near the tumor. Solid tissue normal samples from TCGA are typically limited in number but some cancer types may have enough for a robust statistical comparison. Their proximity to tumor may introduce signals of tumor microenvironment in its transcriptome profile. The second way is to compare to GTEx samples, which has expression data from normal tissue of individuals who do not have cancer. There are typically many more samples in GTEx then TCGA solid tissue normals, however, experimental sample processing are different from TCGA. 

You can use the study below for both of these ways. Data from the study is from the UCSC RNA-seq Compendium, where TCGA and GTEx samples are re-analyzed (re-aligned to hg38 genome and expressions are called using RSEM and Kallisto methods) by the same RNA-seq pipeline. Because all samples are processed using an uniform bioinformatic pipeline, batch effect due to different computational processing is eliminated.

To compare tumor vs normal, you will need to use the [TCGA TARGET GTEx study](https://xenabrowser.net/?bookmark=057c5fe67d5d79488b843d7a6e1a9840), and then filter down to just the samples you want to compare. There are four gene expression datasets in this study. Two are normalized using with-in sample methods. The 'RSEM norm_count' dataset is normalized by the upper quartile method, the 'RSEM expected_count (DESeq2 standardized)' dataset is by DESeq2 normalization. Therefore, these two gene expression datasets should be used.

##Example

In [this example](https://xenabrowser.net/?bookmark=2b707e21a992c2963e949b3e5241cc70) we are looking to compare MYC gene expression between normal colon tissue from GTEx to TCGA colon adenocarcinoma.

![example](/images/compare-tissue.png)

[Check it out!](https://xenabrowser.net/?bookmark=2b707e21a992c2963e949b3e5241cc70)

All we have to do now is Click to Add Column to add our favorite gene, click 'gene expression' and click 'Done'. Clicking on the Chart in the upper right will make a box plot comparing average gene expression across our groups, complete with a p-value to test for signficance.

![example](/images/compare-tissue-chart.png)

[Check it out!](https://xenabrowser.net/?bookmark=54a597bb0540b1a5fa8bff622d973e0c)

[Walk-through of this example](https://ucsc-xena.gitbook.io/project/how-do-i/tumor-vs-normal)

[More Chart help](https://ucsc-xena.gitbook.io/project/overview-of-features/chart-view-box-plots-scatter-plots-and-bar-charts)
