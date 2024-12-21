import { promises as fs } from "fs";

// main async / await
const main = async () => {

    const filePath = "C:/src/business/utility/my-json-viewer/src/test.json";        
    const data = await fs.readFile(filePath, "utf-8");
    const usageData = JSON.parse(data);
    var months = usageData.months;
    var monthNames = Object.keys(months);
    console.log("Month, Total");
    for (let i = 0; i < monthNames.length; i++) {
        const monthName = monthNames[i];
        const monthData = months[monthName];
        const [month, year] = monthName.split('-'); 
        const reversedDate = `${year}-${month}-01`; 
        console.log(`"${reversedDate}","${monthData.total}"`);
    }
};

// run main
// main();
(async () => { 
    await main();
})();