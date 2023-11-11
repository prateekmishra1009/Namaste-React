

// const heading= React.createElement("h1", {class:"abc"}, "Hello world from React")
       
//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
React.createElement("h1",{class:"abc"},"I am an h1 tag")),
React.createElement("h2",{class:"abc"},"I am an h2 tag")
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);