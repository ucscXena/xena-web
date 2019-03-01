---
path: "/create-subgroups"
date: "26 February 2019"
title: "Create subgroups based on mutation status or any other genomic data"
author: "Mary Goldman"
---

[[contentHero]]
| Xena's powerful text-based search allows users to dynamically highlight, filter, and create subgroups of samples. Researchers can search the data on the screen similar to the ‘find’ functionality in Microsoft Word. Samples are matched and highlighted in real-time as the user types. Researchers can then filter, focusing the visualization to their samples of interest, or dynamically build a new two-group column, where samples are marked as 'true' or 'false', depending if they meet the researcher's search criteria. The new two-group column behaves like any other column and can be used in a Kaplan-Meier analysis, box plot, or other statistical analyses to compare the two groups of samples. This is a powerful way to dynamically construct two sub-populations based on any genomic data for comparison and analysis.

##Example
![figure](/images/subgroupslice.png)
Xena Browser text-based find, highlight, filter, and subgroup samples functionality. (A) Finding and highlighting samples in TCGA lung adenocarcinoma cohort that have a splice mutation in the gene MET. Similar to the ‘find in document’ feature in Microsoft Word, users can search all data on the screen. In this figure, the Xena Browser searched all columns for the user's search term 'splice' and highlighted samples with a 'splice' mutation with black tick marks (highlighted by the black box).  More complex search terms can include 'AND', 'OR', '>', '<', '=', and more. Users can dynamically filter, zoom, and create subgroups based on the search results. Columns from left to right are MET gene expression, MET exon expression and MET somatic mutation status.  https://xenabrowser.net/heatmap/?bookmark=c5873fb094ef714e44e65df217e93071
(B) After creating a new column with two subgroups. Columns are same as (a) with the user-generated column inserted on the left. Samples that matched the query of 'splice' were assigned a value of "true" and those that do not "false". The researcher has zoomed to a few samples at the top for a more detailed view. The figure shows that samples that have the splice site mutation (orange tick marks, column E) have lower expression of MET’s exon (column D). The splice mutation causes exon 14 skipping and results in the activation of MET (Kong-Beltran 2006, The Cancer Genome Atlas Research Network 2014). https://xenabrowser.net/heatmap/?bookmark=748c42b0b49552004da53873950aad62 (C) Compare exon expression across the dynamically creaeted two subgroups. Subgroup labels are customized to "true (splice variant)" and " false (splicing wt)" through display setting adjustment.

##Advanced options
Once the subgroup column is created, users can further customize group labels from "true" or "false" to for exmaple "wild type" or "EGFR mutant" by adjusting the column display settings.

There is also an advanced option to create multiple subgroups (such as three, four, etc).
