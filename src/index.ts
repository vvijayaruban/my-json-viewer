import { promises as fs, PathLike } from "fs";

// main async / await
const main = async () => {
    let textFunc = (s : string) => console.log(s);
    const filePath = "C:/src/Personal/business/utility/my-json-viewer/src/test.json";        
    // const filePath = "C:/src/Personal/business/utility/months_partitionType_ALL.json";    
    const outputFile = "C:/src/Personal/business/utility/Units.csv";
    const data = await fs.readFile(filePath, "utf-8");
    let fileFunc = async (path :PathLike, data :string) => await fs.writeFile(path, data);
    const usageData = JSON.parse(data);
    var months = usageData.months;
    var monthNames = Object.keys(months);
    var lines: string[] = [];
    textFunc = s => lines.push(s);
    textFunc(`Month, Total`);
    for (let i = 0; i < monthNames.length; i++) {
        const monthName = monthNames[i];
        const monthData = months[monthName];
        const [month, year] = monthName.split('-'); 
        const reversedDate = `${year}-${month}-01`; 
        textFunc(`${reversedDate},${monthData.total}`);
        // textFunc(`${reversedDate},${monthData.partitions.ALL.Units}`);
    }

    await fileFunc(outputFile, lines.join('\n'));
    console.log("Done");
};

// run main
main();