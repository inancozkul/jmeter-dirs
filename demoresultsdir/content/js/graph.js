/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2402.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 357.0], [0.8, 357.0], [0.9, 357.0], [1.0, 357.0], [1.1, 357.0], [1.2, 357.0], [1.3, 357.0], [1.4, 360.0], [1.5, 360.0], [1.6, 360.0], [1.7, 360.0], [1.8, 360.0], [1.9, 360.0], [2.0, 366.0], [2.1, 366.0], [2.2, 366.0], [2.3, 366.0], [2.4, 366.0], [2.5, 366.0], [2.6, 366.0], [2.7, 367.0], [2.8, 367.0], [2.9, 367.0], [3.0, 367.0], [3.1, 367.0], [3.2, 367.0], [3.3, 367.0], [3.4, 368.0], [3.5, 368.0], [3.6, 368.0], [3.7, 368.0], [3.8, 368.0], [3.9, 368.0], [4.0, 368.0], [4.1, 368.0], [4.2, 368.0], [4.3, 368.0], [4.4, 368.0], [4.5, 368.0], [4.6, 368.0], [4.7, 374.0], [4.8, 374.0], [4.9, 374.0], [5.0, 374.0], [5.1, 374.0], [5.2, 374.0], [5.3, 374.0], [5.4, 374.0], [5.5, 374.0], [5.6, 374.0], [5.7, 374.0], [5.8, 374.0], [5.9, 374.0], [6.0, 375.0], [6.1, 375.0], [6.2, 375.0], [6.3, 375.0], [6.4, 375.0], [6.5, 375.0], [6.6, 375.0], [6.7, 375.0], [6.8, 375.0], [6.9, 375.0], [7.0, 375.0], [7.1, 375.0], [7.2, 375.0], [7.3, 375.0], [7.4, 376.0], [7.5, 376.0], [7.6, 376.0], [7.7, 376.0], [7.8, 376.0], [7.9, 376.0], [8.0, 376.0], [8.1, 376.0], [8.2, 376.0], [8.3, 376.0], [8.4, 376.0], [8.5, 376.0], [8.6, 376.0], [8.7, 377.0], [8.8, 377.0], [8.9, 377.0], [9.0, 377.0], [9.1, 377.0], [9.2, 377.0], [9.3, 377.0], [9.4, 377.0], [9.5, 377.0], [9.6, 377.0], [9.7, 377.0], [9.8, 377.0], [9.9, 377.0], [10.0, 377.0], [10.1, 377.0], [10.2, 377.0], [10.3, 377.0], [10.4, 377.0], [10.5, 377.0], [10.6, 377.0], [10.7, 378.0], [10.8, 378.0], [10.9, 378.0], [11.0, 378.0], [11.1, 378.0], [11.2, 378.0], [11.3, 378.0], [11.4, 381.0], [11.5, 381.0], [11.6, 381.0], [11.7, 381.0], [11.8, 381.0], [11.9, 381.0], [12.0, 382.0], [12.1, 382.0], [12.2, 382.0], [12.3, 382.0], [12.4, 382.0], [12.5, 382.0], [12.6, 382.0], [12.7, 383.0], [12.8, 383.0], [12.9, 383.0], [13.0, 383.0], [13.1, 383.0], [13.2, 383.0], [13.3, 383.0], [13.4, 383.0], [13.5, 383.0], [13.6, 383.0], [13.7, 383.0], [13.8, 383.0], [13.9, 383.0], [14.0, 383.0], [14.1, 383.0], [14.2, 383.0], [14.3, 383.0], [14.4, 383.0], [14.5, 383.0], [14.6, 383.0], [14.7, 384.0], [14.8, 384.0], [14.9, 384.0], [15.0, 384.0], [15.1, 384.0], [15.2, 384.0], [15.3, 384.0], [15.4, 385.0], [15.5, 385.0], [15.6, 385.0], [15.7, 385.0], [15.8, 385.0], [15.9, 385.0], [16.0, 385.0], [16.1, 385.0], [16.2, 385.0], [16.3, 385.0], [16.4, 385.0], [16.5, 385.0], [16.6, 385.0], [16.7, 386.0], [16.8, 386.0], [16.9, 386.0], [17.0, 386.0], [17.1, 386.0], [17.2, 386.0], [17.3, 386.0], [17.4, 386.0], [17.5, 386.0], [17.6, 386.0], [17.7, 386.0], [17.8, 386.0], [17.9, 386.0], [18.0, 387.0], [18.1, 387.0], [18.2, 387.0], [18.3, 387.0], [18.4, 387.0], [18.5, 387.0], [18.6, 387.0], [18.7, 387.0], [18.8, 387.0], [18.9, 387.0], [19.0, 387.0], [19.1, 387.0], [19.2, 387.0], [19.3, 387.0], [19.4, 389.0], [19.5, 389.0], [19.6, 389.0], [19.7, 389.0], [19.8, 389.0], [19.9, 389.0], [20.0, 390.0], [20.1, 390.0], [20.2, 390.0], [20.3, 390.0], [20.4, 390.0], [20.5, 390.0], [20.6, 390.0], [20.7, 390.0], [20.8, 390.0], [20.9, 390.0], [21.0, 390.0], [21.1, 390.0], [21.2, 390.0], [21.3, 390.0], [21.4, 390.0], [21.5, 390.0], [21.6, 390.0], [21.7, 390.0], [21.8, 390.0], [21.9, 390.0], [22.0, 393.0], [22.1, 393.0], [22.2, 393.0], [22.3, 393.0], [22.4, 393.0], [22.5, 393.0], [22.6, 393.0], [22.7, 394.0], [22.8, 394.0], [22.9, 394.0], [23.0, 394.0], [23.1, 394.0], [23.2, 394.0], [23.3, 394.0], [23.4, 394.0], [23.5, 394.0], [23.6, 394.0], [23.7, 394.0], [23.8, 394.0], [23.9, 394.0], [24.0, 394.0], [24.1, 394.0], [24.2, 394.0], [24.3, 394.0], [24.4, 394.0], [24.5, 394.0], [24.6, 394.0], [24.7, 395.0], [24.8, 395.0], [24.9, 395.0], [25.0, 395.0], [25.1, 395.0], [25.2, 395.0], [25.3, 395.0], [25.4, 395.0], [25.5, 395.0], [25.6, 395.0], [25.7, 395.0], [25.8, 395.0], [25.9, 395.0], [26.0, 397.0], [26.1, 397.0], [26.2, 397.0], [26.3, 397.0], [26.4, 397.0], [26.5, 397.0], [26.6, 397.0], [26.7, 399.0], [26.8, 399.0], [26.9, 399.0], [27.0, 399.0], [27.1, 399.0], [27.2, 399.0], [27.3, 399.0], [27.4, 401.0], [27.5, 401.0], [27.6, 401.0], [27.7, 401.0], [27.8, 401.0], [27.9, 401.0], [28.0, 401.0], [28.1, 401.0], [28.2, 401.0], [28.3, 401.0], [28.4, 401.0], [28.5, 401.0], [28.6, 401.0], [28.7, 401.0], [28.8, 401.0], [28.9, 401.0], [29.0, 401.0], [29.1, 401.0], [29.2, 401.0], [29.3, 401.0], [29.4, 402.0], [29.5, 402.0], [29.6, 402.0], [29.7, 402.0], [29.8, 402.0], [29.9, 402.0], [30.0, 403.0], [30.1, 403.0], [30.2, 403.0], [30.3, 403.0], [30.4, 403.0], [30.5, 403.0], [30.6, 403.0], [30.7, 405.0], [30.8, 405.0], [30.9, 405.0], [31.0, 405.0], [31.1, 405.0], [31.2, 405.0], [31.3, 405.0], [31.4, 407.0], [31.5, 407.0], [31.6, 407.0], [31.7, 407.0], [31.8, 407.0], [31.9, 407.0], [32.0, 409.0], [32.1, 409.0], [32.2, 409.0], [32.3, 409.0], [32.4, 409.0], [32.5, 409.0], [32.6, 409.0], [32.7, 411.0], [32.8, 411.0], [32.9, 411.0], [33.0, 411.0], [33.1, 411.0], [33.2, 411.0], [33.3, 411.0], [33.4, 412.0], [33.5, 412.0], [33.6, 412.0], [33.7, 412.0], [33.8, 412.0], [33.9, 412.0], [34.0, 413.0], [34.1, 413.0], [34.2, 413.0], [34.3, 413.0], [34.4, 413.0], [34.5, 413.0], [34.6, 413.0], [34.7, 413.0], [34.8, 413.0], [34.9, 413.0], [35.0, 413.0], [35.1, 413.0], [35.2, 413.0], [35.3, 413.0], [35.4, 417.0], [35.5, 417.0], [35.6, 417.0], [35.7, 417.0], [35.8, 417.0], [35.9, 417.0], [36.0, 421.0], [36.1, 421.0], [36.2, 421.0], [36.3, 421.0], [36.4, 421.0], [36.5, 421.0], [36.6, 421.0], [36.7, 423.0], [36.8, 423.0], [36.9, 423.0], [37.0, 423.0], [37.1, 423.0], [37.2, 423.0], [37.3, 423.0], [37.4, 441.0], [37.5, 441.0], [37.6, 441.0], [37.7, 441.0], [37.8, 441.0], [37.9, 441.0], [38.0, 483.0], [38.1, 483.0], [38.2, 483.0], [38.3, 483.0], [38.4, 483.0], [38.5, 483.0], [38.6, 483.0], [38.7, 719.0], [38.8, 719.0], [38.9, 719.0], [39.0, 719.0], [39.1, 719.0], [39.2, 719.0], [39.3, 719.0], [39.4, 753.0], [39.5, 753.0], [39.6, 753.0], [39.7, 753.0], [39.8, 753.0], [39.9, 753.0], [40.0, 772.0], [40.1, 772.0], [40.2, 772.0], [40.3, 772.0], [40.4, 772.0], [40.5, 772.0], [40.6, 772.0], [40.7, 774.0], [40.8, 774.0], [40.9, 774.0], [41.0, 774.0], [41.1, 774.0], [41.2, 774.0], [41.3, 774.0], [41.4, 785.0], [41.5, 785.0], [41.6, 785.0], [41.7, 785.0], [41.8, 785.0], [41.9, 785.0], [42.0, 786.0], [42.1, 786.0], [42.2, 786.0], [42.3, 786.0], [42.4, 786.0], [42.5, 786.0], [42.6, 786.0], [42.7, 788.0], [42.8, 788.0], [42.9, 788.0], [43.0, 788.0], [43.1, 788.0], [43.2, 788.0], [43.3, 788.0], [43.4, 793.0], [43.5, 793.0], [43.6, 793.0], [43.7, 793.0], [43.8, 793.0], [43.9, 793.0], [44.0, 801.0], [44.1, 801.0], [44.2, 801.0], [44.3, 801.0], [44.4, 801.0], [44.5, 801.0], [44.6, 801.0], [44.7, 815.0], [44.8, 815.0], [44.9, 815.0], [45.0, 815.0], [45.1, 815.0], [45.2, 815.0], [45.3, 815.0], [45.4, 815.0], [45.5, 815.0], [45.6, 815.0], [45.7, 815.0], [45.8, 815.0], [45.9, 815.0], [46.0, 815.0], [46.1, 815.0], [46.2, 815.0], [46.3, 815.0], [46.4, 815.0], [46.5, 815.0], [46.6, 815.0], [46.7, 817.0], [46.8, 817.0], [46.9, 817.0], [47.0, 817.0], [47.1, 817.0], [47.2, 817.0], [47.3, 817.0], [47.4, 822.0], [47.5, 822.0], [47.6, 822.0], [47.7, 822.0], [47.8, 822.0], [47.9, 822.0], [48.0, 823.0], [48.1, 823.0], [48.2, 823.0], [48.3, 823.0], [48.4, 823.0], [48.5, 823.0], [48.6, 823.0], [48.7, 824.0], [48.8, 824.0], [48.9, 824.0], [49.0, 824.0], [49.1, 824.0], [49.2, 824.0], [49.3, 824.0], [49.4, 826.0], [49.5, 826.0], [49.6, 826.0], [49.7, 826.0], [49.8, 826.0], [49.9, 826.0], [50.0, 827.0], [50.1, 827.0], [50.2, 827.0], [50.3, 827.0], [50.4, 827.0], [50.5, 827.0], [50.6, 827.0], [50.7, 830.0], [50.8, 830.0], [50.9, 830.0], [51.0, 830.0], [51.1, 830.0], [51.2, 830.0], [51.3, 830.0], [51.4, 830.0], [51.5, 830.0], [51.6, 830.0], [51.7, 830.0], [51.8, 830.0], [51.9, 830.0], [52.0, 830.0], [52.1, 830.0], [52.2, 830.0], [52.3, 830.0], [52.4, 830.0], [52.5, 830.0], [52.6, 830.0], [52.7, 831.0], [52.8, 831.0], [52.9, 831.0], [53.0, 831.0], [53.1, 831.0], [53.2, 831.0], [53.3, 831.0], [53.4, 833.0], [53.5, 833.0], [53.6, 833.0], [53.7, 833.0], [53.8, 833.0], [53.9, 833.0], [54.0, 834.0], [54.1, 834.0], [54.2, 834.0], [54.3, 834.0], [54.4, 834.0], [54.5, 834.0], [54.6, 834.0], [54.7, 834.0], [54.8, 834.0], [54.9, 834.0], [55.0, 834.0], [55.1, 834.0], [55.2, 834.0], [55.3, 834.0], [55.4, 835.0], [55.5, 835.0], [55.6, 835.0], [55.7, 835.0], [55.8, 835.0], [55.9, 835.0], [56.0, 838.0], [56.1, 838.0], [56.2, 838.0], [56.3, 838.0], [56.4, 838.0], [56.5, 838.0], [56.6, 838.0], [56.7, 839.0], [56.8, 839.0], [56.9, 839.0], [57.0, 839.0], [57.1, 839.0], [57.2, 839.0], [57.3, 839.0], [57.4, 840.0], [57.5, 840.0], [57.6, 840.0], [57.7, 840.0], [57.8, 840.0], [57.9, 840.0], [58.0, 840.0], [58.1, 840.0], [58.2, 840.0], [58.3, 840.0], [58.4, 840.0], [58.5, 840.0], [58.6, 840.0], [58.7, 845.0], [58.8, 845.0], [58.9, 845.0], [59.0, 845.0], [59.1, 845.0], [59.2, 845.0], [59.3, 845.0], [59.4, 847.0], [59.5, 847.0], [59.6, 847.0], [59.7, 847.0], [59.8, 847.0], [59.9, 847.0], [60.0, 848.0], [60.1, 848.0], [60.2, 848.0], [60.3, 848.0], [60.4, 848.0], [60.5, 848.0], [60.6, 848.0], [60.7, 849.0], [60.8, 849.0], [60.9, 849.0], [61.0, 849.0], [61.1, 849.0], [61.2, 849.0], [61.3, 849.0], [61.4, 849.0], [61.5, 849.0], [61.6, 849.0], [61.7, 849.0], [61.8, 849.0], [61.9, 849.0], [62.0, 851.0], [62.1, 851.0], [62.2, 851.0], [62.3, 851.0], [62.4, 851.0], [62.5, 851.0], [62.6, 851.0], [62.7, 851.0], [62.8, 851.0], [62.9, 851.0], [63.0, 851.0], [63.1, 851.0], [63.2, 851.0], [63.3, 851.0], [63.4, 854.0], [63.5, 854.0], [63.6, 854.0], [63.7, 854.0], [63.8, 854.0], [63.9, 854.0], [64.0, 855.0], [64.1, 855.0], [64.2, 855.0], [64.3, 855.0], [64.4, 855.0], [64.5, 855.0], [64.6, 855.0], [64.7, 857.0], [64.8, 857.0], [64.9, 857.0], [65.0, 857.0], [65.1, 857.0], [65.2, 857.0], [65.3, 857.0], [65.4, 858.0], [65.5, 858.0], [65.6, 858.0], [65.7, 858.0], [65.8, 858.0], [65.9, 858.0], [66.0, 859.0], [66.1, 859.0], [66.2, 859.0], [66.3, 859.0], [66.4, 859.0], [66.5, 859.0], [66.6, 859.0], [66.7, 860.0], [66.8, 860.0], [66.9, 860.0], [67.0, 860.0], [67.1, 860.0], [67.2, 860.0], [67.3, 860.0], [67.4, 862.0], [67.5, 862.0], [67.6, 862.0], [67.7, 862.0], [67.8, 862.0], [67.9, 862.0], [68.0, 862.0], [68.1, 862.0], [68.2, 862.0], [68.3, 862.0], [68.4, 862.0], [68.5, 862.0], [68.6, 862.0], [68.7, 863.0], [68.8, 863.0], [68.9, 863.0], [69.0, 863.0], [69.1, 863.0], [69.2, 863.0], [69.3, 863.0], [69.4, 866.0], [69.5, 866.0], [69.6, 866.0], [69.7, 866.0], [69.8, 866.0], [69.9, 866.0], [70.0, 867.0], [70.1, 867.0], [70.2, 867.0], [70.3, 867.0], [70.4, 867.0], [70.5, 867.0], [70.6, 867.0], [70.7, 867.0], [70.8, 867.0], [70.9, 867.0], [71.0, 867.0], [71.1, 867.0], [71.2, 867.0], [71.3, 867.0], [71.4, 867.0], [71.5, 867.0], [71.6, 867.0], [71.7, 867.0], [71.8, 867.0], [71.9, 867.0], [72.0, 867.0], [72.1, 867.0], [72.2, 867.0], [72.3, 867.0], [72.4, 867.0], [72.5, 867.0], [72.6, 867.0], [72.7, 868.0], [72.8, 868.0], [72.9, 868.0], [73.0, 868.0], [73.1, 868.0], [73.2, 868.0], [73.3, 868.0], [73.4, 869.0], [73.5, 869.0], [73.6, 869.0], [73.7, 869.0], [73.8, 869.0], [73.9, 869.0], [74.0, 871.0], [74.1, 871.0], [74.2, 871.0], [74.3, 871.0], [74.4, 871.0], [74.5, 871.0], [74.6, 871.0], [74.7, 872.0], [74.8, 872.0], [74.9, 872.0], [75.0, 872.0], [75.1, 872.0], [75.2, 872.0], [75.3, 872.0], [75.4, 873.0], [75.5, 873.0], [75.6, 873.0], [75.7, 873.0], [75.8, 873.0], [75.9, 873.0], [76.0, 873.0], [76.1, 873.0], [76.2, 873.0], [76.3, 873.0], [76.4, 873.0], [76.5, 873.0], [76.6, 873.0], [76.7, 874.0], [76.8, 874.0], [76.9, 874.0], [77.0, 874.0], [77.1, 874.0], [77.2, 874.0], [77.3, 874.0], [77.4, 875.0], [77.5, 875.0], [77.6, 875.0], [77.7, 875.0], [77.8, 875.0], [77.9, 875.0], [78.0, 875.0], [78.1, 875.0], [78.2, 875.0], [78.3, 875.0], [78.4, 875.0], [78.5, 875.0], [78.6, 875.0], [78.7, 875.0], [78.8, 875.0], [78.9, 875.0], [79.0, 875.0], [79.1, 875.0], [79.2, 875.0], [79.3, 875.0], [79.4, 879.0], [79.5, 879.0], [79.6, 879.0], [79.7, 879.0], [79.8, 879.0], [79.9, 879.0], [80.0, 881.0], [80.1, 881.0], [80.2, 881.0], [80.3, 881.0], [80.4, 881.0], [80.5, 881.0], [80.6, 881.0], [80.7, 882.0], [80.8, 882.0], [80.9, 882.0], [81.0, 882.0], [81.1, 882.0], [81.2, 882.0], [81.3, 882.0], [81.4, 885.0], [81.5, 885.0], [81.6, 885.0], [81.7, 885.0], [81.8, 885.0], [81.9, 885.0], [82.0, 885.0], [82.1, 885.0], [82.2, 885.0], [82.3, 885.0], [82.4, 885.0], [82.5, 885.0], [82.6, 885.0], [82.7, 887.0], [82.8, 887.0], [82.9, 887.0], [83.0, 887.0], [83.1, 887.0], [83.2, 887.0], [83.3, 887.0], [83.4, 889.0], [83.5, 889.0], [83.6, 889.0], [83.7, 889.0], [83.8, 889.0], [83.9, 889.0], [84.0, 889.0], [84.1, 889.0], [84.2, 889.0], [84.3, 889.0], [84.4, 889.0], [84.5, 889.0], [84.6, 889.0], [84.7, 891.0], [84.8, 891.0], [84.9, 891.0], [85.0, 891.0], [85.1, 891.0], [85.2, 891.0], [85.3, 891.0], [85.4, 893.0], [85.5, 893.0], [85.6, 893.0], [85.7, 893.0], [85.8, 893.0], [85.9, 893.0], [86.0, 894.0], [86.1, 894.0], [86.2, 894.0], [86.3, 894.0], [86.4, 894.0], [86.5, 894.0], [86.6, 894.0], [86.7, 896.0], [86.8, 896.0], [86.9, 896.0], [87.0, 896.0], [87.1, 896.0], [87.2, 896.0], [87.3, 896.0], [87.4, 898.0], [87.5, 898.0], [87.6, 898.0], [87.7, 898.0], [87.8, 898.0], [87.9, 898.0], [88.0, 898.0], [88.1, 901.0], [88.2, 901.0], [88.3, 901.0], [88.4, 901.0], [88.5, 901.0], [88.6, 901.0], [88.7, 902.0], [88.8, 902.0], [88.9, 902.0], [89.0, 902.0], [89.1, 902.0], [89.2, 902.0], [89.3, 902.0], [89.4, 905.0], [89.5, 905.0], [89.6, 905.0], [89.7, 905.0], [89.8, 905.0], [89.9, 905.0], [90.0, 905.0], [90.1, 906.0], [90.2, 906.0], [90.3, 906.0], [90.4, 906.0], [90.5, 906.0], [90.6, 906.0], [90.7, 906.0], [90.8, 906.0], [90.9, 906.0], [91.0, 906.0], [91.1, 906.0], [91.2, 906.0], [91.3, 906.0], [91.4, 908.0], [91.5, 908.0], [91.6, 908.0], [91.7, 908.0], [91.8, 908.0], [91.9, 908.0], [92.0, 908.0], [92.1, 908.0], [92.2, 908.0], [92.3, 908.0], [92.4, 908.0], [92.5, 908.0], [92.6, 908.0], [92.7, 911.0], [92.8, 911.0], [92.9, 911.0], [93.0, 911.0], [93.1, 911.0], [93.2, 911.0], [93.3, 911.0], [93.4, 912.0], [93.5, 912.0], [93.6, 912.0], [93.7, 912.0], [93.8, 912.0], [93.9, 912.0], [94.0, 912.0], [94.1, 914.0], [94.2, 914.0], [94.3, 914.0], [94.4, 914.0], [94.5, 914.0], [94.6, 914.0], [94.7, 915.0], [94.8, 915.0], [94.9, 915.0], [95.0, 915.0], [95.1, 915.0], [95.2, 915.0], [95.3, 915.0], [95.4, 942.0], [95.5, 942.0], [95.6, 942.0], [95.7, 942.0], [95.8, 942.0], [95.9, 942.0], [96.0, 942.0], [96.1, 950.0], [96.2, 950.0], [96.3, 950.0], [96.4, 950.0], [96.5, 950.0], [96.6, 950.0], [96.7, 1848.0], [96.8, 1848.0], [96.9, 1848.0], [97.0, 1848.0], [97.1, 1848.0], [97.2, 1848.0], [97.3, 1848.0], [97.4, 1976.0], [97.5, 1976.0], [97.6, 1976.0], [97.7, 1976.0], [97.8, 1976.0], [97.9, 1976.0], [98.0, 1976.0], [98.1, 2052.0], [98.2, 2052.0], [98.3, 2052.0], [98.4, 2052.0], [98.5, 2052.0], [98.6, 2052.0], [98.7, 2076.0], [98.8, 2076.0], [98.9, 2076.0], [99.0, 2076.0], [99.1, 2076.0], [99.2, 2076.0], [99.3, 2076.0], [99.4, 2402.0], [99.5, 2402.0], [99.6, 2402.0], [99.7, 2402.0], [99.8, 2402.0], [99.9, 2402.0], [100.0, 2402.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 66.0, "series": [{"data": [[0.0, 1.0], [2400.0, 1.0], [300.0, 40.0], [700.0, 8.0], [800.0, 66.0], [400.0, 17.0], [1800.0, 1.0], [900.0, 13.0], [1900.0, 1.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 87.0, "series": [{"data": [[0.0, 57.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 87.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.6933333333333325, "minX": 1.58616438E12, "maxY": 5.0, "series": [{"data": [[1.58616444E12, 4.6933333333333325], [1.58616438E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58616444E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 644.5, "minX": 1.0, "maxY": 873.0, "series": [{"data": [[4.0, 644.5], [2.0, 767.4], [1.0, 857.0], [5.0, 711.8156028368793], [3.0, 873.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.846666666666666, 714.8133333333333]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 148.0, "minX": 1.58616438E12, "maxY": 16767.5, "series": [{"data": [[1.58616444E12, 16578.666666666668], [1.58616438E12, 16767.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58616444E12, 148.0], [1.58616438E12, 150.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58616444E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 661.1466666666666, "minX": 1.58616438E12, "maxY": 768.48, "series": [{"data": [[1.58616444E12, 661.1466666666666], [1.58616438E12, 768.48]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58616444E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 359.6799999999999, "minX": 1.58616438E12, "maxY": 439.23999999999995, "series": [{"data": [[1.58616444E12, 359.6799999999999], [1.58616438E12, 439.23999999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58616444E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 35.37333333333334, "minX": 1.58616438E12, "maxY": 62.639999999999965, "series": [{"data": [[1.58616444E12, 35.37333333333334], [1.58616438E12, 62.639999999999965]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58616444E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 357.0, "minX": 1.58616438E12, "maxY": 2402.0, "series": [{"data": [[1.58616444E12, 950.0], [1.58616438E12, 2402.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58616444E12, 360.0], [1.58616438E12, 357.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58616444E12, 892.5], [1.58616438E12, 911.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58616444E12, 950.0], [1.58616438E12, 2402.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58616444E12, 908.0], [1.58616438E12, 1991.2000000000003]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58616444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 851.5, "series": [{"data": [[2.0, 851.5], [1.0, 399.0], [4.0, 824.0], [5.0, 831.5], [3.0, 837.0], [6.0, 561.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 1.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 447.5, "series": [{"data": [[2.0, 447.5], [1.0, 228.5], [4.0, 436.0], [5.0, 439.0], [3.0, 436.0], [6.0, 334.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.58616438E12, "maxY": 1.2833333333333334, "series": [{"data": [[1.58616444E12, 1.2166666666666666], [1.58616438E12, 1.2833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58616444E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58616438E12, "maxY": 1.25, "series": [{"data": [[1.58616444E12, 1.2333333333333334], [1.58616438E12, 1.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58616444E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58616444E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58616438E12, "maxY": 1.25, "series": [{"data": [[1.58616444E12, 1.2333333333333334], [1.58616438E12, 1.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.58616444E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58616444E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58616438E12, "maxY": 1.25, "series": [{"data": [[1.58616444E12, 1.2333333333333334], [1.58616438E12, 1.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58616444E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58616444E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

