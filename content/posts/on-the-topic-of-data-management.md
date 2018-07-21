---
title: On the Topic of Data Management
date: 2018-07-21
tags: ['data']
---

I’ve worked in the area of data management for my entire career. I’ve become familiar with many of the business problems that tend to be data intensive, and the approaches people take to solve them. I use the term data management to refer to a mashup of data modeling, data warehousing, and data engineering.

The sophistication of data management runs along a spectrum. Excel lives at one end, and the Apache ecosystem lives at the other. In the middle lies a range of packaged products and specialized applications.

The subject is composed of many diverse information silos, because until recently most practitioners were vendor locked into specific tools and workflows. Take the example of debugging a workflow. Suppose you work primarily with SAS Management Studio as your data manipulation tool and are trying to debug a workflow. You probably already know the entire list of sources where you can seek help. If the short list does not contain the answer you are looking for, then you call support (if your company pays for it). This situation gets repeated for each vendor product, with silos of information accumulating in their respective knowledge bases.

Contrast this with application software development, which broke out of most vendor silos a long time ago. In this world, most questions can be answered by the nearest query to Stack Overflow. The community quickly converges on best practices that transcend any one platform or programming language. This is largely driven by the fact that open source encourages knowledge sharing. A rising tide raises all ships.

The two biggest enabling changes to the world of data were the open sourcing of HDFS, and the open sourcing of Spark. Although these technologies were originally built for distributed computing, they have matured to the point where many companies are now making the decision to use them as wholesale replacements to traditional GUI-based ETL systems, rather than renew a $100k software license. The software to store data and run efficient ETL code is now free.

Price isn’t the only reason to switch though, there are many types of data-related activities that are simply easier to manage in code. Data transformations defined in code allow for solving problems with first-principles thinking. Contrast this with a click and point environment, where many assumptions have been made on the users behalf that might no longer be relevant. Once a feature has been added in a  GUI, removing it is much more difficult than if it were just another module in a standard library, and so many of these tools have a vast array of options that never get used.

Traditionally, the subdomains of data management like data warehousing and data engineering have been something of a black sheep in the technology departments of most organizations. The stigma is partly due to the tools historically used in data warehousing, and their distinct difference from the tools used to build software. But now that the differences are dissolving, the world of data management will start to look very different at a lot of companies in the coming years. For some, it already does. 
 
