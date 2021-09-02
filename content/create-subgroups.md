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

[[xenaButtonPeach]]
| [Learn More](https://ucsc-xena.gitbook.io/project/how-do-i/how-do-i-make-subgroups)

[[xenaButtonYellow]]
| [Launch Xena](https://xenabrowser.net/)

##Example: MET splice variants in TCGA lung adenocarcinoma
![visual spreadsheet showing EGFR abberations in TCGA LUAD](/images/subgroups-EGFR-LUAD.png)
![Box plot comparing samples with and without EGFR abberations in TCGA LUAD](/images/subgroups-EGFR-LUAD-boxplot.png)
[[caption]]
| Xena's subgroup samples functionality.
In the first image, a user has made two subgroups: samples that have a missense or in-frame insertion/deletion in EGFR or have a copy number amplification of EGFR and samples that do not have either of these. They have named these subgroups 'EGFR Aberrations' and 'No EGFR Aberrations'.

In the second image, we compare gene expression between the two subgroups. We see that those samples with aberrations tend to have higher expression that those without aberrations.

[[xenaButtonPeach]]
| [Check out the first view](https://xenabrowser.net/?bookmark=38be4e92f265543aa88f058bd618945d)

[[xenaButtonYellow]]
| [Check out the second view](https://xenabrowser.net/?bookmark=dc05bbdcf590f7df4506fbcd721f60b5)

