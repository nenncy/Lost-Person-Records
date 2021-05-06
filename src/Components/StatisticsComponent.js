
import React, { Component } from 'react'
import {  Bar, Bubble, LineChart, Line, Pie, PieChart } from 'react-chartjs-2';


class Stats extends Component {
      constructor(props) {
          super(props);
              this.state = {
                 chartData:{                   
                          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
                          datasets: [
                          {
                             label:'Records',
                             data:[
                                 10, 
                                 20,
                                 12,
                                 15,
                                 10, 
                                 20,
                                 25,
                                 15,
                                 10, 
                                 45,
                                 35,
                                 15  
                              ],
                          backgroundColor:[
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(0, 179, 89, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(51, 102, 0, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)'
                           ]
                          }
                         ]
                 },
                 Piechartdata:{                   
                  labels: ['Ahmedabad', 'Surat', 'Vadadora', 'Vapi', 'Valsad', 'Silvassa', 'Rajkot','Porbandra', 'Bharuch'],
                  datasets: [
                  {
                     label:'Records',
                     data:[
                         10, 
                         20,
                         25,
                         15,
                         10, 
                         20,
                         25,
                         15,
                         10
                      ],
                  backgroundColor:[
                        'rgba(255, 153, 204, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(0, 255, 255, 0.6)',
                        'rgba(204, 0, 68, 0.6)',
                        'rgba(153, 255, 51, 0.6)',
                        'rgba(0, 179, 89, 0.6)',
                        'rgba(102, 255, 102, 0.6)',
                        'rgba(51, 102, 0, 0.6)',
                        'rgba(54, 90, 150, 0.6)',
                       
                   ]
                  }
                 ]
               },
               linechartdata:{                   
                  labels: ['Users', 'Overall Cases Solved'],
                  datasets: [
                  {
                     label:'Data',
                     data:[
                         400, 
                         650
                      ],
                  backgroundColor:[
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                   ]
                  }
                 ]
               }    
 
              }
       }
        
      static defaultProps = {
             displayTitle: true,
             displayLegend: true,
             legendPosition: 'right',
      }

      render() {
          return(
             <div className="container chart">
                <div className="row align-items-start">

                  <div className="col">
                     <Bar
                        data={this.state.chartData}
                        options={{
                           title:{
                              display: this.props.displayTitle,
                              text: 'Records of 2020',
                              fontSize:25
                           },
                           legend: {
                              display:this.props.displayLegend,
                              position:this.props.legendPosition
                           }
                        }}
                     />
                  </div>
            
               </div>

                   <div className="col-9 mt-5 mb-5 .offset-md-3">
                     <Pie 
                        
                        data={this.state.Piechartdata}
                        options={{
                           title:{
                              display: this.props.displayTitle,
                              text: 'Solved Cases According to the City',
                              fontSize:20
                           },
                           legend: {
                              display:this.props.displayLegend,
                              position:this.props.legendPosition
                           }
                        }}
                     />
                   </div>

                </div>
           
          );
      }
}

export default Stats;