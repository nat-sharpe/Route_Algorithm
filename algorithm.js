let graph = {
    atl: {
        sfo: 10,
        nyc: 3
    },
    bir: {
        atl: 3,
        sfo: 2
    },
    sfo: {
        bir: 2,
        atl: 10
    },
    orl: {
        atl: 3,
        bir: 2,
        nyc: 8
    },
    nyc: {
        bir: 2,
        atl: 10,
        sfo: 16
    }
};



let pathFunction = (start, end) => {
    let shortestPath;
    let destinations = Object.keys(graph.atl);
    console.log(destinations)
    if (destinations.includes(end)) {
        let currentPath = graph[start][end]
        shortestPath = currentPath;
    } 
    
    let cities = Object.keys(graph)
    cities.forEach(function(city) {
        let paths = Object.keys(graph[city]);
        console.log(paths)
        if (paths.includes(end)) {
            let currentTime = graph[city][end]
            console.log(currentTime)
            if (graph[city] !== start && paths.includes(start)) {
                currentTime += graph[city][start]
                console.log(currentTime)
                if (currentTime < shortestPath) {
                    shortestPath = currentTime;
                }
            }
        } else {
            paths.forEach(function(path)  {


            });
        }
    })
    console.log(shortestPath)
    return shortestPath
}

pathFunction('atl', 'sfo')

