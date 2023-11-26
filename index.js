
      
        var options = {
            series: [{
            name: "STOCK",
            data:["200","300","120","70","400"]
          }],
            chart: {
            type: 'area',
            height: 265,
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          
          title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left'
          },
          subtitle: {
            text: 'Price Movements',
            align: 'left'
          },
          labels: ["jan","feb","march","april","may"],
        //   xaxis: {
        //     type: 'datetime',
        //   },
          yaxis: {
            opposite: true
          },
          legend: {
            horizontalAlign: 'left'
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#recentchart"), options);
          chart.render();

        //   _________toggle bar 
        menuBar=document.querySelector(".menu_bar")
        asideBar=document.querySelector(".left")
        closeBar=document.querySelector(".close")

        menuBar.addEventListener('click',function(){
            asideBar.classList.remove("aside")
        })
        closeBar.addEventListener('click',function(){
            asideBar.classList.add("aside")
        })
        