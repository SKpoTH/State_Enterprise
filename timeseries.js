google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'สาขาสถาบันการเงิน');
      data.addColumn('number', 'สาขาขนส้ง')
      data.addColumn('number', 'สาขาสังคมและเทคโนโลยี')
      data.addColumn('number', 'สาขาสาธารณูปการ')
      data.addColumn('number', 'สาขาการเกษตร')
      data.addColumn('number', 'สาขาทรัพยากรธรรมชาติ')
      data.addColumn('number', 'สาขาพลังงาน')

      data.addRows([
        [2551, 10923.4, 22021.1, 8227, 12958.32, 2436, 799.9, 0],
        [2552, 10013.5, 27955.8, 8651.1, 10582.8, 1470.2, 1120.3, 6768],
        [2553, 5623.1, 22892.2, 8397.4, 4699.1, 6256.5, 969.9, 70.9],	
        [2554, 53221, 28717, 10596.5, 6983.1, 5083.4, 1312.9, 4587.6],
        [2555, 48831.7, 31123, 9299.3, 9138.9, 5631.5, 1251.1, 23832.4],	
        [2556, 63198.8, 35555.4, 10906.3, 6333.1, 8823.5, 1339.4, 2885.1],	
        [2557, 85768.9, 32437.7, 12128.4, 6319.9, 11792, 1385.4, 0],
        [2558, 87402.7, 33883.5, 12390.4, 4360, 7988.4, 1410.2, 134.1],
        [2559, 70417.9, 51792, 12147.3, 3586, 5248.7, 1342.5, 0],	
        [2560, 75330.4, 41378.4, 12280.3, 5406.4, 4178.8, 1519.9, 0],
        [2561, 82419.5, 44621.7, 13576.2, 6945.8, 4620.8, 1496, 0],
        [2562, 91685.1, 25406.9, 11571.2, 6576.8, 4339.5, 1421.8, 0]
      ]);

      var options = {
        title: 'งบประมาณแบ่งตามสาขารายปี',
        titleTextStyle: {
            fontSize: 20,
        },
        height: 400,
        hAxis: {
          title: 'ปี พ.ศ.'
        },
        vAxis: {
          title: 'งบประมาณ (ล้านบาท)'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('timeseries_div'));

      chart.draw(data, options);
    }