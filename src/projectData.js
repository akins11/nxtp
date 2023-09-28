export const analyticalApps = [
    {
        id: "1",
        title: "Market Segmentation",
        description: `The market segmentation application is designed to streamline the process of creating market or customer segmentations, leveraging multiple clustering algorithms to rapidly and accurately group data into distinct categories.\nThe application has other features such as, providing visual representations of the clusters using numeric and categorical summaries, allowing you gain a deeper understanding of the characteristics defining each group. You can also create custom segments based on the identified clusters and patterns, and download the segmented data for further analysis. Finally, the application offers options to summarize the created segments using graphs and tables, providing a concise overview of the characteristics within each group.`,
        image: '/a-app-img/market-segmentation-app.png',
        fullImage: '/a-app-img/market-segmentation-app-full.png',
        tools: ["R", "RShiny", "Bootstrap"],
        projectLink: "https://akinwandeayomide.shinyapps.io/segmentationAnalysisApp/",
        githubLink: 'https://github.com/akins11/Segmentation-analysis-app'
    },
    {
        id: "2",
        title: "Market Basket Analysis",
        description: `The MBA application is a tool designed to help businesses uncover patterns and trends in customer purchasing behavior. Bulit using the Plotly Dash framework, this application enables users to extract valuable insights from transactional data, identify popular product combinations, filter and visualize the data based on specific conditions.\nThe application provides several benefits such as, identify popular product combinations interactively and optimize cross-selling strategies, improve inventory management by identifying slow-moving items and optimizing stock levels, enhance customer satisfaction by offering personalized recommendation and promotions and finally streamline data analysis and reporting processes, saving time and resources.
        `,
        image: '/a-app-img/mba-app.png',
        fullImage: '/a-app-img/mba-app.png',
        tools: ["Python", "Dash", "Bootstrap"],
        projectLink: "https://market-basket-analysis.onrender.com/",
        githubLink: 'https://github.com/akins11/market-basket-analysis-web-app'
    },
    {
        id: "3",
        title: "RFM Analysis",
        description: `The RFM Analysis application is a tool designed to help businesses analyze customer behavior and segment customers based on three key metrics: recency, frequency, and monetary value. These metrics provides an overview of the purchase frequency, spend amount and time since the last purchase.\nThe application provides certain benefit such as: deeper understanding of customers’ behavior and preference, identify high-value customers and personalize retention efforts, improve inventory management and reduce waste, increase customer lifetime value and foster long-term loyalty.`,
        image: '/a-app-img/rfm-app.png',
        fullImage: '/a-app-img/rfm-app-full.png',
        tools: ["R", "RShiny", "Bootstrap"],
        projectLink: "https://akinwandeayomide.shinyapps.io/RFM-app/",
        githubLink: 'https://github.com/akins11/RFM-analysis-app'
    },
    {
        id: "4",
        title: "Conjoint Analysis",
        description: `The conjoint analysis application seeks to help in understanding customer preferences for specific product combinations and to provide insights into the potential success of product offering in the market.\nIt performs both choice based analysis and rating based analysis to determine the optimal product combination based on customer preference and trade-offs between attributes. `,
        image: '/a-app-img/conjoint-app.jpg',
        fullImage: '/a-app-img/conjoint-app-full.jpg',
        tools: ["R", "RShiny", "Formatic UI"],
        projectLink: "https://akinwandeayomide.shinyapps.io/Conjoint_Analysis_App/",
        githubLink: 'https://github.com/akins11'
    },
    {
        id: "5",
        title: "Product Classification",
        description: `The product classification application help to streamline inventory management processes by automatically categorizing products based on their value and performance. The application uses powerful analytic techniques such as ABC and XYZ analysis to identify top-selling , valuable and high potential growth items and provides actionable insights to optimize inventory management.\nThe application also provides an integration of both ABC and XYZ analysis for businesses looking to gain a more complete understanding of their product performance, allowing the business make informed decisions about inventory management and resource allocation.`,
        image: '/a-app-img/abc-xyz.png',
        fullImage: '/a-app-img/abc-xyz-full.png',
        tools: ["Python", "PyShiny", "Bootstrap"],
        projectLink: "https://github.com/akins11/product-classification",
        githubLink: 'https://github.com/akins11/product-classification'
    }
];


export const dashboard = [
    {
        id: "6",
        title: "Product Performance",
        description: `The performance dashboard delivers a comprehensive overview of product sales across diverse locations, demographics, time frames, and other relevant factors.\nThe dashboard empowers businesses to make data-driven decisions, optimizing their inventory management, marketing strategies, and overall operational excellence. Other features provided by the dashboard are time series analysis of the different products, and various interactive visualizations of which some of them have drill-down capabilities and aggregated reanalysis. `,
        image: '/dashboard-img/product-dashboard2.jpg',
        fullImage: '/dashboard-img/product-dashboard-full.jpg',
        tools: ["R", "RShiny", "Bootstrap"],
        projectLink: "https://akinwandeayomide.shinyapps.io/productDashboard/",
        githubLink: 'https://github.com/akins11/Product-Dashboard'
    },
    // {
    //     id: "7",
    //     title: "Hotel Management",
    //     description: `This project provides a comprehensive overview of the key performance indicators (KPIs) across multiple years and locations. With a focus on guests, reservations, and revenue, this dashboard offers valuable insights to inform strategic decision-making and drive continuous improvement within the organization.\nSome of the major features are multi-year comparison, hotel location based insights, guest metrics, revenue pattern and management.  Using interactive visualizations to explore the data in more detail and gain a deeper understanding of the organization performance. 
    //     `,
    //     image: '/dashboard-img/hotel-mgt.png',
    //     fullImage: '/dashboard-img/hotel-mgt-full.png',
    //     tools: ["R", "Flexdashboard", "Bootstrap"],
    //     projectLink: "https://akins11.github.io/Hotel-management-dashboard/",
    //     githubLink: 'https://github.com/akins11/Hotel-management-dashboard'
    // },
    {
        id: "7",
        title: "Inventory Management",
        description: `The dashboard provides a comprehensive analysis and summaries of the overall SKU performance on fulfillment, quality inspection, revenue among others. It offers a centralized hub for inventory management, allowing users to monitor and track inventory levels, identify slow-moving items, and identify item quality. Users can also view detailed demand patterns, revenue generation, and inventory turnover, enabling data-driven decision-making to maximize profits and minimize waste.`,
        image: '/dashboard-img/inv-dash.png',
        fullImage: '/dashboard-img/inv-dash-full.png',
        tools: ["R", "RShiny", "Bootstrap", "SCSS"],
        projectLink: "https://akins.shinyapps.io/Inventory-dashboard/",
        githubLink: 'https://github.com/akins11'
    },
    {
        id: "8",
        title: "Inventory",
        description: `This dashboard offers a wide range of key performance indicators (KPIs) and advanced analytics to help in making data-driven decisions.\nThe dashboard provides a clear and concise overview of your inventory levels, allowing you to monitor and track-stock quantities. With the various insights products that are slow-movers or fast-movers can be identified, optimizing the restocking and reordering processes, and avoiding unnecessary holding costs.`,
        image: '/dashboard-img/pb-inventory-dashboard.png',
        fullImage: '/dashboard-img/pb-inventory-dashboard-full.png',
        tools: ["Power BI", "Excel"],
        projectLink: "https://github.com/akins11",
        githubLink: 'https://github.com/akins11'
    },
    {
        id: "9",
        title: "Product Sales",
        description: `By leveraging the capabilities of Power Bi, this dashboard offers a concise and insightful view of sales data, enabling business leaders to make data-driven decisions and optimize their sales strategies.\nIt offers several features such as sales performance overview, regional sales summaries, product category insights, among others and offers various benefits including enhance decision making improve sales forecasting, optimized sales strategies and better customer understanding.`,
        image: '/dashboard-img/sales-analysis.png',
        fullImage: '/dashboard-img/sales-analysis-full.png',
        tools: ["Power BI", "Excel"],
        projectLink: "https://github.com/akins11/Sales-Report",
        githubLink: 'https://github.com/akins11/Sales-Report'
    },
];


export const ml = [
    {
        id: "10",
        title: "PM2.5 Sensor offset Prediction",
        description: `Air pollution is a significant environmental concern, and monitoring particulate matter (PM) concentrations is crucial for maintaining public health and safety. PM2.5 sensors are widely used to measure PM concentrations;  however, these sensors can become faulty due to various reasons, leading to inaccurate readings. Detecting faulty sensors is challenging, and traditional methods are often time-consuming and labor-intensive. Machine learning algorithms offer a robust solution to address this problem.\nThe primary objective of this project is to develop a machine learning model capable of predicting sensor offset faults accurately.  The model will utilize historical data. various operations such data cleaning, feature engineering, model development, model evaluation, cross-validation among other were performed to improve the model.`,
        image: '/ml-img/pm25-chart.png',
        fullImage: '/ml-img/pm25-prediction-full.png',
        tools: ["Python", "Pandas", "Scikit-Learn", "Quarto"],
        projectLink: "https://akins11.github.io/PM2.5-Sensor-Offset-Prediction/",
        githubLink: 'https://github.com/akins11/PM2.5-Sensor-Offset-Prediction'
    },
    {
        id: "11",
        title: "Web Store Sales Prediction",
        description: `This Machine learning project seeks to accurately predict sales for an online fashion store based on various features such as Days Since last Purchase, number of Visits, days between purchases, sales per visit and number of unique items purchased.\nThe primary objective of this project is to develop a machine learning model capable of predicting sales accurately.  The model will utilize historical sales data. Additionally various operations such data cleaning, feature engineering, model development, model evaluation, validation among other were performed to improve the model performance when predicting future potential sales.`,
        image: '/ml-img/web-sales-prediction.png',
        fullImage: '/ml-img/web-sales-prediction-full.png',
        tools: ["R", "Tidymodel", "Quarto"],
        projectLink: "https://akins11.github.io/web-sales-prediction/",
        githubLink: 'https://github.com/akins11/web-sales-prediction'
    },
];


export const eda = [
    {
        id: "12",
        title: "A/B Testing",
        description: `The primary objective was to assess the impact of a new advertising strategy on the conversion rate for a company's sneakers within it's community platforms. The performance of the newly introduced advertisement for the product was compared  with the pre-existing Public Service Announcement (PSA) of the same product. The core question was whether the advertisement had a measurable effect on increasing the number of purchases compared to the PSA.\nThis project measured and analyzed a range of vital metrics, including conversion rates, and user engagement within the community platforms. To substantiate the findings, statistical tests was applied. The results allowed for the confirmation of the alternative hypothesis, indicating that the new advertisement outperformed the PSA in driving conversions.        `,
        image: '/eda-img/ab-testing.png',
        fullImage: '/eda-img/ab-testing-full.png',
        tools: ["python", "pandas", "Plotly", "Quarto"],
        projectLink: "https://akins11.github.io/a-b-testing/",
        githubLink: 'https://github.com/akins11/a-b-testing'
    },
    {
        id: "13",
        title: "Petroleum Product Prices",
        description: `This Project is a thorough examination of the price fluctuations of crucial petroleum products - Premium Motor Spirit (PMS), Diesel (AGO), Liquified Petroleum Gas (LPG), and Kerosene - within the Nigerian market. This analysis encompasses the timeframe from January 2020 to June 2023, focusing on the period before and after the removal of subsidies on these products.\nOne key dimension of this project involves tracking the changes in prices on a year-on-year (YoY) and month-on-month (MoM) basis, offering insights into the evolving pricing patterns over this duration. Geographically, the analysis extends to all Nigerian states and the Federal Capital Territory (Abuja), allowing for a detailed exploration of price variations across different regions. It's within this scope that the project also facilitates comparisons among states and regions, revealing disparities and trends in petroleum product prices. To convey these insights effectively, the project employs data visualization techniques such as charts, graphs, and interactive tables.`,
        image: '/eda-img/ppp.png',
        fullImage: '/eda-img/ppp-full.png',
        tools: ["R", "Plotly", "Reactable", "Quarto"],
        projectLink: "https://akins11.github.io/petroleum-product-prices/",
        githubLink: 'https://github.com/akins11/petroleum-product-prices'
    },
    {
        id: "14",
        title: "Regional Sales Exploratory Analysis",
        description: `The analysis aims to provide insights into the top-performing products, most effective sales channels and highest-grossing locations thereby helping inform strategic decisions for optimizing sales operations.\nThe analysis involves understanding the various distribution of sales for several products, customer preferred method of purchase and sales pattern by location. `,
        image: '/eda-img/sql-eda.png',
        fullImage: '/eda-img/sql-eda-full.png',
        tools: ["SQL", "MySQL", "Quarto"],
        projectLink: "https://akins11.github.io/Exploratory-analysis-using-SQL/",
        githubLink: 'https://github.com/akins11/Exploratory-analysis-using-SQL'
    }
];
