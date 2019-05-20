google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
        ['สาขา', 'งบประมาณ 2560', 'งบประมาณ 2561', 'งบประมาณ 2562'],
        ['สาขาสถาบันการเงิน', 75330.4, 82419.5, 91685.1],
        ['สาขาขนส่ง', 41378.4, 44621.7, 25406.9], 
        ['สาขาสังคมและเทคโนโลยี', 12280.3, 13576.2, 11571.2], 
        ['สาขาสาธารณูปการ', 5406.4, 6945.8, 6576.8], 
        ['สาขาเกษตรกรรม', 4178.8, 4620.8, 4339.5], 
        ['สาขาทรัพยากรธรรมชาติ', 1519.9, 1496, 1421.8], 
        ['สาขาพลังงาน', 0, 0, 0],
      ]);

      var options = {
        title: 'งบประมาณที่ได้รับ จำแนกตามสาขา',
        titleTextStyle: {
            fontSize: 20,
        },
        height: 400,
        width: 650,
        chartArea: {width: '60%',
                    height:'80%'
        },
        bar: {groupWidth: '80%'},
        hAxis: {
          title: 'งบประมาณ (ล้านบาท)',
          minValue: 0
        },
        vAxis: {
          title: 'สาขา'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('barchart_div'));
      chart.draw(data, options);
    }