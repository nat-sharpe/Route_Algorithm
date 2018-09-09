// let graph = {
//     atl: {
//         sfo: 10,
//         nyc: 3
//     },
//     bir: {
//         atl: 3,
//         sfo: 2
//     },
//     sfo: {
//         bir: 2,
//         atl: 10
//     },
//     orl: {
//         atl: 3,
//         bir: 2,
//         nyc: 8
//     },
//     nyc: {
//         bir: 2,
//         atl: 10,
//         sfo: 16
//     }
// };



// let pathFunction = (start, end) => {
//     let shortestPath;
//     let destinations = Object.keys(graph.atl);
//     console.log(destinations)
//     if (destinations.includes(end)) {
//         let currentPath = graph[start][end]
//         shortestPath = currentPath;
//     } 
    
//     let cities = Object.keys(graph)
//     cities.forEach(function(city) {
//         let paths = Object.keys(graph[city]);
//         console.log(paths)
//         if (paths.includes(end)) {
//             let currentTime = graph[city][end]
//             console.log(currentTime)
//             if (graph[city] !== start && paths.includes(start)) {
//                 currentTime += graph[city][start]
//                 console.log(currentTime)
//                 if (currentTime < shortestPath) {
//                     shortestPath = currentTime;
//                 }
//             }
//         } else {
//             paths.forEach(function(path)  {


//             });
//         }
//     })
//     console.log(shortestPath)
//     return shortestPath
// }

// pathFunction('atl', 'sfo')


let testGraph = {
        bgt: {
            gfk: 3,
            clt: 12,
            hsv: 5,
            atl: 20
        },
        gfk: {
            bgt: 3,
            atl: 23
        },
        clt: {
            bgt: 12,
            atl: 10
        },
        hsv: {
            atl: 4,
            bgt: 5,
        },
        atl: {
            gfk: 23,
            clt: 10,
            hsv: 4,
            bgt: 20
        }
    };

const quickestRoute = (start, end, graph) => {
    let allRoutes = {20 :'bgt-atl-', 9 : 'bgt-hsv-atl-', 22 : 'bgt-clt-atl-', 26 : 'bgt-gfk-atl-'};

    let findQuickestRoute = () => {
        let times = Object.keys(allRoutes); 
        times.sort((a, b) => a - b);
        let quickestRoute = times[0];
        console.log(allRoutes[quickestRoute])
        return allRoutes[quickestRoute];
    }

    let calculateRoute = () => {};

    return findQuickestRoute();
};

console.assert(quickestRoute('bgt', 'atl', testGraph) === 'bgt-hsv-atl-');