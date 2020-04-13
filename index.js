reports = [
    {Report1:[{id : "one", value:1,class : "checkinput",height: "130"},{id :"two" ,value :2,class : "checkinput",height: "130"}, {id :"three",value :3,class : "checkinput",height: "130"}, {id:"four",value:4,class : "checkinput",height: "130"}]},
    {Report2:[{id:"five",value :5,class : "checkinput",height: "130"},{id:"six",value:6,class : "checkinput",height: "130"}, {id: "seven",value:7,class : "checkinput",height: "130"}, {id:"eight",value:8,class : "checkinput",height: "130"}]},
    {Report3:[{id:"nine",value:9,class : "checkinput",height: "130"}, {id: "ten",value:10,class : "checkinput",height: "130"}, {id:"eleven",value:11,class : "checkinput",height: "130"}, {id:"twelve",value:12,class : "checkinput",height: "130"}]},
    {Report4:[{id:"thirteen",value:13,class : "checkinput",height: "130"}, {id:"fourteen",value:14,class : "checkinput",height: "130"}, {id:"fifteen",value:"15",class : "checkinput",height: "130"}, {id:"sixteen",value:"16",class : "checkinput",height: "130"}]}
];

$(document).ready(function(){
    var main = document.getElementById("acordian");

   reports.map(graphs=>

    {
        
    
      let collapse = document.createElement("h5")
      collapse.className ="collapse-button";
      
      collapse.setAttribute( "data-toggle","collapse" )
      collapse.setAttribute( "data-target","#collapse"+Object.keys(graphs)[0] )
      let reportText = document.createTextNode(Object.keys(graphs)[0])
     
      let card = document.createElement("div")
      card.className = "collapse"
      card.id = "collapse"+Object.keys(graphs)[0]
      collapse.appendChild(reportText)
      main.appendChild(collapse)
      main.appendChild(card)

        Object.values(graphs)[0].map(graph =>

            {
                
            let check = document.createElement("input")
            check.className = graph.class
            check.id = graph.id
            check.type = "checkbox"
            check.name = "check"
            check.value = graph.value
            check.addEventListener("change", checkfunc);
            let label = document.createElement("label")
            let text = document.createTextNode(graph.value)
            let breaktag = document.createElement("br")
            label.appendChild(text)
            card.appendChild(check)
            card.appendChild(label)
            card.appendChild(breaktag)
        
        })
  });

orders = []
function checkfunc(e){


     // ---------------if Checkbox is checked add the chart-----------------------------

    if(e.target.checked === true)
    {

   
    let main = document.getElementById('sortable')
    let colDiv = document.createElement("div")
    colDiv.className = "col-md-3 float-left"+" chart"
    colDiv.id = "chart"+e.target.id

    let slidediv = document.createElement("div")
    slidediv.className = "slide"
    slidediv.id = "slide-chart"+e.target.id
    colDiv.style.height = 130+"px"
    // colDiv.style.width = o.width+"px"
    slidediv.style.height = (130-30)+"px"
    // slidediv.style.width = (o.width-30)+"px"
    let text = document.createTextNode(e.target.value)
    let htag = document.createElement('h1')
    htag.appendChild(text)
    slidediv.appendChild(htag)
    colDiv.appendChild(slidediv)
    main.appendChild(colDiv)
    applyresize($(".chart"));
    }

      // --------------------Else remove the chart-----------------------------------------
  
    else{

        let item = document.getElementById("chart"+e.target.id)
        item.parentNode.removeChild(item)
    }

    }

  





})
 function applyresize(element){
element.resizable({
    start:function(event,ui){
      
    
    },
    
    resize:function(event,ui){
        var a = ui.originalElement.outerWidth()-ui.originalElement.width()
        var b = ui.size.width+a
        var unit = $("#main-column").width()
        var divv = parseInt((b/unit)*12,);
        var newvalue = "col-md-"+divv;
        var old = ui.originalElement.context.className
        ui.element.context.className = old.replace(old.split(" ")[0],newvalue)
        // console.log(newvalue)
        


    },
    stop:function(event,ui){
        var oldheight = parseInt($("#slide-"+ui.element.context.id).css("height").replace("px", ""))
        var hofparent = parseInt(ui.originalSize.height)
        var newhofparent = parseInt(ui.size.height)
        var absolute = Math.ceil(newhofparent/130)
        
        var finalnewheight = absolute*130 +(absolute-1)*10*2
        // console.log("adsfdf",hofparent,newhofparent,absolute,finalnewheight)
        var newheight = finalnewheight - 30
        // console.log(newheight,oldheight,hofparent,newhofparent )
        console.log(ui.element.context.id)
         $("#slide-"+ui.element.context.id).css("height", newheight+"px")
         $("#"+ui.element.context.id).css("height", finalnewheight+"px")

    }

})};
