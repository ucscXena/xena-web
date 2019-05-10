---
path: "/create-subgroups"
date: "26 February 2019"
title: "Create subgroups based any other genomic data"
author: "Mary Goldman"
---

[[contentHero]]
| Xena's powerful text-based search allows users to dynamically highlight, filter, and create subgroups of samples. 

Xena's search bar at the top of the Visual Spreadsheet allows you to find samples and then either filter so only those samples are in view, or create subgroups. The search bar allows you can search the data on the screen similar to the ‘find’ functionality in Microsoft Word. Samples are matched and highlighted in real-time as you type. 

Subgroup columns behave like any other column and can be used in a Kaplan-Meier analysis, box plot, or other statistical analyses to compare the two groups of samples. This is a powerful way to dynamically construct two sub-populations based on any genomic data for comparison and analysis.

##Example: MET splice variants in TCGA lung adenocarcinoma
![figure](/images/subgroupslice.png)
[[caption]]
| Xena's text-based find, highlight, filter, and subgroup samples functionality.
(**A**) Similar to the ‘find in document’ feature in Microsoft Word, users can search all data on the screen. In this figure, the Xena Browser searched all columns for the user's search term 'splice' and highlighted samples with a 'splice' mutation with black tick marks (highlighted by the black box).  More complex search terms can include 'AND', 'OR', '>', '<', '=', and more. Columns from left to right are MET gene expression, MET exon expression and MET somatic mutation status.  CHECK IT OUT: https://xenabrowser.net/?bookmark=c5873fb094ef714e44e65df217e93071

(**B**) The user generated a subgroup column based on the search term 'splice'.Samples that matched the query of 'splice' were assigned a value of "true" and those that do not "false". The researcher has zoomed to a few samples at the top for a more detailed view. Samples that have the splice site mutation (orange tick marks, column E) have lower expression of that exon in MET (column D). The splice mutation causes exon 14 skipping and results in the activation of MET (Kong-Beltran 2006, The Cancer Genome Atlas Research Network 2014). CHECK IT OUT: https://xenabrowser.net/?bookmark=748c42b0b49552004da53873950aad62 

(**C**) The subgroup column can also be used to compare exon expression. Subgroup labels are customized to "MET splice variant" and "MET splice wt" through display setting adjustment. CHECK IT OUT: https://xenabrowser.net/?bookmark=886a9d503a7fb5f14144cb690eefa945

[[xenaButtonPeach]]
| [Learn More](https://ucsc-xena.gitbook.io/project/how-do-i/how-do-i-make-subgroups)
