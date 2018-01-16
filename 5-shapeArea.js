//Function to find the changing area of a shape 
//followinng the pattern of the img below
//https://codefightsuserpics.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1491302317375

function shapeArea(n) {
   let area = 1;
      for (var i = 1; i < n; i++){area += 4 * i;}
      return area;
}

