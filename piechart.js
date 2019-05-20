google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['สาขา', 'งบประมาณ'],
    ['สาขาสถาบันการเงิน', 91685.1],
    ['สาขาขนส้ง', 25406.9],
    ['สาขาสังคมและเทคโนโลยี', 11571.2],
    ['สาขาสาธารณูปการ', 6576.8],
    ['สาขาการเกษตร', 4339.5],
    ['สาขาทรัพยากรธรรมชาติ', 1421.8],
    ['สาขาพลังงาน', 0]
  ]);

  var options = {
    title: 'งบประมาณแบ่งสัดส่วนจากทั้งหมด ปี 2562',
    titleTextStyle: {
      fontSize: 20,
    },
    height: 400,
    width: 650,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_div'));

  chart.draw(data, options);
}